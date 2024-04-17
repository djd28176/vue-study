<template>
    <Header></Header>
    <h1>Hello User, Welcome on Add Resturant Page</h1>
    <form class="add">
      <input type="text" name="name" placeholder="Enter Resturant Name" v-model="Resturant.name">
      <input type="text" name="address" placeholder="Enter Resturant Address" v-model="Resturant.address">
      <input type="text" name="contact" placeholder="Enter Resturant Contact" v-model="Resturant.contact">
      <button type="button" @click="addResturant">Add Resturant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'AddResturant',
  data() {
    return {
      Resturant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  components:{
    Header
  },
  methods:{
    async addResturant(){
        const response = await axios.post('http://localhost:3000/restaurant', {
                name: this.Resturant.name,
                address: this.Resturant.address,
                contact: this.Resturant.contact
        });
        console.log(response.data); 
        if(response.status === 201){
          this.$router.push({name: 'HomeView'});
        }
    }
  },
  mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){ 
            this.$router.push({name: 'Login'})
        }
    }
};
</script>

