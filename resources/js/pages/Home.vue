<template>
    <div class="container">
        <form @submit.prevent="handle">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model="text">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <p>{{this.name}}</p>
        <a href="" @click.prevent="logout" class="btn btn-primary">Logout</a>

        <div class="mt-5">
            <div class="card circle">
                <div class="card-body">
                    ppp
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            loggedIn: localStorage.getItem('loggedIn'),
            text: '',
            name: '',
            loginFailed: null,
        }
    },
    created() {
        this.$store.commit('setHeaderToken')
        this.getData()
    },
    methods: {
        getData() {
            
            axios.get('/api/user').then((response) => {
                if (response.status) {
                    this.name = response.data.data.name
                } else {
                    this.loginFailed = true
                }
            })
        },
        logout() {
            axios.get('http://localhost:8000/api/logout').then((response) => {
                //remove localStorage
                localStorage.removeItem("loggedIn")    
                localStorage.removeItem("token")    

                //redirect
                return this.$router.push({ name: 'Login' })
            })
        }
    },
    mounted() {
        this.$store.commit('setLoggedIn')
        if(!this.$store.state.loggedIn) {
            return this.$router.push({ name: 'Login' })
        }
    }
}
</script>
