<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jabatan;
use App\Models\VwJadwal;
use App\Models\Jadwal;
use App\Models\Pengguna;

class JadwalController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwJadwal::orderBy('kode_jadwal', 'desc')->get();

        $data = $query->toArray();
        $i = 0;
        foreach($query as $row) {
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function auditor()
    {
        $query = Pengguna::where('status', 'Auditor')->get();

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
        $query = VwJadwal::max('kode_jadwal');
        $noUrut = (int) substr($query, 3, 3);
        $noUrut++;
        $char = "JDW";
        $kd_jdw = $char . sprintf("%03s", $noUrut);

        $data = [
            'max' => $kd_jdw
        ];

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_jadwal' => 'required',
            'kode_sop' => 'required',
            'id_auditor' => 'required',
            'program_studi' => 'required',
            'tahun_pengukuran' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_selesai' => 'required',
        ]);

        $data = [
            'kode_jadwal' => $request->kode_jadwal,
            'kode_sop' => $request->kode_sop,
            'id_auditor' => $request->id_auditor,
            'program_studi' => $request->program_studi,
            'tahun_pengukuran' => $request->tahun_pengukuran,
            'tanggal_mulai' => $request->tanggal_mulai,
            'tanggal_selesai' => $request->tanggal_selesai,
        ];

        dd($data);

        Jadwal::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $kode_jadwal)
    {
        $validated = $request->validate([
            'kode_jadwal' => 'required',
            'kode_sop' => 'required',
            'id_auditor' => 'required',
            'program_studi' => 'required',
            'tahun_pengukuran' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_selesai' => 'required',
        ]);

        $data = [
            'kode_jadwal' => $request->kode_jadwal,
            'kode_sop' => $request->kode_sop,
            'id_auditor' => $request->id_auditor,
            'program_studi' => $request->program_studi,
            'tahun_pengukuran' => $request->tahun_pengukuran,
            'tanggal_mulai' => $request->tanggal_mulai,
            'tanggal_selesai' => $request->tanggal_selesai,
        ];

        Jadwal::where('kode_jadwal', $kode_jadwal)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($kode_jadwal)
    {
        $query = Jadwal::where('kode_jadwal', $kode_jadwal);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
