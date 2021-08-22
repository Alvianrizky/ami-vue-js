<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deskriptor extends Model
{
    use HasFactory;

    protected $table = 'deskriptor';
    public $timestamps = false;

    protected $fillable = [
        'kode_sop',
        'kode_butir',
        'deskripsi',
        'pengendali_dokumen',
    ];
}
