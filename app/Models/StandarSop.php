<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StandarSop extends Model
{
    use HasFactory;

    protected $table = 'standar_operasional';
    public $timestamps = false;

    protected $fillable = [
        'kode_unit',
        'kode_sn',
        'kode_sop',
        'nama_sop',
        'id_penanggung_jawab',
        'tgl_sop',
    ];
}
