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
                                        <router-link :to="{name: 'AdminPrintRata'}" target='_blank' class="btn btn-danger mt-2">
                                            <span class="fa fa-file-pdf"></span>
                                            Cetak
                                        </router-link>
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
                        text: 'Kode Standar',
                        value: 'kode_sop'
                    },
                    {
                        text: 'Standar',
                        value: 'nama_sop'
                    },
                    {
                        text: 'Auditor',
                        value: 'nama_auditor'
                    },
                    {
                        text: 'Jumlah Butir',
                        value: 'jumlah_butir_evaluasi_pada_kode_sop'
                    },
                    {
                        text: 'Persentase',
                        value: 'rata_rata_persentase'
                    },
                    {
                        text: 'Hasil | ADA',
                        value: 'ada'
                    },
                    {
                        text: 'Hasil | TIDAK',
                        value: 'tidak'
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
                ],
                form: {
                    uuid: '',
                    nama_jabatan: '',
                    keterangan: '',
                },
                loggedIn: localStorage.getItem('loggedIn'),
                loginFailed: null,
            }
        },
        created() {
            this.$store.commit('setHeaderToken')
        },
        methods: {
            getData() {
                axios.get('/api/admin/hasil/rata-rata').then((response) => {
                    console.log(response)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
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
