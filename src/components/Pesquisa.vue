<template>
  <fieldset>
    <h1>Consultar Placas</h1>
    <label for="placa">Placa:</label>
    <input type="text" id="placa" maxlength="8" v-model="placa" />
    <button @click="pesquisarVeiculo">Buscar</button>
  </fieldset>
</template>

<script>
export default {
  data: function() {
    return {
      placa: ""
    };
  },
  methods: {
    pesquisarVeiculo: function() {       
      this.$store.state.infracoesVeiculo = this.$store.state.multas.filter(
        multa => multa.PLACA == this.placa
      );
      this.$router.push("/infracoes")
    }
  }
};
</script>

<style>
html, body{
  background-color: darkgray;
}
fieldset{
width: 500px;
height: 150px;
margin: 100px 30%;
text-align: center;
border-radius: 6px;
border-color: black;
background:  green;
}
button{
  border-radius: 2px;
  background: green;
  margin: 0 10px;
}
label{
  margin: 0 10px;
}
input{
  border-radius: 2px;
  width: 150px;
  background:  green;
}
img {
  border: black 2px;
  margin: 55px 30px 6px 35px;
  width: 260px;
  height: 175px;
}
</style>