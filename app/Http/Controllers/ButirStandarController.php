<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StandarSop;
use App\Models\VwButirStandar;
use App\Models\ButirSop;

class ButirStandarController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwButirStandar::all();

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
            'kode_sop' => 'required',
            'kode_butir' => 'required',
            'isi_butir' => 'required',
            'indikator' => 'required',
            'tgl_butir' => 'required',
        ]);

        $data = [
            'kode_sop' => $request->kode_sop,
            'kode_butir' => $request->kode_butir,
            'isi_butir' => $request->isi_butir,
            'indikator' => $request->indikator,
            'tgl_butir' => $request->tgl_butir,
        ];

        ButirSop::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $kode_butir)
    {
        $validated = $request->validate([
            'kode_sop' => 'required',
            'kode_butir' => 'required',
            'isi_butir' => 'required',
            'indikator' => 'required',
            'tgl_butir' => 'required',
        ]);

        $data = [
            'kode_sop' => $request->kode_sop,
            'kode_butir' => $request->kode_butir,
            'isi_butir' => $request->isi_butir,
            'indikator' => $request->indikator,
            'tgl_butir' => $request->tgl_butir,
        ];

        ButirSop::where('kode_butir', $kode_butir)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($kode_butir)
    {
        $query = ButirSop::where('kode_butir', $kode_butir);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
