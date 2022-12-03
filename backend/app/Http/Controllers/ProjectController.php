<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\UserController;
use App\Models\Project;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    //ROTA PARA CRIAR O PROJETO
    public function create(Request $request)
    {
        $project = new Project;
        $project->page = $request->page;
        $project->user_id = $request->id;

        $project->save();
    }

    //ROTA QUE RETORNA OS DADOS DE TODOS OS PROJETOS DO USUARIO AUTENTICADO
    public function show()
    {
        $user = auth()->user();

        $projects = $user->projects;

        return ($projects);
    }

    //ROTA QUE DELETA O PROJETO ESCOLHIDO PELO USUARIO
    public function destroy($id)
    {
        $projects = Project::findOrFail($id);

        $projects->delete();

    }

    //ROTA NÃO IMPLEMENTADA
    public function update(Request $request, Project $project)
    {
        //
    }
}
