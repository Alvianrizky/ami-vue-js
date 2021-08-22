<template>
    <div class="container" style="margin-top: 200px; margin-bottom: 100px;">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-10 col-10">
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg">Login</p>
                        <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                            {{ error[0] }}
                        </div>
                        <form @submit.prevent="handlesubmit">
                            <div class="input-group mb-3">
                                <input type="name" class="form-control" placeholder="name" v-model="form.name">
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Password" v-model="form.password">
                            </div>
                            <div class="float-end">
                                <router-link :to="{name: 'Index'}" class="btn btn-secondary text-white"><span class="fa fa-arrow-circle-left"></span>
                                Kembali</router-link>
                                <button type="submit" class="btn btn-primary text-white"><span class="fa fa-sign-in-alt"></span> Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                },
                errors: null
            }
        },
        methods: {
            handlesubmit() {
                axios.post('/api/login', this.form).then((response) => {
                    if (response.status) {
                        localStorage.setItem("loggedIn", "true")
                        localStorage.setItem("token", response.data.token)
                        localStorage.setItem("akses", btoa(response.data.akses.toLowerCase()))
                        localStorage.setItem("user", btoa(response.data.user))

                        if(response.data.akses === 'Admin') {
                            this.$router.push({
                                name: 'AdminHome',
                            })
                        } else if(response.data.akses === 'Auditor') {
                            this.$router.push({
                                name: 'AuditorHome',
                            })
                        } else if(response.data.akses === 'Ketua') {
                            this.$router.push({
                                name: 'KetuaHome',
                            })
                        }
                    }
                }).catch(error => {
                    this.errors = error.response.data.errors
                })
            }
        }
    }
</script>