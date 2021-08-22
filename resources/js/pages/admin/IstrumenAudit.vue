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
                                        <router-link :to="{name: 'AdminPrintInstrumen'}" target='_blank' class="btn btn-danger mt-2">
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
                                                :search="search">
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
import NavAuditor from '../../components/NavAuditor.vue'
    export default {
  components: { NavAuditor },
        data() {
            return {
                rows: [],
                search: '',
                loading: true,
                options: {},
                headers: [
                    {
                        text: 'Program Studi',
                        value: 'program_studi'
                    },
                    {
                        text: 'Tahun',
                        value: 'tahun_pengukuran'
                    },
                    {
                        text: 'Kode',
                        value: 'kode_sn'
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
                        text: 'Hasil',
                        value: 'hasil'
                    },
                    {
                        text: 'Persentase',
                        value: 'persentase'
                    },
                    {
                        text: 'Temuan',
                        value: 'temuan'
                    },
                    {
                        text: 'Ktgr Temuan',
                        value: 'kategori_temuan'
                    },
                    {
                        text: 'Pendendali Dokumen',
                        value: 'pengendali_dokumen'
                    },
                    {
                        text: 'Tanggal',
                        value: 'tanggal_mulai' || 'tanggal_selesai'
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
                axios.get('/api/auditor/audit/instrumen/'+atob(localStorage.getItem('user'))).then((response) => {
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
