<template>
    <div>
        <nav-user></nav-user>

        <div class="content-wrapper text-dark">
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1> Data Butir Mutu</h1>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>

            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title">Data Butir Mutu</h5>
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
                                                </v-data-table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
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
                        text: 'Nomer Standar',
                        value: 'nomer_standar_text',
                        width: '150px'
                    },
                    {
                        text: 'Butir Mutu',
                        value: 'butir_mutu'
                    },
                    {
                        text: 'Hasil Observasi',
                        value: 'hasil_observasi'
                    },
                ],
                form: {
                    uuid: '',
                    nomer_standar: '',
                    butir_mutu: '',
                    hasil_observasi: '',
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
                axios.get('/api/admin/butir-mutu').then((response) => {
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
