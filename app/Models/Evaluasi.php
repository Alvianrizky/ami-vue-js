<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluasi extends Model
{
    use HasFactory;

    protected $table = 'evaluasi';
    public $timestamps = false;

    protected $fillable = [
        'id_evaluasi',
        'kode_jadwal',
        'kode_sop',
        'kode_butir',
        'kode_deskripsi',
        'id_auditor',
        'kode_unit',
        'hasil',
        'persentase',
        'temuan',
        'kategori_temuan',
    ];
}
