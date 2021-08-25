<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VwUnitKerja;
use App\Models\UnitKerja;

class UnitKerjaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = UnitKerja::select('kode_unit', 'nama_unit', 'unit_kerja.nik', 'penanggung_jawab.nama', 'position.nama_jabatan')
            ->join('penanggung_jawab', 'penanggung_jawab.nik', '=', 'unit_kerja.nik')
            ->join('position', 'position.uuid', '=', 'unit_kerja.uuid_jabatan')
            ->get();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function max()
    {
        $query = VwUnitKerja::max('kode_unit');
        $noUrut = (int) substr($query, 3, 3);
        $noUrut++;
        $char = "UNK";
        $kd_jdw = $char . sprintf("%03s", $noUrut);

        $data = [
            'max' => $kd_jdw
        ];

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_unit' => 'required',
            'nama_unit' => 'required',
            'nik' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'kode_unit' => $request->kode_unit,
            'nama_unit' => $request->nama_unit,
            'nik' => $request->nik,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        UnitKerja::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $kode_unit)
    {
        $validated = $request->validate([
            'kode_unit' => 'required',
            'nama_unit' => 'required',
            'nik' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'kode_unit' => $request->kode_unit,
            'nama_unit' => $request->nama_unit,
            'nik' => $request->nik,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        UnitKerja::where('kode_unit', $kode_unit)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($kode_unit)
    {
        $query = UnitKerja::where('kode_unit', $kode_unit);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
