<template>
    <div>
        <nav id="sidebar" class="sidebar-dark-primary elevation-4" style="height: auto;">
            <a href="" class="brand-link">
                <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                    style="opacity: .8"> -->
                <span class="brand-text font-weight-light">SIJAMU</span>
            </a>

            <div class="sidebar text-white">

                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <!-- <div class="image">
                        <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                    </div> -->
                    <div class="info">
                        <span>{{ this.form.nama }}</span> <br>
                        <a href="#"><i class="fa fa-circle text-success"></i> {{ this.form.hak_akses }} | Online</a>
                    </div>
                </div>

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">

                        <li class="nav-item">
                            <router-link :to="{name: 'AdminHome'}" class="nav-link text-white">
                                <span class="fa fa-home nav-icon"></span>
                                Beranda
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminDataIsian'}" class="nav-link text-white">
                                <span class="fa fa-graduation-cap nav-icon"></span>
                                Data Isian
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminDeskriptor'}" class="nav-link text-white">
                                <span class="fa fa-book nav-icon"></span>
                                Data Deskriptor
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminIstrumenAudit'}" class="nav-link text-white">
                                <span class="fa fa-file nav-icon"></span>
                                Data Instrumen Audit
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminJadwal'}" class="nav-link text-white">
                                <span class="fa fa-calendar-alt nav-icon"></span>
                                Data Jadwal Audit
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminStandar'}" class="nav-link text-white">
                                <span class="fa fa-tags nav-icon"></span>
                                Data Standar Nasional
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminSop'}" class="nav-link text-white">
                                <span class="fa fa-tags nav-icon"></span>
                                Data Sub Standar
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminButirStandar'}" class="nav-link text-white">
                                <span class="fa fa-book-open nav-icon"></span>
                                Butir Sub Standar
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'AdminDokumen'}" class="nav-link text-white">
                                <span class="fa fa-file-pdf nav-icon"></span>
                                Dokumen Pendukung
                            </router-link>
                        </li>

                        <li class="nav-item" v-bind:class="{ 'menu-open': isActive}">
                            <a href="#" class="nav-link text-white" v-bind:class="{ 'active': isActive}">
                                <i class="nav-icon fas fa-users-cog"></i>
                                <p class="text-white">
                                    Setting Pengguna
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link :to="{name: 'AdminJabatan'}" class="nav-link"
                                        v-bind:class="{ 'text-dark': classActiveJabatan, 'text-white': classNotActiveJabatan}">
                                        <span class="far fa-circle nav-icon"></span>
                                        Jabatan
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{name: 'AdminPengguna'}" class="nav-link"
                                        v-bind:class="{ 'text-dark': classActivePengguna, 'text-white':
                                        classNotActivePengguna}">
                                        <span class="far fa-circle nav-icon"></span>
                                        Pengguna
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{name: 'AdminAkun'}" class="nav-link" v-bind:class="{ 'text-dark': classActiveAkun, 'text-white':
                                        classNotActiveAkun}">
                                        <span class="far fa-circle nav-icon"></span>
                                        Akun Pengguna
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{name: 'AdminAkunAdmin'}" class="nav-link" v-bind:class="{ 'text-dark': classActiveAkunAdmin, 'text-white':
                                        classNotActiveAkunAdmin}">
                                        <span class="far fa-circle nav-icon"></span>
                                        Akun Admin
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{name: 'AdminJob'}" class="nav-link text-white">
                                <span class="fa fa-briefcase nav-icon"></span>
                                Deskripsi Pekerjaan
                            </router-link>
                        </li>

                        <li class="nav-item" v-bind:class="{ 'menu-open': isActiveHasil}">
                            <a href="#" class="nav-link text-white" v-bind:class="{ 'active': isActiveHasil}">
                                <i class="nav-icon fas fa-clipboard-check"></i>
                                <p class="text-white">
                                    Hasil Audit
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link :to="{name: 'AdminHasilRata'}" class="nav-link"
                                        v-bind:class="{ 'text-dark': classActiveHasilRata, 'text-white': classNotActiveHasilRata}">
                                        <span class="far fa-circle nav-icon"></span>
                                        Hasil Rata - Rata
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{name: 'AdminHasilLaporan'}" class="nav-link" v-bind:class="{ 'text-dark': classActiveHasilLaporan, 'text-white':
                                        classNotActiveHasilLaporan}">
                                        <span class="far fa-circle nav-icon"></span>
                                        Hasil audit
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item mt-5">
                            <a href="" @click.prevent="logout" class="nav-link text-white">
                                <span class="fa fa-sign-out-alt nav-icon"></span> Logout
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>
        </nav>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                isActive: false,
                isActiveHasil: false,
                classActiveJabatan: false,
                classActivePengguna: false,
                classActiveAkun: false,
                classActiveAkunAdmin: false,
                classActiveHasilRata: false,
                classActiveHasilLaporan: false,
                classNotActiveJabatan: true,
                classNotActivePengguna: true,
                classNotActiveAkun: true,
                classNotActiveAkunAdmin: true,
                classNotActiveHasilRata: true,
                classNotActiveHasilLaporan: true,
                form: {
                    nama: '',
                    hak_akses: ''
                },
            }
        },
        created() {
            this.settingAkun()
            console.log(this.isActive)
            
            this.getData()

            
        },
        methods: {
            getData() {
                axios.get('/api/user/'+atob(localStorage.getItem('user'))).then((response) => {
                    console.log(response)
                    this.form = response.data
                }).catch((error) => {
                    return this.$router.push({ name: 'Login' })
                })
            },
            settingAkun() {
                if(this.$route.name == 'AdminJabatan') {
                    this.isActive = true
                    this.classActiveJabatan = true
                    this.classNotActiveJabatan = false
                } else if(this.$route.name == 'AdminPengguna') {
                    this.isActive = true
                    this.classActivePengguna = true
                    this.classNotActivePengguna = false
                } else if(this.$route.name == 'AdminAkun') {
                    this.isActive = true
                    this.classActiveAkun = true
                    this.classNotActiveAkun = false
                } else if(this.$route.name == 'AdminAkunAdmin') {
                    this.isActive = true
                    this.classActiveAkunAdmin = true
                    this.classNotActiveAkunAdmin = false
                } else if(this.$route.name == 'AdminHasilRata') {
                    this.isActiveHasil = true
                    this.classActiveHasilRata = true
                    this.classNotActiveHasilRata = false
                } else if(this.$route.name == 'AdminHasilLaporan') {
                    this.isActiveHasil = true
                    this.classActiveHasilLaporan = true
                    this.classNotActiveHasilLaporan = false
                }
            },
            logout() {
                this.$swal.fire({
                    title: 'Anda yakin ingin logout?',
                    text: "Anda akan keluar dari akses akun sistem ini!",
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonColor: '#d33',
                    confirmButtonColor: '#3085d6',
                    cancelButtonText: 'Tidak',
                    confirmButtonText: 'Ya',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.get('/api/logout').then((response) => {
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Anda sudah berhasil logout',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            //remove localStorage
                            localStorage.removeItem("loggedIn")
                            localStorage.removeItem("token")
                            localStorage.removeItem("akses")

                            //redirect
                            return this.$router.push({
                                name: 'Login'
                            })
                        })
                    }
                })

            }
        }
    }

</script>
