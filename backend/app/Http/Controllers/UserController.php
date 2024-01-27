<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //ROTA DE CADASTRO
    public function register(Request $request){
        $messages = [
            'required' => 'O :attribute é obrigatório!',
            'email.email' => 'Digite um email válido!',
            'unique' => 'Esse email já está cadastrado',
            'confirmed' => 'As senhas não são iguais',
            'min' => 'A senha precisa ter mais de 6 caracteres'
        ];

        $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['required','string','email','max:255','unique:users'],
            'password' => ['required','string','min:6','confirmed']
        ],$messages);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $token = $user->createToken($request->email)->plainTextToken;

        $response = [
            'token' => $token
        ];
        return response($response);
    }

    //ROTA DE LOGIN
    public function login(Request $request){
        $messages = [
            'required' => 'O :attribute é obrigatório!',
            'email.email' => 'Digite um email válido!'
        ];

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ],$messages);
        $user = User::where('email', $request->email)->first();

        //VERIFICAÇÃO SE A SENHA RECEBIDA NO LOGIN É VALIDA
        if(!$user || !Hash::check($request->password, $user->password)){
            throw ValidationException::withMessages([
                'email' => ['As credenciais fornecidas estão incorretas']
            ]);
        };

        $token = $user->createToken($request->email)->plainTextToken;

        $response = [
            'token' => $token
        ];

        return response($response);
    }

    //ROTA QUE RECEBE O TOKEN E RETORNA O USUARIO LOGADO
    public function user(){
        $user = auth()->user();
        return response($user,200);
    }

    //ROTA QUE ATUALIZA O NOME DO USUARIO CONFIRMANDO COM EMAIL
    public function update(Request $request){

        $user = User::where('email',$request->email)->first();

        $user->name = $request->name;

        $user->save();

        return ($user);
    }

    //ROTA QUE RECEBE O ID DO USUARIO E O UTILIZA COMO REFERENCIA PARA APAGAR O TOKEN DO MESMO
    public function logout(){
        $user = auth()->user();
        DB::delete('delete from personal_access_tokens where tokenable_id = '.$user->id);
    }
}
