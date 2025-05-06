<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Aquí puedes registrar rutas API. Estas rutas normalmente usan
| el middleware "api".
|
*/

Route::apiResource('v1/posts', PostController::class)->only('show');

Route::middleware('api')->get('/ping', function () {
    return response()->json(['message' => 'pong']);
});
