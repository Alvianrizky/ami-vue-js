<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokumen extends Model
{
    use HasFactory;

    protected $table = 'dokumen';
    public $timestamps = false;

    protected $fillable = [
        'id_dokumen',
        'kode_sop',
        'nama_dokumen',
        'dokumen',
        'tgl_dokumen',
    ];
}
