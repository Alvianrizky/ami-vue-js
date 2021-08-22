<?php

namespace App\Http\Controllers;

use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;
use App\Http\Requests\ValidateUserRegistration;
use App\Http\Requests\ValidateUserLogin;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(ValidateUserRegistration $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        return new UserResource($user);
    }

    public function login(ValidateUserLogin $request)
    {
        $credentials = request(['name', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return  response()->json([
                'errors' => [
                    'msg' => ['Incorrect username or password.']
                ]
            ], 401);
        }

        $query = User::where('name', $credentials['name'])->first();

        return response()->json([
            'type' => 'success',
            'message' => 'Logged in.',
            'user' => $query->id,
            'token' => $token,
            'akses' => $query->hak_akses
        ]);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }

    public function user()
    {
        return new UserResource(auth()->user());
    }
}
