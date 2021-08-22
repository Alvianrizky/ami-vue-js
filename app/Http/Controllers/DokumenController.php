<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dokumen;
use App\Models\VwDokumen;
use Illuminate\Support\Facades\Storage;
use File;

class DokumenController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwDokumen::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {

            // $data[$i]['url'] = Storage::url("dokumen/$row->dokumen");
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_sop' => 'required',
            'nama_dokumen' => 'required',
            'tgl_dokumen' => 'required',
            'file' => 'required|mimes:pdf|max:10000'
        ]);

        $file = $request->file;
        $pisah = explode('.',$request->kode_sop);
        $fileName = "SN_1_S$pisah[1]_00_20$pisah[2].". $file->extension();
        
        $data = [
            'kode_sop' => $request->kode_sop,
            'nama_dokumen' => $request->nama_dokumen,
            'tgl_dokumen' =>$request->tgl_dokumen,
            'dokumen' => $fileName
        ];

        Dokumen::create($data);

        // $request->file('file')->storeAs('public/dokumen', $fileName);
        $file->move(public_path('dokumen'), $fileName);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $id_dokumen)
    {
        $validated = $request->validate([
            'kode_sop' => 'required',
            'nama_dokumen' => 'required',
            'tgl_dokumen' => 'required',
        ]);

        $query = Dokumen::where('id_dokumen', $id_dokumen)->first()->dokumen;

        if($request->hasFile('file')) {
            if($query) {
                return response()->json([
                    'status' => false,
                    'message' => 'Hapus dokumen yang sudah ada terlebih dahulu sebelum mengupload dokumen kembali!'
                ]);
            } else {
                $file = $request->file;
                $pisah = explode('.', $request->kode_sop);
                $fileName = "SN_1_S$pisah[1]_00_20$pisah[2]." . $file->extension();

                // $request->file('file')->storeAs('public/dokumen', $fileName);
                $file->move(public_path('dokumen'), $fileName);

                $data = [
                    'kode_sop' => $request->kode_sop,
                    'nama_dokumen' => $request->nama_dokumen,
                    'tgl_dokumen' => $request->tgl_dokumen,
                    'dokumen' => $fileName
                ];
            }
        } else {
            if ($query) {
                $data = [
                    'kode_sop' => $request->kode_sop,
                    'nama_dokumen' => $request->nama_dokumen,
                    'tgl_dokumen' => $request->tgl_dokumen,
                ];
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Harap pilih dokumen terlebih dahulu!'
                ]);
            }
        }

        Dokumen::where('id_dokumen', $id_dokumen)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);

        
    }

    public function deleteUpdate(Request $request, $id_dokumen)
    {
        $query = Dokumen::where('id_dokumen', $id_dokumen)->first()->dokumen;
        // Storage::delete("public/dokumen/$query");
        unlink('./dokumen/' . $query);

        $data = [
            'dokumen' => ''
        ];

        Dokumen::where('id_dokumen', $id_dokumen)->update($data);
        return response()->json([
            'status' => true,
            'message' => 'File berhasil dihapus'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_dokumen)
    {
        $query = Dokumen::where('id_dokumen', $id_dokumen);
        // Storage::delete("public/dokumen/".$query->first()->dokumen);
        unlink('./dokumen/' . $query->first()->nama_file);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
