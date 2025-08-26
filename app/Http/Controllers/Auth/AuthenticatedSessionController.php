<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render("auth/Login");
    }

    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required", "string"]
        ]);

        if (!Auth::attempt($credentials, $request->boolean("remember"))) {
            return back()
                ->withErrors(["email" => "Invalid credentials."])
                ->onlyInput("email");
        }

        $request->session()->regenerate();

        return redirect()->intended("/dashboard")
            ->with("success", "Login Success!");
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect("/")
            ->with("success", "Logout success!");
    }
}
