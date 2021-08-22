<template>
    <div>
        
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Isian</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Isian</li>
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
                                <h5 class="card-title">Data Isian</h5>
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
                                                :search="search" :loading="loading">
                                                <template v-slot:item.actions="{ item }">
                                                    <v-btn color="bg-primary" dark fab small @click="modalView(item)">
                                                        <v-icon>
                                                            mdi-eye
                                                        </v-icon>
                                                    </v-btn>
                                                    <v-btn color="bg-success" class="mx-2" dark fab small
                                                        @click="modalAdd(item)">
                                                        <v-icon>
                                                            mdi-plus
                                                        </v-icon>
                                                    </v-btn>
                                                    <v-btn color="bg-danger" dark fab small @click="modalDokumen(item)">
                                                        <v-icon>
                                                            mdi-file
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
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Data Deskriptor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handlesubmit">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Kode Standar</label>
                                <input type="text" class="form-control" disabled readonly v-model="form.kode_sop">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nama Standar</label>
                                <input type="text" class="form-control" disabled readonly v-model="form.nama_sop">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Kode Butir</label>
                                <input type="text" class="form-control" disabled readonly v-model="form.kode_butir">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Isi Deskriptor</label>
                                <textarea class="form-control" rows="7" v-model="form.deskripsi"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Pengendali Dokumen</label>
                                <textarea class="form-control" rows="7" v-model="form.pengendali_dokumen"></textarea>
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
        
        <div class="modal fade" id="updateButir" tabindex="-1" aria-labelledby="updateButirLabel" aria-hidden="true">
            <div class="modal-dialog text-dark">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Butir</h5>
                        <button type="button" class="btn-close" @click.prevent="modalUpdateBatal()" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handleUpdate">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="nomerStandar" class="form-label">Nomer Standar</label>
                                <input type="number" class="form-control" id="nomerStandar" required v-model="form.nomer_standar">
                            </div>
                            <div class="mb-3">
                                <label for="butirMutu" class="form-label">Butir Mutu</label>
                                <input type="text" class="form-control" id="butirMutu" required v-model="form.butir_mutu">
                            </div>
                            <div class="mb-3">
                                <label for="hasilObservasi" class="form-label">Hasil Observasi</label>
                                <textarea class="form-control" rows="1" @focus="resizeTextarea" @keyup="resizeTextarea" id="hasilObservasi" v-model="form.hasil_observasi"></textarea>
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

        <div class="modal fade" id="view" tabindex="-1" aria-labelledby="viewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Butir</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Kode Standar</label>
                                <p class="text-dark">{{ form.kode_sop }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nama Standar</label>
                                <p class="text-dark">{{ form.nama_sop }}</p>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Butir Standar</label>
                                <nl2br tag="p" className="text-dark" :text="form.isi_butir" /> 
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Indikator</label>
                                <nl2br tag="p" className="text-dark" :text="form.indikator" /> 
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Tanggal Butir</label>
                                <p class="text-dark">{{ form.tgl_butir }}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dokumen" tabindex="-1" aria-labelledby="dokumenLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Dokumen Pendukung</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Nama Dokumen</label>
                                        <p class="text-dark">{{ form.nama_dokumen }}</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Download</label> <br>
                                        <a :href="'../dokumen/'+form.dokumen" class="link-primary">{{ form.dokumen }}</a>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
                        value: 'no',
                        width: '68px'
                    },
                    {
                        text: 'Kode Standar',
                        value: 'kode_sop',
                    },
                    {
                        text: 'Nama Standar',
                        value: 'nama_sop'
                    },
                    {
                        text: 'Tanggal Butir',
                        value: 'tgl_butir',
                        width: '120px'
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
                    id: '',
                    kode_sop: '',
                    nama_sop: '',
                    kode_butir:'',
                    isi_butir: '',
                    indikator: '',
                    tgl_butir: '',
                    deskripsi: '',
                    pengendali_dokumen: '',
                    nama_dokumen: '',
                    dokumen: '',
                    url: '',
                },
                loggedIn: localStorage.getItem('loggedIn'),
                loginFailed: null,
            }
        },
        created() {
            this.$store.commit('setHeaderToken')
        },
        methods: {
            resizeTextarea(e) {
                let area = e.target;
                area.style.overflow = 'hidden';
                area.style.height = area.scrollHeight + 'px';
            },
            getData() {
                axios.get('/api/admin/deskripsi').then((response) => {
                    console.log(response.data)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handlesubmit() {
                axios.post('/api/admin/deskripsi', this.form).then((response) => {
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
                            id: '',
                            kode_sop: '',
                            nama_sop: '',
                            isi_butir: '',
                            indikator: '',
                            tgl_butir: '',
                            deskripsi: '',
                            pengendali_dokumen: ''
                        },

                        $("#add").modal('hide')

                        this.getData()
                        
                    }
                })
            },
            handleUpdate() {
                console.log(this.form)
                axios.put('/api/admin/butir-mutu/'+this.form.uuid, this.form).then((response) => {
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
                            nama_Butir: '',
                            keterangan: '',
                        }

                        $("#updateButir").modal('hide')

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
                        axios.delete('/api/admin/butir-mutu/' +id).then((response) => {
                            if(response.data.status) {
                                this.$swal.fire({
                                    icon: 'success',
                                    title: response.data.message,
                                    // position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                                this.getData()
                            }
                        })
                    }
                })
            },
            modalAdd(data) {
                $("#add").modal('show')
                this.form = data
                console.log(data)
            },
            modalUpdateButir(data) {
                $("#updateButir").modal('show')
                this.form = data
                console.log(data)
            },
            modalView(data) {
                $("#view").modal('show')
                this.form = data
                console.log(data)
            },
            modalDokumen(data) {
                $("#dokumen").modal('show')
                this.form = data
                console.log(data)
            },
            modalUpdateBatal() {
                this.form = {
                    id: '',
                    kode_sop: '',
                    nama_sop: '',
                    isi_butir: '',
                    indikator: '',
                    tgl_butir: '',
                    deskripsi: '',
                    pengendali_dokumen: ''
                }

                $("#view").modal('hide')
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
