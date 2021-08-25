<template>
    <div>
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Audit</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Audit</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <section class="content mx-1 mb-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Data Audit</h5>
                            </div>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-8">

                                    </div>
                                    <div class="col-4">
                                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"
                                            single-line hide-details></v-text-field>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div data-app>
                                            <v-data-table :headers="headers" :items="rows" :options.sync="options"
                                                :search="search">
                                                <template v-slot:item.actions="{ item }">
                                                    <v-btn color="bg-success" class="mx-2" dark fab small
                                                        @click="modalUpdate(item)">
                                                        <v-icon>
                                                            mdi-plus
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                            </v-data-table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
            </div><!-- /.container-fluid -->
        </section>
        
        <div class="modal fade" id="update" tabindex="-1" aria-labelledby="updateLabel" aria-hidden="true">
            <div class="modal-dialog text-dark">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Audit Data</h5>
                        <button type="button" class="btn-close" @click.prevent="modalUpdateBatal()" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handleUpdate">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Kode Jadwal</label>
                                <input type="text" class="form-control" required v-model="form.kode_jadwal" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Standar</label>
                                <input type="text" class="form-control" required v-model="form.kode_sop" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Butir Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.kode_butir" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Deskripsi</label>
                                <input type="text" class="form-control" required v-model="form.kode_deskripsi" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">ID Auditor</label>
                                <input type="text" class="form-control" required v-model="form.id_auditor" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Unit</label>
                                <input type="text" class="form-control" required v-model="form.kode_unit" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Hasil</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.hasil">
                                    <option value="ada">Ada</option>
                                    <option value="tidak">Tidak</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Persentase</label>
                                <input type="text" class="form-control" required v-model="form.persentase">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Temuan Audit</label>
                                <textarea class="form-control" rows="5" v-model="form.temuan"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kategori Temuan</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kategori_temuan">
                                    <option value="1">Ringan</option>
                                    <option value="2">Sedang</option>
                                    <option value="3">Berat</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click.prevent="modalUpdateBatal()"><span
                                    class="fa fa-times"></span> Batal</button>
                            <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span>
                                Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- <p>Hak Akses Super Admin</p> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rows: [],
                search: '',
                loading: true,
                options: {},
                headers: [
                    {
                        text: 'Kode Standar Nasional',
                        value: 'kode_sn'
                    },
                    {
                        text: 'Kode Standar',
                        value: 'kode_sop'
                    },
                    {
                        text: 'Kode Butir',
                        value: 'kode_butir'
                    },
                    {
                        text: 'Elemen Standar',
                        value: 'isi_butir'
                    },
                    {
                        text: 'Deskriptor',
                        value: 'deskripsi'
                    },
                    {
                        text: 'Indikator',
                        value: 'indikator'
                    },
                    {
                        text: 'Pendendali Dokumen',
                        value: 'pengendali_dokumen'
                    },
                    {
                        text: 'Program Studi',
                        value: 'program_studi'
                    },
                    {
                        text: 'Tahun',
                        value: 'tahun_pengukuran'
                    },
                    {
                        text: 'Tanggal',
                        value: 'tanggal_mulai' || 'tanggal_selesai'
                    },
                    {
                        text: 'Actions',
                        value: 'actions',
                        align: 'center',
                        width: '100px',
                        sortable: false
                    },
                ],
                form: {
                    kode_butir: '',
                    kode_sn: '',
                    kode_sop: '',
                    isi_butir: '',
                    deskripsi: '',
                    indikator: '',
                    pengendali_dokumen: '',
                    program_studi: '',
                    tahun_pengukuran: '',
                    tanggal_mulai: '',
                    tanggal_selesai: '',
                    kode_jadwal: '',
                    kode_deskripsi: '',
                    id_auditor: '',
                    kode_unit: '',
                    hasil: '',
                    persentase: '',
                    temuan: '',
                    kategori_temuan: '',
                },
                loggedIn: localStorage.getItem('loggedIn'),
                loginFailed: null,
            }
        },
        created() {
            console.log(this.$route.name)
            this.$store.commit('setHeaderToken')
        },
        methods: {
            getData() {
                axios.get('/api/auditor/audit/'+atob(localStorage.getItem('user'))).then((response) => {
                    console.log(response)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handlesubmit() {
                axios.post('/api/admin/jabatan', this.form).then((response) => {
                    if (response.data.status) {
                        this.$swal.fire({
                            toast: true,
                            icon: 'success',
                            text: response.data.message,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });

                        this.form = {
                            uuid: '',
                            nama_jabatan: '',
                            keterangan: '',
                        }

                        $("#addJabatan").modal('hide')

                        this.getData()
                        
                    }
                })
            },
            handleUpdate() {
                console.log(this.form)
                axios.post('/api/auditor/audit', this.form).then((response) => {
                    if (response.data.status) {
                        this.$swal.fire({
                            toast: true,
                            icon: 'success',
                            text: response.data.message,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });

                        this.form = {
                            kode_butir: '',
                            kode_sn: '',
                            kode_sop: '',
                            isi_butir: '',
                            deskripsi: '',
                            indikator: '',
                            pengendali_dokumen: '',
                            program_studi: '',
                            tahun_pengukuran: '',
                            tanggal_mulai: '',
                            tanggal_selesai: '',
                            kode_jadwal: '',
                            kode_deskripsi: '',
                            id_auditor: '',
                            kode_unit: '',
                            hasil: '',
                            persentase: '',
                            temuan: '',
                            kategori_temuan: '',
                        }

                        $("#update").modal('hide')

                        this.getData() 
                    }
                })
            },
            handledelete(id) {
                this.$swal.fire({
                    title: 'Anda yakin akan menghapus data ini?',
                    text: "Data akan dihapus secara permanen!",
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonColor: '#d33',
                    confirmButtonColor: '#3085d6',
                    cancelButtonText: 'Tidak',
                    confirmButtonText: 'Ya',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('/api/admin/jabatan/' +id).then((response) => {
                            if(response.data.status) {
                                this.$swal.fire({
                                    icon: 'success',
                                    title: response.data.message,
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                                this.getData()
                            }
                        })
                    }
                })
            },
            modalUpdate(data) {
                $("#update").modal('show')
                this.form = data
                console.log(data)
            },
            modalUpdateBatal() {
                this.form = {
                    uuid: '',
                    nama_jabatan: '',
                    keterangan: '',
                }

                $("#update").modal('hide')
            }
        },
        mounted() {
            this.$store.commit('setLoggedIn')
            if(!this.$store.state.loggedIn) {
                return this.$router.push({ name: 'Login' })
            }

            let string = this.$route.path.toString().split("/")
            this.$store.commit('setAkses', atob(localStorage.getItem('akses')))

            if(this.$store.state.akses !== string[1]) {
                this.$router.push({
                    path: '/' + this.$store.state.akses + '/home'
                })
            }

            this.getData()
        }
    }

</script>
