<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pengguna;
use App\Models\Jabatan;

class PenggunaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = Pengguna::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $jabatan = Jabatan::where('uuid', $row->uuid_jabatan)->first();

            $data[$i]['no'] = $i + 1;
            $data[$i]['jabatan'] = $jabatan->nama_jabatan;

            $i++;
        }

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nip_npp' => 'required',
            'nama' => 'required',
            'alamat' => 'required',
            'no_hp' => 'required',
            'status' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'nip_npp' => $request->nip_npp,
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'no_hp' => $request->no_hp,
            'status' => $request->status,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        Pengguna::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $uuid)
    {
        $validated = $request->validate([
            'nip_npp' => 'required',
            'nama' => 'required',
            'alamat' => 'required',
            'no_hp' => 'required',
            'status' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'nip_npp' => $request->nip_npp,
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'no_hp' => $request->no_hp,
            'status' => $request->status,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        Pengguna::where('uuid', $uuid)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($uuid)
    {
        $query = Pengguna::where('uuid', $uuid);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
