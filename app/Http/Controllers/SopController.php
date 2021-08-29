<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StandarSop;
use App\Models\VwSubStandar;

class SopController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwSubStandar::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_unit' => 'required',
            'kode_sn' => 'required',
            'kode_sop' => 'required',
            'nama_sop' => 'required',
            'id_penanggung_jawab' => 'required',
            'tgl_sop' => 'required',
        ]);

        $data = [
            'kode_unit' => $request->kode_unit,
            'kode_sn' => $request->kode_sn,
            'kode_sop' => $request->kode_sop,
            'nama_sop' => $request->nama_sop,
            'id_penanggung_jawab' => $request->id_penanggung_jawab,
            'tgl_sop' => $request->tgl_sop,
        ];

        StandarSop::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'kode_unit' => 'required',
            'kode_sn' => 'required',
            'kode_sop' => 'required',
            'nama_sop' => 'required',
            'id_penanggung_jawab' => 'required',
            'tgl_sop' => 'required',
        ]);

        $data = [
            'kode_unit' => $request->kode_unit,
            'kode_sn' => $request->kode_sn,
            'kode_sop' => $request->kode_sop,
            'nama_sop' => $request->nama_sop,
            'id_penanggung_jawab' => $request->id_penanggung_jawab,
            'tgl_sop' => $request->tgl_sop,
        ];

        StandarSop::where('id', $id)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($id)
    {
        $query = StandarSop::where('id', $id);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
