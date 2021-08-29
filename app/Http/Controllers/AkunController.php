<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Pengguna;

class AkunController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = User::where('hak_akses', '!=', 'Admin')->get();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $pengguna = Pengguna::where('uuid', $row->uuid_pengguna)->first();

            $data[$i]['no'] = $i + 1;
            $data[$i]['pengguna'] = $pengguna ? $pengguna->nama : '' ;

            $i++;
        }

        return response()->json($data);
    }

    public function indexAdmin()
    {
        $query = User::where('hak_akses', 'Admin')->get();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {
            $pengguna = Pengguna::where('uuid', $row->uuid_pengguna)->first();

            $data[$i]['no'] = $i + 1;
            $data[$i]['pengguna'] = $pengguna ? $pengguna->nama : '' ;

            $i++;
        }

        return response()->json($data);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'uuid_pengguna' => 'required',
            'email' => 'required',
            'hak_akses' => 'required',
            'password' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'uuid_pengguna' => $request->uuid_pengguna,
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
            'name' => 'required',
            'uuid_pengguna' => 'required',
            'email' => 'required',
            'hak_akses' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'uuid_pengguna' => $request->uuid_pengguna,
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
