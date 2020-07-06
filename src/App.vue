<template>
  <div class="app">
    <div id="nav" v-show="false">
      <router-link to="/">Home</router-link> |
      <router-link to="/sobre">Sobre</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  mounted() {
    axios.get("http://localhost:8080/multasjson").then(multas => this.$store.state.multas = multas.data)
  }
}
</script>

<style></style>
