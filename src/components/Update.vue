<template>
    <Header></Header>
    <h1>Hello User, Welcome on Update Resturant Page</h1>
    <form class="add">
      <input type="text" name="name" placeholder="Enter Resturant Name" v-model="Resturant.name">
      <input type="text" name="address" placeholder="Enter Resturant Address" v-model="Resturant.address">
      <input type="text" name="contact" placeholder="Enter Resturant Contact" v-model="Resturant.contact">
      <button type="button" @click="updateResturant">Update Resturant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'UpdateResturant',
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
  methods: {
    async updateResturant() {
      const result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, this.Resturant);
      if(result.status === 200){
        this.$router.push({name: 'HomeView'});
      }
    }
  },
  async mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){ 
            this.$router.push({name: 'Login'})
        }
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
        this.Resturant = result.data;
    }
};
</script>

