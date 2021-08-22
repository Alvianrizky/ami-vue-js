<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jabatan;

class JabatanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = Jabatan::all();

        $data = $query->toArray();
        $i = 0;
        foreach($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_jabatan' => 'required',
        ]);

        $data = [
            'nama_jabatan' => $request->nama_jabatan,
        ];

        Jabatan::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $uuid)
    {
        $validated = $request->validate([
            'nama_jabatan' => 'required',
        ]);

        $data = [
            'nama_jabatan' => $request->nama_jabatan,
        ];

        Jabatan::where('uuid', $uuid)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($uuid)
    {
        $query = Jabatan::where('uuid', $uuid);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
