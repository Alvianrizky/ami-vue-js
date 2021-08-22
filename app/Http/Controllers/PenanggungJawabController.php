<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VwPenanggungJawab;
use App\Models\PenanggungJawab;

class PenanggungJawabController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwPenanggungJawab::all();

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
            'nik' => 'required',
            'nama' => 'required',
            'email' => 'required',
            'no_hp' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'nik' => $request->nik,
            'nama' => $request->nama,
            'email' => $request->email,
            'no_hp' => $request->no_hp,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        PenanggungJawab::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $id_penanggung_jawab)
    {
        $validated = $request->validate([
            'id_penanggung_jawab' => 'required',
            'nik' => 'required',
            'nama' => 'required',
            'email' => 'required',
            'no_hp' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'nik' => $request->nik,
            'nama' => $request->nama,
            'email' => $request->email,
            'no_hp' => $request->no_hp,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        PenanggungJawab::where('id_penanggung_jawab', $id_penanggung_jawab)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($id_penanggung_jawab)
    {
        $query = PenanggungJawab::where('id_penanggung_jawab', $id_penanggung_jawab);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
