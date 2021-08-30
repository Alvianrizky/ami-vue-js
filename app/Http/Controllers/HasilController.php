<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HasilController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }
    
    public function index()
    {
        $query = DB::select("SELECT evl.kode_sop
            , evl.kode_jadwal
            , COUNT(*) as jumlah_butir_evaluasi_pada_kode_sop
            , AVG(persentase) AS rata_rata_persentase
            , SUM(IF(hasil='ada',1,0)) AS ada
            , SUM(IF(hasil='tidak',1,0)) AS tidak
            , COUNT(*) AS jumlah,sop.*,adt.*,btr.*,dsk.*,evl.*,jdw.* 
            FROM evaluasi evl 
            INNER JOIN standar_operasional sop ON sop.kode_sop = evl.kode_sop 
            INNER JOIN pengguna adt ON adt.id = evl.id_auditor 
            INNER JOIN butir_sop btr ON btr.kode_butir = evl.kode_butir 
            INNER JOIN deskriptor dsk ON dsk.kode_deskripsi = evl.kode_deskripsi 
            INNER JOIN jadwal jdw ON jdw.kode_jadwal = evl.kode_jadwal 
            GROUP BY evl.kode_sop, evl.kode_jadwal
            ORDER BY evl.kode_sop, evl.kode_jadwal");

        return response()->json($query);
    }

    public function laporan()
    {
        $query = DB::select("SELECT sop.*,adt.*,btr.*,dsk.*,evl.*,jdw.* 
        FROM evaluasi evl 
        INNER JOIN standar_operasional sop ON sop.kode_sop = evl.kode_sop 
        INNER JOIN pengguna adt ON adt.id = evl.id_auditor 
        INNER JOIN butir_sop btr ON btr.kode_butir = evl.kode_butir 
        INNER JOIN deskriptor dsk ON dsk.kode_deskripsi = evl.kode_deskripsi 
        INNER JOIN jadwal jdw ON jdw.kode_jadwal = evl.kode_jadwal");

        return response()->json($query);
    }
}
