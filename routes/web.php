<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", fn() => Inertia::render("Welcome", ['appName' => config("app.name", "myBank")]));

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware('auth');

Route::get('/register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'create'])
    ->name('register');

Route::get("/login", [AuthenticatedSessionController::class, "create"])
    ->name("login");

Route::post("/logout", [AuthenticatedSessionController::class, "destroy"])
    ->middleware("auth");

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
