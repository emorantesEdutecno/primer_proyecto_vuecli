<template>
  <div class="about">
    <h1>Esta es una página de información</h1>
    <h3>Tecnologías que integran un SFC</h3>
    <ul>
      <li>HMTL</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <p>{{  texto }}</p>
    <p>{{ despedida }}</p>
    <input type="text" v-bind:value="contenidoTexto"><br>
    <button v-on:click="despedirse">Ver despedida</button>

  </div>
</template>

<script>
  export default{
    name: 'about-component',
    data: function(){
      return{
        texto: 'Esto es un texto del modelo de datos',
        despedida: '',
        contenidoTexto: 'Contenido del Modelo'
      }
    },
    methods: {
      despedirse: function(){
        this.despedida = 'Me voy mañana sigo estudiando'
      }
    }
  }
</script>

<style scoped>
.about{
  background-color: mediumorchid;
}
</style>
