<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\ProjectController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Http\Controllers\UserController;

//ROTAS ACESSADAS POR USUARIOS NÃO LOGADOS
Route::post('register',[UserController::class, 'register']);
Route::post('login',[UserController::class, 'login']);


Route::middleware('auth:sanctum')->group(function(){
    //User interactions authenticated
    Route::get('user', [UserController::class, 'user']);
    Route::post('edit', [UserController::class, 'update']);

    //User projects interactions authenticated
    Route::post('create-project', [ProjectController::class, 'create']);
    Route::get('project', [ProjectController::class, 'show']);
    Route::get('logout', [UserController::class, 'logout']);
    Route::post('edit-project', [ProjectController::class, 'update']);
    Route::delete('delete-project/{id}',[ProjectController::class, 'destroy']);
});

