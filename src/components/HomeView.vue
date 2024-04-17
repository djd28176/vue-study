<template>
    <Header></Header>
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <table border="1">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
      </tr>
      <tr v-for="restaurant in resturants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.contact }}</td>
        <td>{{ restaurant.address }}</td>
        <td><router-link :to="'/update/'+restaurant.id">Update</router-link>
            <button @click="deleteRestaurant(restaurant.id)">Delete</button>
          </td>
      </tr>
    </table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
        name: '',
        resturants: []
    }
  },
  components:{
    Header
  },
  methods: {
         async deleteRestaurant(id) {
          let result = await axios.delete('http://localhost:3000/restaurant/' + id);
          if(result.status === 200){
            location.reload();
          }
      
        },
      },
  async mounted(){
        let user = localStorage.getItem("user-info");

        this.name = JSON.parse(user).name;

        if(!user){ 
            this.$router.push({name: 'Login'})
        }

        let result = await axios.get('http://localhost:3000/restaurant');
        this.resturants = result.data;
    } 
};
</script>

<style>
td{
  width:160px;
  height:40px;
}
</style>

