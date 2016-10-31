<template>
    <div class="form-group">
        <input class="form-control input-sm" type="text" v-model="msg">
        <button class="btn btn-default" @click="clique">{{ counter }}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Valor inicial.',
                counter: 1
            }
        },
        methods: {
            clique() {
                this.counter++
            } 
        },
        watch: {
            'msg': function(val, oldval){
                this.counter = val
            }
        }
    }
</script>