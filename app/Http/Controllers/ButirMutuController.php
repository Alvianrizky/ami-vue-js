<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ButirMutu;

class ButirMutuController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = ButirMutu::all();

        $data = $query->toArray();
        $i = 0;
        foreach($query as $row) {
            $data[$i]['no'] = $i + 1;
            $data[$i]['nomer_standar_text'] = "Standar $row->nomer_standar";
            $i++;
        }

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nomer_standar' => 'required',
            'butir_mutu' => 'required',
            'hasil_observasi' => 'required',
        ]);

        $data = [
            'nomer_standar' => $request->nomer_standar,
            'butir_mutu' => $request->butir_mutu,
            'hasil_observasi' => $request->hasil_observasi,
        ];

        ButirMutu::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $uuid)
    {
        $validated = $request->validate([
            'nomer_standar' => 'required',
            'butir_mutu' => 'required',
            'hasil_observasi' => 'required',
        ]);

        $data = [
            'nomer_standar' => $request->nomer_standar,
            'butir_mutu' => $request->butir_mutu,
            'hasil_observasi' => $request->hasil_observasi,
        ];

        ButirMutu::where('uuid', $uuid)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($uuid)
    {
        $query = ButirMutu::where('uuid', $uuid);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
