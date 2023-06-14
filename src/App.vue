<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Información</router-link>
    </nav>
    <router-view/>
    <hr>
      <div class="prueba">
          <p>Contenido:</p>
          <p id="parrafoMensaje">{{ mensaje }}</p>
          <p>{{ saludo  }}</p>
          <button v-on:click="saludar">Ver saludo</button>
      </div>
    <hr>
  </div>
</template>

<script>
  export default{
    name: 'app-component',
    data: function(){
      return{
        mensaje: 'Hola Mundo con VueJS',
        otroMensaje: 'Estamos trabajando con VueJS2',
        saludo: ''
      }
    },
    methods: {
      saludar: function(){
        this.saludo =  'Estoy cambiando una propiedad del modelo de datos';
      }
    }
  }
</script>

<style>
body {
  background-color:lightpink;
}

.prueba{
  background-color: darkgreen;
  color: yellow;
}

#parrafoMensaje{
  font-size: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
