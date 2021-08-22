<template>
    <div>
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Butir Standar</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Butir Standar</li>
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
                                <h5 class="card-title">Data Butir Standar</h5>
                            </div>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-8">
                                        <a href="#" class="btn btn-primary mt-2" @click.prevent="modalAdd()">
                                            <span class="fa fa-plus"></span> Tambah Data Butir Standar
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
                                                        @click="handledelete(item.kode_butir)">
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
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Butir Standar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handlesubmit">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Standar Operasional</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_sop">
                                    <option selected>- Pilih Jabatan -</option>
                                    <option v-for="(data,index) in sop" :key="index" :value="data.kode_sop">{{ data.nama_sop }} || {{data.kode_sop}}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Kode Butir Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.kode_butir">
                                <div class="form-text">
                                * Contoh Pengisian butir S.01.18.1
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Isi Butir SOP</label>
                                <textarea class="form-control" rows="5" v-model="form.isi_butir"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Indikator</label>
                                <textarea class="form-control" rows="3" v-model="form.indikator"></textarea>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Tanggal Butir Standar Operasional</label>
                                <input type="date" class="form-control" required v-model="form.tgl_butir">
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
                                <label class="form-label">Standar Operasional</label>
                                <select class="form-select" aria-label="Default select example" required v-model="form.kode_sop">
                                    <option selected>- Pilih Jabatan -</option>
                                    <option v-for="(data,index) in sop" :key="index" :value="data.kode_sop">{{ data.nama_sop }} || {{data.kode_sop}}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Kode Butir Standar Operasional</label>
                                <input type="text" class="form-control" required v-model="form.kode_butir">
                                <div class="form-text">
                                * Contoh Pengisian butir S.01.18.1
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Isi Butir SOP</label>
                                <textarea class="form-control" rows="5" v-model="form.isi_butir"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Indikator</label>
                                <textarea class="form-control" rows="3" v-model="form.indikator"></textarea>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Tanggal Butir Standar Operasional</label>
                                <input type="date" class="form-control" required v-model="form.tgl_butir">
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
                rows: [],
                search: '',
                loading: true,
                options: {},
                headers: [{
                        text: 'No',
                        value: 'no'
                    },
                    {
                        text: 'Nama Standar',
                        value: 'nama_sop'
                    },
                    {
                        text: 'Kode Butir',
                        value: 'kode_butir'
                    },
                    {
                        text: 'Butir Standar',
                        value: 'isi_butir'
                    },
                    {
                        text: 'Indikator',
                        value: 'indikator'
                    },
                    {
                        text: 'Tanggal',
                        value: 'tgl_butir'
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
                    kode_butir: '',
                    kode_sop: '',
                    kode_butir: '',
                    isi_butir: '',
                    indikator: '',
                    tgl_butir: '',
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
            getDataSop() {
                axios.get('/api/admin/sop').then((response) => {
                    this.sop = response.data
                    this.form.kode_butir = 'S.0'
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            getData() {
                axios.get('/api/admin/butir-standar').then((response) => {
                    console.log(response)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handlesubmit() {
                axios.post('/api/admin/butir-standar', this.form).then((response) => {
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
                            kode_sop: '',
                            kode_butir: '',
                            isi_butir: '',
                            indikator: '',
                            tgl_butir: '',
                        }

                        $("#add").modal('hide')

                        this.getData()
                        
                    }
                })
            },
            handleUpdate() {
                axios.put('/api/admin/butir-standar/'+this.form.kode_butir, this.form).then((response) => {
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
                            kode_sop: '',
                            kode_butir: '',
                            isi_butir: '',
                            indikator: '',
                            tgl_butir: '',
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
                        axios.delete('/api/admin/butir-standar/' +id).then((response) => {
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
                    kode_butir: '',
                    kode_sop: '',
                    kode_butir: '',
                    isi_butir: '',
                    indikator: '',
                    tgl_butir: '',
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
            this.getDataSop()
        }
    }

</script>
