<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coba;
use App\Models\Dokumen;
use App\Models\VwButirSopStandar;

class CobaController extends Controller
{
    public function index()
    {
        $query = Coba::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:pdf|max:10000'
        ]);

        $file = $request->file;
        $date = date('YmdHis');
        $fileName = $date.'.'.$file->extension();

        $data = [
            'nomer_dokumen' => '12345',
            'judul' => 'coba Dokumen',
            'nama_file' => $fileName
        ];

        Dokumen::create($data);

        $file->move(public_path('dokumen'), $fileName);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function addDeskripsi()
    {
        $query = VwButirSopStandar::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }
}
