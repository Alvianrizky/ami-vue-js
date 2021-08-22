<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VwDeskriptor;
use App\Models\Deskriptor;

class DeskriptorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwDeskriptor::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'kode_sop' => 'required',
            'kode_butir' => 'required',
            'deskripsi' => 'required',
            'pengendali_dokumen' => 'required',
        ]);

        $data = [
            'kode_sop' => $request->kode_sop,
            'kode_butir' => $request->kode_butir,
            'deskripsi' => $request->deskripsi,
            'pengendali_dokumen' => $request->pengendali_dokumen,
        ];

        Deskriptor::where('kode_deskripsi', $id)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $query = Deskriptor::where('kode_deskripsi', $id);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
