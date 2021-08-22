<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\VwUsers;
use App\Models\Jabatan;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = User::all();

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

    public function userIndex($id)
    {
        $query = VwUsers::where('id', $id)->first();

        $data = $query->toArray();

        return response()->json($data);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_user' => 'required',
            'name' => 'required',
            'uuid_jabatan' => 'required',
            'email' => 'required',
            'hak_akses' => 'required',
            'password' => 'required',
        ]);

        $data = [
            'nama_user' => $request->nama_user,
            'name' => $request->name,
            'uuid_jabatan' => $request->uuid_jabatan,
            'email' => $request->email,
            'hak_akses' => $request->hak_akses,
            'password' => bcrypt($request->password),
        ];

        User::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama_user' => 'required',
            'name' => 'required',
            'uuid_jabatan' => 'required',
            'email' => 'required',
            'hak_akses' => 'required',
        ]);

        $data = [
            'nama_user' => $request->nama_user,
            'name' => $request->name,
            'uuid_jabatan' => $request->uuid_jabatan,
            'email' => $request->email,
            'hak_akses' => $request->hak_akses,
        ];

        User::where('id', $id)->update($data);

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
        $query = User::find($id);
        $query->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus'
        ]);
    }
}
