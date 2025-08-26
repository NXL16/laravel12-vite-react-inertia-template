<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

// Routes cho khách (chưa đăng nhập)
Route::middleware("guest")->group(function () {
    // Login
    Route::get("/login", [AuthenticatedSessionController::class, "create"])
        ->name("login");
    Route::post("/login", [AuthenticatedSessionController::class, "store"]);

    // Register
    Route::get("/register", [RegisteredUserController::class, "create"])
        ->name("register");
    Route::post("/register", [RegisteredUserController::class, "store"]);
});

// Logout (chỉ cho user đã đăng nhập)
Route::post("/logout", [AuthenticatedSessionController::class, "destroy"])
    ->middleware("auth");