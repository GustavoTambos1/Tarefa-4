<template>
  <div class="infracoes">
        <div v-for="(infracao, index) in infracoes" :key="index">
        <label for="data">Data da infração:</label>
        <input type="text" id="data" :value="infracao.DADOS_INFRACAO.DATAHORA" /><br>

        <label for="placa">Placa:</label>
        <input type="text" id="placa" :value="infracao.PLACA" /><br>

        <label for="placa">Localidade:</label>
        <input type="text" id="placa" :value="infracao.LOCALIDADE" /><br>

        <label for="placa">Tipo:</label>
        <input type="text" id="placa" :value="infracao.DADOS_INFRACAO.TIPO" /><br>

        <label for="placa">Valor:</label>
        <input type="text" id="placa" :value="infracao.DADOS_INFRACAO.VALOR" /><br>

        <h4 id="texto" v-if="infracao.DADOS_INFRACAO.TIPO == 'VELOCIDADE'"> Velocidade Máxima: {{infracao.DADOS_INFRACAO.VEL_MAXIMA}}</h4>
        <button id="botao" @click="voltar">Consultar outra Placa</button>

  </div>
        

  </div>
</template>

<script>
export default {
  computed: {
    infracoes: function() {
        return this.$store.state.infracoesVeiculo
    }  
  }, methods:{
    voltar: function(){
      this.$router.push("/")
    }
  }
};
</script>

<style>
#texto{
  color: rgb(0, 0, 0);
}
</style>