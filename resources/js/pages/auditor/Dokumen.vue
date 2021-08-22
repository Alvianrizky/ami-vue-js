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

    </div>
</template>

<script>
import NavAuditor from '../../components/NavAuditor.vue'
    export default {
  components: { NavAuditor },
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
            getData() {
                axios.get('/api/admin/dokumen').then((response) => {
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
