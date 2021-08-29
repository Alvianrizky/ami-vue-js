<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CobaController;
use App\Http\Controllers\JabatanController;
use App\Http\Controllers\DokumenController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ButirMutuController;
use App\Http\Controllers\DeskripsiController;
use App\Http\Controllers\DeskriptorController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\AkunController;
use App\Http\Controllers\StandarController;
use App\Http\Controllers\SopController;
use App\Http\Controllers\UnitKerjaController;
use App\Http\Controllers\PenanggungJawabController;
use App\Http\Controllers\HasilController;
use App\Http\Controllers\ButirStandarController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\AuditController;
use App\Http\Controllers\JobController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auditor')->group(function () {

    Route::prefix('audit')->group(function () {
        Route::get('/{id}', [AuditController::class, 'index']);
        Route::post('/', [AuditController::class, 'store']);
        Route::put('/{id_evaluasi}', [AuditController::class, 'update']);
        Route::delete('/{id_evaluasi}', [AuditController::class, 'destroy']);
        Route::get('/hasil/{id}', [AuditController::class, 'hasil']);
        Route::get('/instrumen/{id}', [AuditController::class, 'instrumenAudit']);
    });

});

Route::prefix('ketua/')->group(function () {

    Route::prefix('unit-kerja')->group(function () {
        Route::get('/', [UnitKerjaController::class, 'index']);
        Route::post('/', [UnitKerjaController::class, 'store']);
        Route::put('/{uuid}', [UnitKerjaController::class, 'update']);
        Route::delete('/{uuid}', [UnitKerjaController::class, 'destroy']);
    });

    Route::prefix('penanggung-jawab')->group(function () {
        Route::get('/', [PenanggungJawabController::class, 'index']);
        Route::post('/', [PenanggungJawabController::class, 'store']);
        Route::put('/{uuid}', [PenanggungJawabController::class, 'update']);
        Route::delete('/{uuid}', [PenanggungJawabController::class, 'destroy']);
    });

    Route::prefix('job-desk')->group(function () {
        Route::get('/max', [JobController::class, 'max']);

        Route::get('/', [JobController::class, 'index']);
        Route::post('/', [JobController::class, 'store']);
        Route::put('/{id}', [JobController::class, 'update']);
        Route::delete('/{id}', [JobController::class, 'destroy']);
    });

    Route::prefix('unit-kerja')->group(function () {
        Route::get('/max', [UnitKerjaController::class, 'max']);

        Route::get('/', [UnitKerjaController::class, 'index']);
        Route::post('/', [UnitKerjaController::class, 'store']);
        Route::put('/{kode_unit}', [UnitKerjaController::class, 'update']);
        Route::delete('/{kode_unit}', [UnitKerjaController::class, 'destroy']);
    });

});

Route::prefix('admin/')->group(function () {

    Route::prefix('akun')->group(function () {
        Route::get('/', [AkunController::class, 'index']);
        Route::get('/admin', [AkunController::class, 'indexAdmin']);
        Route::post('/', [AkunController::class, 'store']);
        Route::put('/{uuid}', [AkunController::class, 'update']);
        Route::delete('/{uuid}', [AkunController::class, 'destroy']);
    });

    Route::prefix('standar')->group(function () {
        Route::get('/', [StandarController::class, 'index']);
        Route::post('/', [StandarController::class, 'store']);
        Route::put('/{kode_sn}', [StandarController::class, 'update']);
        Route::delete('/{kode_sn}', [StandarController::class, 'destroy']);
    });

    Route::prefix('sop')->group(function () {
        Route::get('/', [SopController::class, 'index']);
        Route::post('/', [SopController::class, 'store']);
        Route::put('/{kode_sop}', [SopController::class, 'update']);
        Route::delete('/{kode_sop}', [SopController::class, 'destroy']);
    });

    Route::prefix('jabatan')->group(function () {
        Route::get('/', [JabatanController::class, 'index']);
        Route::post('/', [JabatanController::class, 'store']);
        Route::put('/{uuid}', [JabatanController::class, 'update']);
        Route::delete('/{uuid}', [JabatanController::class, 'destroy']);
    });

    Route::prefix('pengguna')->group(function () {
        Route::get('/', [PenggunaController::class, 'index']);
        Route::post('/', [PenggunaController::class, 'store']);
        Route::put('/{uuid}', [PenggunaController::class, 'update']);
        Route::delete('/{uuid}', [PenggunaController::class, 'destroy']);
    });

    Route::prefix('butir-mutu')->group(function () {
        Route::get('/', [ButirMutuController::class, 'index']);
        Route::post('/', [ButirMutuController::class, 'store']);
        Route::put('/{uuid}', [ButirMutuController::class, 'update']);
        Route::delete('/{uuid}', [ButirMutuController::class, 'destroy']);
    });

    Route::prefix('dokumen')->group(function () {
        Route::get('/', [DokumenController::class, 'index']);
        Route::post('/', [DokumenController::class, 'store']);
        Route::post('/{id_dokumen}', [DokumenController::class, 'update']);
        Route::get('/download/{id_dokumen}', [DokumenController::class, 'download']);
        Route::delete('/{id_dokumen}', [DokumenController::class, 'destroy']);
        Route::delete('/del-up/{id_dokumen}', [DokumenController::class, 'deleteUpdate']);
    });

    Route::prefix('deskripsi')->group(function () {
        Route::get('/', [DeskripsiController::class, 'index']);
        Route::post('/', [DeskripsiController::class, 'store']);
        Route::post('/{uuid}', [DeskripsiController::class, 'update']);
        Route::delete('/{uuid}', [DeskripsiController::class, 'destroy']);
        Route::delete('/del-up/{uuid}', [DeskripsiController::class, 'deleteUpdate']);
    });

    Route::prefix('butir-standar')->group(function () {
        Route::get('/', [ButirStandarController::class, 'index']);
        Route::post('/', [ButirStandarController::class, 'store']);
        Route::put('/{kode_butir}', [ButirStandarController::class, 'update']);
        Route::delete('/{kode_butir}', [ButirStandarController::class, 'destroy']);
    });

    Route::prefix('deskriptor')->group(function () {
        Route::get('/', [DeskriptorController::class, 'index']);
        Route::post('/', [DeskriptorController::class, 'store']);
        Route::put('/{id}', [DeskriptorController::class, 'update']);
        Route::delete('/{id}', [DeskriptorController::class, 'destroy']);
    });

    Route::prefix('jadwal')->group(function () {
        Route::get('/max', [JadwalController::class, 'max']);
        Route::get('/auditor', [JadwalController::class, 'auditor']);

        Route::get('/', [JadwalController::class, 'index']);
        Route::post('/', [JadwalController::class, 'store']);
        Route::put('/{kode_jadwal}', [JadwalController::class, 'update']);
        Route::delete('/{kode_jadwal}', [JadwalController::class, 'destroy']);
    });

    Route::prefix('hasil')->group(function () {
        Route::get('/rata-rata', [HasilController::class, 'index']);
        Route::get('/laporan', [HasilController::class, 'laporan']);
    });

});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout']);
Route::get('/user', [AuthController::class, 'user']);

Route::get('/user/{id}', [UserController::class, 'userIndex']);
Route::get('/download', [DokumenController::class, 'download']);


Route::get('/coba', [DokumenController::class, 'show']);
Route::post('/upload', [CobaController::class, 'upload']);