<template>
    <div>
        <div class="content-header mx-1">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Data Akun</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Data Akun</li>
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
                                <h5 class="card-title">Data Akun</h5>
                            </div>
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-8">
                                        <a href="#" class="btn btn-primary mt-2" @click.prevent="modalAddUser()">
                                            <span class="fa fa-plus"></span> Tambah Data Akun
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
                                                        @click="modalUpdateUser(item)">
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
                    </div>
                    <!-- /.col -->
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog text-dark">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handlesubmit">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Nama</label>
                                <select class="form-select" aria-label="Default select example" required
                                    v-model="form.uuid_pengguna">
                                    <option selected>- Pilih Nama -</option>
                                    <option v-for="(data,index) in pengguna" :key="index" :value="data.uuid">
                                        {{ data.nama }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" required v-model="form.email">
                            </div>
                            <div class="mb-3">
                                <label for="akses" class="form-label">Hak Akses</label>
                                <select class="form-select" aria-label="Default select example" id="akses" required v-model="form.hak_akses">
                                    <option selected>- Pilih Hak Akses -</option>
                                    <option value="Ketua">Ketua</option>
                                    <option value="Auditor">Auditor</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" required v-model="form.name">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" required v-model="form.password">
                            </div>
                            <div class="form-check ml-1 mb-3">
                                <input type="checkbox" @click="myFunction()" class="form-check-input">
                                <label for="show" class="form-check-label">Show Password</label>
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

        
        <div class="modal fade" id="updateUser" tabindex="-1" aria-labelledby="updateUserLabel" aria-hidden="true">
            <div class="modal-dialog text-dark">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                        <button type="button" class="btn-close" @click.prevent="modalUpdateBatal()" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="handleUpdate">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Nama</label>
                                <select class="form-select" aria-label="Default select example" required
                                    v-model="form.uuid_pengguna">
                                    <option selected>- Pilih Nama -</option>
                                    <option v-for="(data,index) in pengguna" :key="index" :value="data.uuid">
                                        {{ data.nama }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" required v-model="form.email">
                            </div>
                            <div class="mb-3">
                                <label for="akses" class="form-label">Hak Akses</label>
                                <select class="form-select" aria-label="Default select example" id="akses" required v-model="form.hak_akses">
                                    <option selected>- Pilih Hak Akses -</option>
                                    <option value="Ketua">Ketua</option>
                                    <option value="Auditor">Auditor</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" required v-model="form.name">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="form.password">
                            </div>
                            <div class="form-check ml-1 mb-3">
                                <input type="checkbox" @click="myFunction()" class="form-check-input">
                                <label for="show" class="form-check-label">Show Password</label>
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
                        text: 'Nama',
                        value: 'pengguna'
                    },
                    {
                        text: 'Username',
                        value: 'name'
                    },
                    {
                        text: 'Email',
                        value: 'email'
                    },
                    {
                        text: 'Hak Akses',
                        value: 'hak_akses'
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
                    id: '',
                    uuid_pengguna: '',
                    name: '',
                    email: '',
                    hak_akses: '',
                    password: '',
                },
                pengguna: [],
                loggedIn: localStorage.getItem('loggedIn'),
                loginFailed: null,
            }
        },
        created() {
            this.$store.commit('setHeaderToken')
            
        },
        methods: {
            myFunction() {
                var x = document.getElementById("password");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            },
            getDataPengguna() {
                axios.get('/api/admin/pengguna').then((response) => {
                    // console.log(response)
                    this.pengguna = response.data
                })
            },
            getData() {
                axios.get('/api/admin/akun').then((response) => {
                    // console.log(response)
                    this.rows = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            handlesubmit() {
                // console.log(this.form)
                axios.post('/api/admin/akun', this.form).then((response) => {
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
                            uuid_pengguna: '',
                            name: '',
                            email: '',
                            hak_akses: '',
                            password: '',
                        }

                        $("#addUser").modal('hide')

                        this.getData()
                        
                    }
                })
            },
            handleUpdate() {
                axios.put('/api/admin/akun/'+this.form.id, this.form).then((response) => {
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
                            uuid_pengguna: '',
                            name: '',
                            email: '',
                            hak_akses: '',
                            password: '',
                        }

                        $("#updateUser").modal('hide')

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
                        axios.delete('/api/admin/akun/' +id).then((response) => {
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
            modalAddUser() {
                $("#addUser").modal('show')
            },
            modalUpdateUser(data) {
                $("#updateUser").modal('show')
                this.form = data
                // console.log(data)
            },
            modalUpdateBatal() {
                this.form = {
                    id: '',
                    uuid_pengguna: '',
                    name: '',
                    email: '',
                    hak_akses: '',
                    password: '',
                }

                $("#updateUser").modal('hide')
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
            this.getDataPengguna()
        }
    }

</script>
