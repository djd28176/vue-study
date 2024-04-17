<template>
    <h1>Login</h1>
    <div class="login">

        <input type="email" v-model="email" placeholder="Email">

        <input type="password" v-model="password" placeholder="Password">    

        <button @click="login">Login</button>
        <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }
},
    methods:{
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.warn(result)
            if(result.status === 200 && result.data.length > 0){
              localStorage.setItem('user-info',JSON.stringify(result.data[0]))
              this.$router.push({name: 'HomeView'});
            }
        }
    }
}

</script>