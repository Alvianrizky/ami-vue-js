<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ButirMutu extends Model
{
    use HasFactory;

    protected $table = 'butir_mutu';

    protected $fillable = [
        'nomer_standar',
        'butir_mutu',
        'hasil_observasi',
    ];
}
