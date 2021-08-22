<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ButirSop extends Model
{
    use HasFactory;

    protected $table = 'butir_sop';
    public $timestamps = false;

    protected $fillable = [
        'kode_sop',
        'kode_butir',
        'isi_butir',
        'indikator',
        'tgl_butir',
    ];
}
