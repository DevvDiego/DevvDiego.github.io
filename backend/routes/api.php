<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

Route::post('/deploy-migrations', function (Request $request) {

    $request->validate([
        "token" => "required|integer|min:10"
    ]);

    if ($request->input('token') !== env('DEPLOY_SECRET')) {
        return response()->json([
            'status' => 'error',
            'message' => 'Not authorized'
        ], 403);
    }

    Artisan::call('migrate', ['--force' => true]);

    return response()->json([
        'status' => 'success',
        'message' => 'Migrations executed',
        'output' => Artisan::output()
    ]);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register']);
