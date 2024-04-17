<template>
    <div class = "nav">
        <a href="#"> Home</a>
        <router-link to="/add"> Add Resturant</router-link>
        <!-- <router-link to="/update"> Update Resturant</router-link> -->
        <a @click="logout()" href="#"> Logout</a>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>
<style>
.nav{
    background-color: #333;
    overflow:hidden;
}
.nav a{
    float:left;
    padding: 14px 16px;
    color:white;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:#ddd;
    color:#333;
}
</style>