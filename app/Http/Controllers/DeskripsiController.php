<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\VwButirSopStandar;
use App\Models\Deskriptor;

class DeskripsiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function index()
    {
        $query = VwButirSopStandar::all();

        $data = $query->toArray();
        $i = 0;
        foreach ($query as $row) {

            $data[$i]['url'] = Storage::url("dokumen/$row->dokumen");
            $data[$i]['no'] = $i + 1;

            $i++;
        }

        return response()->json($data);
    }

    public function store(Request $request)
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

        Deskriptor::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $data
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
