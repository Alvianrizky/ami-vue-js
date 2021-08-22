<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateUserRegistration extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    public function rules()
    {
        return [
            "name" => "required|unique:users",
            "email" => "required",
            "password" => "required|min:8"
        ];
    }
}
