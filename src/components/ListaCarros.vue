<template>
    <div class="list-group">
        <a href="#" class="list-group-item" v-for="carro in carros" key="index" @click.prevent="editar(carro)">{{carro.marca}}</a>
    </div>
</template>

<script>
    export default {
        props: ['carros'],
        methods: {
            editar(carro) {
                this.$emit('editarcarro', carro)
            }
        }
    }
</script>
