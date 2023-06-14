<template>
  <div class="home">
    <button v-on:click="cargarSyd">Ver a Syd</button>
    <button v-on:click="cargarBud">Ver a Bud</button>
    <hr>
    <img v-bind:alt="textoMostrar" v-bind:src="imagenAMostrar">
    <HelloWorld msg="Bienvenido a VueJS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data:function(){
    return{

      // la ruta de las imagenes es desde la carpeta src,
      imagenSyd: 'assets/img/Syd.webp',
      imagenBud: 'assets/img/Bud.jpg',
      imagenAMostrar:'',
      textoMostrar: 'no hay imagen seleccionada'
    }
  },
  methods:{
    cargarSyd: function(){
      this.imagenAMostrar = this.imagenSyd;
      this.textoMostrar='Syd';
    },
    cargarBud: function(){
      this.imagenAMostrar = this.imagenBud;
      this.textoMostrar='Bud';
    }
  }
}
</script>

<style scoped>
.home{
  background-color: darkkhaki;
}
</style>
