<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;

    protected $table = 'jadwal';
    public $timestamps = false;

    protected $fillable = [
        'kode_jadwal',
        'kode_sop',
        'id_auditor',
        'program_studi',
        'tahun_pengukuran',
        'tanggal_mulai',
        'tanggal_selesai',
    ];
}
