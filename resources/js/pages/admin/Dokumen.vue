<template>
    <div>
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Dokumen</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Dokumen</li>
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
                                <h5 class="card-title">Data Dokumen</h5>
                            </div>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-8">
                                        <a href="#" class="btn btn-primary mt-2" @click.prevent="modalAdd()">
                                            <span class="fa fa-plus"></span> Tambah Data Dokumen
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
                                                    <v-btn color="bg-success" dark fab small :href="'../dokumen/'+item.dokumen">
                                                        <v-icon>
                                                            mdi-download
                                                        </v-icon>
                                                    </v-btn>
                                                    <v-btn color="bg-success" class="mx-2" dark fab small
                                                        @click="modalUpdate(item)">
                                                        <v-icon>
                                                            mdi-pencil
                                                        </v-icon>
                                                    </v-btn>
                                                    <v-btn color="bg-danger" dark fab small
                                                        @click="handledelete(item.id_dokumen)">
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
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Dokumen</h5>
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
                                <label  class="form-label">Nama Dokumen</label>
                                <input type="text" class="form-control" required v-model="form.nama_dokumen">
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Upload Dokumen</label>
                                <input class="form-control" type="file" id="formFile" accept="application/pdf" aria-describedby="helpInput" @change="selectFile">
                                <div id="helpInput" class="form-text">* File wajib berformat PDF dengan ukuran maksimal 10 MB.</div>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Tanggal Dokumen</label>
                                <input type="date" class="form-control" required v-model="form.tgl_dokumen">
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
                                <label  class="form-label">Nama Dokumen</label>
                                <input type="text" class="form-control" required v-model="form.nama_dokumen">
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Upload Dokumen</label>
                                <input class="form-control" type="file" id="formFile" accept="application/pdf" aria-describedby="helpInput" @change="selectFile">
                                <div id="helpInput" class="form-text">* File wajib berformat PDF dengan ukuran maksimal 10 MB.</div>

                                <div v-if="form.dokumen">
                                    <button class="btn btn-secondary mt-3" aria-describedby="infoHelp" @click.prevent="deleteUpdate(form.id_dokumen)"><span class="fa fa-times mr-3"></span> {{form.dokumen}}</button>
                                    <div id="infoHelp" class="form-text">Harap hapus dokumen terlebih dahulu jika ingin mengganti dokumen, klik pada button diatas.</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Tanggal Dokumen</label>
                                <input type="date" class="form-control" required v-model="form.tgl_dokumen">
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
                        text: 'Nama Dokumen',
                        value: 'nama_dokumen'
                    },
                    {
                        text: 'Dokumen',
                        value: 'dokumen'
                    },
                    {
                        text: 'Tanggal',
                        value: 'tgl_dokumen'
                    },
                    {
                        text: 'Actions',
                        value: 'actions',
                        align: 'center',
                        width: '180px',
                        sortable: false
                    },
                ],
                form: {
                    id_dokumen: '',
                    kode_sop: '',
                    nama_dokumen: '',
                    tgl_dokumen: '',
                    dokumen: '',
                    file: ''
                },
                loggedIn: localStorage.getItem('loggedIn'),
                loginFailed: null,
            }
        },
        created() {
            this.$store.commit('setHeaderToken')
        },
        methods: {
            getDataSop() {
                axios.get('/api/admin/sop').then((response) => {
                    this.sop = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            getData() {
                axios.get('/api/admin/dokumen').then((response) => {
                    console.log(response)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            selectFile(e) {
                let files = e.target.files[0]
                this.form.file = files
                console.log(files)
            },
            handlesubmit() {
                let formData = new FormData()
                formData.append('file', this.form.file)
                formData.append('kode_sop', this.form.kode_sop)
                formData.append('nama_dokumen', this.form.nama_dokumen)
                formData.append('tgl_dokumen', this.form.tgl_dokumen)

                axios.post('/api/admin/dokumen', formData).then((response) => {
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
                            id_dokumen: '',
                            kode_sop: '',
                            nama_dokumen: '',
                            tgl_dokumen: '',
                            dokumen: '',
                            file: ''
                        }

                        $("#add").modal('hide')
                        this.getData()
                    }
                })
            },
            handleDownload(id_dokumen) {
                axios.get('/api/admin/dokumen/download/'+id_dokumen).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handleUpdate() {
                let formData = new FormData()
                formData.append('file', this.form.file)
                formData.append('kode_sop', this.form.kode_sop)
                formData.append('nama_dokumen', this.form.nama_dokumen)
                formData.append('tgl_dokumen', this.form.tgl_dokumen)

                axios.post('/api/admin/dokumen/'+this.form.id_dokumen, formData).then((response) => {
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
                            id_dokumen: '',
                            kode_sop: '',
                            nama_dokumen: '',
                            tgl_dokumen: '',
                            dokumen: '',
                            file: ''
                        }

                        $("#update").modal('hide')
                        this.getData()
                    } else {
                        this.$swal.fire({
                            toast: true,
                            icon: 'warning',
                            text: response.data.message,
                            position: 'top-end',
                            showConfirmButton: false,
                            // timer: 3000
                        });
                    }
                })
            },
            handledelete(id_dokumen) {
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
                        axios.delete('/api/admin/dokumen/' +id_dokumen).then((response) => {
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
            deleteUpdate(id_dokumen) {
                this.$swal.fire({
                    title: 'Anda yakin akan menghapus dokumen ini?',
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
                        axios.delete('/api/admin/dokumen/del-up/' +id_dokumen).then((response) => {
                            if(response.data.status) {
                                this.$swal.fire({
                                    icon: 'success',
                                    title: response.data.message,
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                                this.form.dokumen = ''
                                this.form.file = ''
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
            },
            modalUpdateBatal() {
                this.form = {
                    id_dokumen: '',
                    kode_sop: '',
                    nama_dokumen: '',
                    tgl_dokumen: '',
                    dokumen: '',
                    file: ''
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
