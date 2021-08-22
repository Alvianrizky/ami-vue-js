<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Deskriptor;
use App\Models\VwJob;
use App\Models\Job;

class JobController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwJob::all();

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
        $query = VwJob::max('kode_jobdesk');
        $noUrut = (int) substr($query, 3, 3);
        $noUrut++;
        $char = "JBD";
        $kd_jdw = $char . sprintf("%03s", $noUrut);

        $data = [
            'max' => $kd_jdw
        ];

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_jobdesk' => 'required',
            'nik' => 'required',
            'fungsi' => 'required',
            'tgl_penetapan' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'kode_jobdesk' => $request->kode_jobdesk,
            'nik' => $request->nik,
            'fungsi' => $request->fungsi,
            'tgl_penetapan' => $request->tgl_penetapan,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        Job::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $kode_jobdesk)
    {
        $validated = $request->validate([
            'kode_jobdesk' => 'required',
            'nik' => 'required',
            'fungsi' => 'required',
            'tgl_penetapan' => 'required',
            'uuid_jabatan' => 'required',
        ]);

        $data = [
            'kode_jobdesk' => $request->kode_jobdesk,
            'nik' => $request->nik,
            'fungsi' => $request->fungsi,
            'tgl_penetapan' => $request->tgl_penetapan,
            'uuid_jabatan' => $request->uuid_jabatan,
        ];

        Job::where('kode_jobdesk', $kode_jobdesk)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($kode_jobdesk)
    {
        $query = Job::where('kode_jobdesk', $kode_jobdesk);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
