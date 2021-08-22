<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\VwUsers;
use App\Models\Evaluasi;

class AuditController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }
    
    public function index($id)
    {
        $query = VwUsers::where('id', $id)->first();

        $data = DB::select("SELECT sop.*,adt.*,jdw.*,btr.*,dsk.* 
        FROM jadwal jdw 
        INNER JOIN standar_operasional sop ON sop.kode_sop = jdw.kode_sop 
        INNER JOIN pengguna adt ON adt.id = jdw.id_auditor 
        INNER JOIN butir_sop btr ON btr.kode_sop = jdw.kode_sop 
        INNER JOIN deskriptor dsk ON dsk.kode_butir = btr.kode_butir 
        WHERE jdw.id_auditor = $query->id_pengguna
        ");

        return response()->json($data);
    }

    public function instrumenAudit()
    {
        $data = DB::select("SELECT sop.*,adt.*,jdw.*,btr.*,dsk.* 
        FROM jadwal jdw 
        INNER JOIN standar_operasional sop ON sop.kode_sop = jdw.kode_sop 
        INNER JOIN pengguna adt ON adt.id = jdw.id_auditor 
        INNER JOIN butir_sop btr ON btr.kode_sop = jdw.kode_sop 
        INNER JOIN deskriptor dsk ON dsk.kode_butir = btr.kode_butir");

        return response()->json($data);
    }

    public function hasil($id)
    {
        $query = VwUsers::where('id', $id)->first();

        $data = DB::select("SELECT sop.*,adt.*,btr.*,dsk.*,evl.*,jdw.* 
        FROM evaluasi evl 
        INNER JOIN standar_operasional sop ON sop.kode_sop = evl.kode_sop 
        INNER JOIN pengguna adt ON adt.id = evl.id_auditor 
        INNER JOIN butir_sop btr ON btr.kode_butir = evl.kode_butir 
        INNER JOIN deskriptor dsk ON dsk.kode_deskripsi = evl.kode_deskripsi 
        INNER JOIN jadwal jdw ON jdw.kode_jadwal = evl.kode_jadwal  
        WHERE jdw.id_auditor = $query->id_pengguna");

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_jadwal' => 'required',
            'kode_sop' => 'required',
            'kode_butir' => 'required',
            'kode_deskripsi' => 'required',
            'id_auditor' => 'required',
            'kode_unit' => 'required',
            'hasil' => 'required',
            'persentase' => 'required',
            'temuan' => 'required',
            'kategori_temuan' => 'required',
        ]);

        $data = [
            'kode_jadwal' => $request->kode_jadwal,
            'kode_sop' => $request->kode_sop,
            'kode_butir' => $request->kode_butir,
            'kode_deskripsi' => $request->kode_deskripsi,
            'id_auditor' => $request->id_auditor,
            'hasil' => $request->hasil,
            'persentase' => $request->persentase,
            'temuan' => $request->temuan,
            'kategori_temuan' => $request->kategori_temuan,
            'kode_unit' => $request->kode_jadwal,
        ];

        Evaluasi::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $id_evaluasi)
    {
        $validated = $request->validate([
            'id_evaluasi' => 'required',
            'kode_jadwal' => 'required',
            'kode_sop' => 'required',
            'kode_butir' => 'required',
            'kode_deskripsi' => 'required',
            'id_auditor' => 'required',
            'kode_unit' => 'required',
            'hasil' => 'required',
            'persentase' => 'required',
            'temuan' => 'required',
            'kategori_temuan' => 'required',
        ]);

        $data = [
            'id_evaluasi' => $request->id_evaluasi,
            'kode_jadwal' => $request->kode_jadwal,
            'kode_sop' => $request->kode_sop,
            'kode_butir' => $request->kode_butir,
            'kode_deskripsi' => $request->kode_deskripsi,
            'id_auditor' => $request->id_auditor,
            'hasil' => $request->hasil,
            'persentase' => $request->persentase,
            'temuan' => $request->temuan,
            'kategori_temuan' => $request->kategori_temuan,
            'kode_unit' => $request->kode_jadwal,
        ];

        Evaluasi::where('id_evaluasi', $id_evaluasi)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($id_evaluasi)
    {
        $query = Evaluasi::where('id_evaluasi', $id_evaluasi);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
