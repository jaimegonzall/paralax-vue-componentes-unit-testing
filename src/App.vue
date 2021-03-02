<template>
<!-- todo lo que se escriba dentro del div "app" será renderizado -->
  <div id="app">

    <h1>{{mensaje}}</h1>
    <h3 v-text="mensaje"></h3>


    <button @click="cambiarEstado()" v-if="!activada">Activar</button>
    <button @click="cambiarEstado()" v-else>Desactivar</button>

    <hr>

    <h3>Lista de usuarios</h3>
    <table class="table text-center">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in arrayPersonas" :key="persona.id"> <!-- Recorremos nuestro array -->
          <td v-text="persona.nombre"></td> <!--En la primera columna mostramos el nombre-->
          <td v-text="persona.apellidos"></td> <!--En la segunda mostramos el apellido-->
        </tr>
      </tbody>
    </table>
    <hr>
    <div>
        <div>
          <label>Nombre</label>
          <input v-model="nombre" type="text" class="form-control"> <!-- input relacionado con la variable nombre-->

          <label>Apellidos</label>
          <input v-model="apellidos" type="text" class="form-control"><!-- input relacionado con la variable apellidos-->
        </div>
        <button @click="Guardar()" class="btn btn-success">Añadir</button>
    </div>


  </div> <!-- fin de app -->
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      mensaje: 'Bienvenido al mundo de Vue.js App',
      activada : true,
      arrayPersonas:[],
      nombre : "",
      apellidos:"", // están vacíos ya que le daremos valor con un input
      }
    },
    methods:{
    cambiarEstado(){
      this.activada = !this.activada;
      },
      Guardar(){
        var persona = {nombre:this.nombre, apellidos:this.apellidos} //creamos un objeto
        this.arrayPersonas.push(persona); //añadimos el la variable persona al array
        this.nombre = "";
        this.apellidos = ""; //Limpiamos los campos
      }
    }
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: #28a645;
}

 button{
   padding:1rem;
   font-size: 15px;
   min-width: 150px;
   border: none;
   cursor: pointer;
   background-color: #28a645;
 }

</style>
