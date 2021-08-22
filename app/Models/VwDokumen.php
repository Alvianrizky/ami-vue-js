<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VwDokumen extends Model
{
    use HasFactory;

    protected $table = 'vw_dokumen';

    protected $fillable = [
        'id_dokumen',
        'kode_sop',
        'nama_sop',
        'nama_dokumen',
        'dokumen',
        'tgl_dokumen',
    ];
}
