<template>
    <div>
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Jadwal</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Jadwal</li>
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
                                <h5 class="card-title">Data Jadwal</h5>
                            </div>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-8">
                                        <a href="#" class="btn btn-primary mt-2" @click.prevent="modalAdd()">
                                            <span class="fa fa-plus"></span> Tambah Data Jadwal
                                        </a>
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
                                                :search="search" :loading="loading">
                                                <template v-slot:item.actions="{ item }">
                                                    <v-btn color="bg-success" class="mx-2" dark fab small
                                                        @click="modalUpdate(item)">
                                                        <v-icon>
                                                            mdi-pencil
                                                        </v-icon>
                                                    </v-btn>
                                                    <v-btn color="bg-danger" dark fab small
                                                        @click="handledelete(item.kode_jadwal)">
                                                        <v-icon>
                                                            mdi-delete
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

        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="addLabel" aria-hidden="true">
            <div class="modal-dialog text-dark">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Jabatan</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handlesubmit">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Kode Jadwal</label>
                                <input type="text" class="form-control" required v-model="form.kode_jadwal" disabled>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Standar Operasional</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_sop">
                                    <option selected>- Pilih Jabatan -</option>
                                    <option v-for="(data,index) in sop" :key="index" :value="data.kode_sop">{{ data.nama_sop }} || {{data.kode_sop}}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Auditor</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.id_auditor">
                                    <option selected>- Pilih Jabatan -</option>
                                    <option v-for="(data,index) in auditor" :key="index" :value="data.id">{{ data.nama }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Program Studi</label>
                                <input type="text" class="form-control" required v-model="form.program_studi">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tahun Pengukuran Mutu</label>
                                <input type="text" class="form-control" required v-model="form.tahun_pengukuran">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Mulai</label>
                                <input type="date" class="form-control" required v-model="form.tanggal_mulai">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Selesai</label>
                                <input type="date" class="form-control" required v-model="form.tanggal_selesai">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><span
                                    class="fa fa-times"></span> Batal</button>
                            <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span>
                                Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        <div class="modal fade" id="update" tabindex="-1" aria-labelledby="updateLabel" aria-hidden="true">
            <div class="modal-dialog text-dark">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Jabatan</h5>
                        <button type="button" class="btn-close" @click.prevent="modalUpdateBatal()" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handleUpdate">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Kode Jadwal</label>
                                <input type="text" class="form-control" required v-model="form.kode_jadwal" disabled>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Standar Operasional</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_sop">
                                    <option selected>- Pilih Jabatan -</option>
                                    <option v-for="(data,index) in sop" :key="index" :value="data.kode_sop">{{ data.nama_sop }} || {{data.kode_sop}}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Auditor</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.id_auditor">
                                    <option selected>- Pilih Jabatan -</option>
                                    <option v-for="(data,index) in auditor" :key="index" :value="data.id">{{ data.nama }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Program Studi</label>
                                <input type="text" class="form-control" required v-model="form.program_studi">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tahun Pengukuran Mutu</label>
                                <input type="text" class="form-control" required v-model="form.tahun_pengukuran">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Mulai</label>
                                <input type="date" class="form-control" required v-model="form.tanggal_mulai">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Selesai</label>
                                <input type="date" class="form-control" required v-model="form.tanggal_selesai">
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
                sop: [],
                auditor: [],
                rows: [],
                search: '',
                loading: true,
                options: {},
                headers: [{
                        text: 'No',
                        value: 'no'
                    },
                    {
                        text: 'Kode Jadwal',
                        value: 'kode_jadwal'
                    },
                    {
                        text: 'Kode Standar Nasional',
                        value: 'kode_sn'
                    },
                    {
                        text: 'Kode Standar',
                        value: 'kode_sop'
                    },
                    {
                        text: 'Auditor',
                        value: 'nama'
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
                        text: 'Tanggal Mulai',
                        value: 'tanggal_mulai'
                    },
                    {
                        text: 'Tanggal Selesai',
                        value: 'tanggal_selesai'
                    },
                    {
                        text: 'Actions',
                        value: 'actions',
                        align: 'center',
                        width: '140px',
                        sortable: false
                    },
                ],
                form: {
                    kode_jadwal: '',
                    kode_sop: '',
                    id_auditor: '',
                    program_studi: '',
                    tahun_pengukuran: '',
                    tanggal_mulai: '',
                    tanggal_selesai: '',
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
            getDataMax() {
                axios.get('/api/admin/jadwal/max').then((response) => {
                    console.log(response)
                    this.form.kode_jadwal = response.data.max
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            getDataSop() {
                axios.get('/api/admin/sop').then((response) => {
                    this.sop = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            getDataAuditor() {
                axios.get('/api/admin/jadwal/auditor').then((response) => {
                    this.auditor = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            getData() {
                axios.get('/api/admin/jadwal').then((response) => {
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handlesubmit() {
                axios.post('/api/admin/jadwal', this.form).then((response) => {
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
                            kode_jadwal: '',
                            kode_sop: '',
                            id_auditor: '',
                            program_studi: '',
                            tahun_pengukuran: '',
                            tanggal_mulai: '',
                            tanggal_selesai: '',
                        }

                        $("#add").modal('hide')

                        this.getData()
                        
                    }
                })
            },
            handleUpdate() {
                console.log(this.form)
                axios.put('/api/admin/jadwal/'+this.form.kode_jadwal, this.form).then((response) => {
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
                            kode_jadwal: '',
                            kode_sop: '',
                            id_auditor: '',
                            program_studi: '',
                            tahun_pengukuran: '',
                            tanggal_mulai: '',
                            tanggal_selesai: '',
                        }

                        $("#update").modal('hide')

                        this.getData() 
                    }
                })
            },
            handledelete(kode_jadwal) {
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
                        axios.delete('/api/admin/jadwal/' +kode_jadwal).then((response) => {
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
            modalAdd() {
                this.getDataMax()
                this.getDataSop()
                this.getDataAuditor()
                $("#add").modal('show')
            },
            modalUpdate(data) {
                this.getDataMax()
                this.getDataSop()
                this.getDataAuditor()
                $("#update").modal('show')
                this.form = data
                console.log(data)
            },
            modalUpdateBatal() {
                this.form = {
                    kode_jadwal: '',
                    kode_sop: '',
                    id_auditor: '',
                    program_studi: '',
                    tahun_pengukuran: '',
                    tanggal_mulai: '',
                    tanggal_selesai: '',
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
