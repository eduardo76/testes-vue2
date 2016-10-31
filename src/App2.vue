<template>
    <div class="container">
        <h3 class="page-header">Teste de comunicação entre componentes</h3>
        <div class="col-sm-4">
            <lista-carros :carros="carros" @editarcarro="editarcarro"></lista-carros>
        </div>
        <div class="col-sm-8">
            <edita-carros :carro="carro" @salvar="salvar"></edita-carros>
        </div>
    </div>
</template>

<script>

import EditaCarros from './components/EditaCarros.vue'
import ListaCarros from './components/ListaCarros.vue'

let carros = ['Ferrari', 'Porsche', 'Lamborguini', 'Lotus', 'Mercedes']
let carros2 = [
    {marca: 'Ferrari', cor: 'Vermelho'}, 
    {marca: 'Porsche', cor: 'Branco'}, 
    {marca: 'Lamborguini', cor: 'Amarelo'}, 
    {marca: 'Lotus', cor: 'Verde'}, 
    {marca: 'Mercedes', cor: 'Prata'}
]

export default {
    name: 'App2',
    
    components: {
        EditaCarros, ListaCarros
    },
    
    data() {
        return {
            carros: carros2,
            carro: null
        }
    },

    methods: {
        editarcarro(carro) {
            this.carro = carro
        },
        salvar(carro) {
            let indice = this.carros.indexOf(this.carro)
            this.carros.splice(indice, 1)
            this.carros.splice(indice, 0, carro)
        }
    }
}
</script>