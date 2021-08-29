<template>
    <div>
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Standar</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Standar</li>
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
                                <h5 class="card-title">Data Standar</h5>
                            </div>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-8">
                                        <a href="#" class="btn btn-primary mt-2" @click.prevent="modalAdd()">
                                            <span class="fa fa-plus"></span> Tambah Data Standar
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
                                                        @click="handledelete(item.id)">
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
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Standar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handlesubmit">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Unit Kerja</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_unit">
                                    <option selected>- Pilih Unit Kerja -</option>
                                    <option v-for="(data,index) in unitKerja" :key="index" :value="data.kode_unit">{{ data.nama_unit }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Standar Nasional</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_sn">
                                    <option selected>- Pilih Standar Nasional -</option>
                                    <option v-for="(data,index) in standarNasional" :key="index" :value="data.kode_sn">{{ data.nama_sn }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.kode_sop">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nama Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.nama_sop">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Penanggung Jawab</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.id_penanggung_jawab">
                                    <option selected>- Pilih Penanggung Jawab -</option>
                                    <option v-for="(data,index) in PenanggungJawab" :key="index" :value="data.id_penanggung_jawab">{{ data.nama }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Standar Operasional</label>
                                <input type="date" class="form-control" required v-model="form.tgl_sop">
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
                                <label class="form-label">Unit Kerja</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_unit">
                                    <option selected>- Pilih Unit Kerja -</option>
                                    <option v-for="(data,index) in unitKerja" :key="index" :value="data.kode_unit">{{ data.nama_unit }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Standar Nasional</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_sn" disabled>
                                    <option selected>- Pilih Standar Nasional -</option>
                                    <option v-for="(data,index) in standarNasional" :key="index" :value="data.kode_sn">{{ data.nama_sn }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.kode_sop" disabled>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nama Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.nama_sop">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Penanggung Jawab</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.id_penanggung_jawab">
                                    <option selected>- Pilih Penanggung Jawab -</option>
                                    <option v-for="(data,index) in PenanggungJawab" :key="index" :value="data.id_penanggung_jawab">{{ data.nama }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Standar Operasional</label>
                                <input type="date" class="form-control" required v-model="form.tgl_sop">
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
                headers: [{
                        text: 'No',
                        value: 'no'
                    },
                    {
                        text: 'Unit Kerja',
                        value: 'nama_unit'
                    },
                    {
                        text: 'Standar Nasional',
                        value: 'nama_sn'
                    },
                    {
                        text: 'Kode Standar',
                        value: 'kode_sop'
                    },
                    {
                        text: 'Nama Standar',
                        value: 'nama_sop'
                    },
                    {
                        text: 'Penanggung Jawab',
                        value: 'nama'
                    },
                    {
                        text: 'Tanggal Standar',
                        value: 'tgl_sop'
                    },
                    {
                        text: 'Actions',
                        value: 'actions',
                        align: 'center',
                        width: '140px',
                        sortable: false
                    },
                ],
                unitKerja: [],
                standarNasional: [],
                PenanggungJawab: [],
                form: {
                    id: '',
                    kode_sop: '',
                    kode_unit: '',
                    kode_sn: '',
                    nama_sop: '',
                    id_penanggung_jawab: '',
                    kode_sn: '',
                    tgl_sop: '',
                    nama_unit: '',
                    nama_sn: '',
                    nama: '',
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
            getDataUnitKerja() {
                axios.get('/api/ketua/unit-kerja').then((response) => {
                    this.unitKerja = response.data
                })
            },
            getDataStandarNasional() {
                axios.get('/api/admin/standar').then((response) => {
                    this.standarNasional = response.data
                })
            },
            getDataPenanggungJawab() {
                axios.get('/api/ketua/penanggung-jawab').then((response) => {
                    this.PenanggungJawab = response.data
                })
            },
            getData() {
                axios.get('/api/admin/sop').then((response) => {
                    console.log(response)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handlesubmit() {
                axios.post('/api/admin/sop', this.form).then((response) => {
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
                            kode_sop: '',
                            kode_unit: '',
                            kode_sn: '',
                            nama_sop: '',
                            id_penanggung_jawab: '',
                            kode_sn: '',
                            tgl_sop: '',
                            nama_unit: '',
                            nama_sn: '',
                            nama: '',
                        }

                        $("#add").modal('hide')

                        this.getData()
                        
                    }
                })
            },
            handleUpdate() {
                console.log(this.form)
                axios.put('/api/admin/sop/'+this.form.id, this.form).then((response) => {
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
                            kode_sop: '',
                            kode_unit: '',
                            kode_sn: '',
                            nama_sop: '',
                            id_penanggung_jawab: '',
                            kode_sn: '',
                            tgl_sop: '',
                            nama_unit: '',
                            nama_sn: '',
                            nama: '',
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
                        axios.delete('/api/admin/sop/' +id).then((response) => {
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
                $("#add").modal('show')
            },
            modalUpdate(data) {
                $("#update").modal('show')
                this.form = data
                console.log(data)
            },
            modalUpdateBatal() {
                this.form = {
                    kode_sop: '',
                    kode_unit: '',
                    kode_sn: '',
                    nama_sop: '',
                    id_penanggung_jawab: '',
                    kode_sn: '',
                    tgl_sop: '',
                    nama_unit: '',
                    nama_sn: '',
                    nama: '',
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
            this.getDataUnitKerja()
            this.getDataStandarNasional()
            this.getDataPenanggungJawab()
            this.getData()
        }
    }

</script>
