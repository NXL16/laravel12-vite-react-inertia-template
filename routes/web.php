<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", fn() => Inertia::render("Welcome", ['appName' => config("app.name", "myBank")]));

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
