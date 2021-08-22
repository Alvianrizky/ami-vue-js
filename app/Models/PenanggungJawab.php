<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenanggungJawab extends Model
{
    use HasFactory;

    protected $table = 'penanggung_jawab';
    public $timestamps = false;

    protected $fillable = [
        'id_penanggung_jawab',
        'nik',
        'nama',
        'email',
        'no_hp',
        'uuid_jabatan',
    ];
}
