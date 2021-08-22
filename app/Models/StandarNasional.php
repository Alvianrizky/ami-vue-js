<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StandarNasional extends Model
{
    use HasFactory;

    protected $table = 'standar_nasional';
    public $timestamps = false;

    protected $fillable = [
        'kode_sn',
        'nama_sn',
        'tanggal_sn',
    ];

}
