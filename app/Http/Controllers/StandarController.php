<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StandarNasional;

class StandarController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = StandarNasional::all();

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
            'kode_sn' => 'required',
            'nama_sn' => 'required',
            'tanggal_sn' => 'required',
        ]);

        $data = [
            'kode_sn' => $request->kode_sn,
            'nama_sn' => $request->nama_sn,
            'tanggal_sn' => $request->tanggal_sn,
        ];

        StandarNasional::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $kode_sn)
    {
        $validated = $request->validate([
            'kode_sn' => 'required',
            'nama_sn' => 'required',
            'tanggal_sn' => 'required',
        ]);

        $data = [
            'kode_sn' => $request->kode_sn,
            'nama_sn' => $request->nama_sn,
            'tanggal_sn' => $request->tanggal_sn,
        ];

        StandarNasional::where('kode_sn', $kode_sn)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($kode_sn)
    {
        $query = StandarNasional::where('kode_sn', $kode_sn);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
