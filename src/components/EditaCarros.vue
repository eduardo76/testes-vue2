<template>
    <div>
        <div class="panel panel-default">
          <div class="panel-heading">Editar Marca</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="item">Marca</label>
              
              <input type="text" class="form-control" ref="marca" v-model="xcarro.marca" @keyup.enter="salvar">
            </div>
            <div class="form-group">
              <label for="item">Cor</label>
              <!-- <input type="text" class="form-control" name="item" id="item" v-model="updatecarro"> -->
              <input type="text" class="form-control" ref="cor" v-model="xcarro.cor">
            </div>
          </div>
          <div class="panel-footer">
            <button class="btn btn-primary" @click="salvar">Salvar</button>
            <button class="btn btn-default" @click="cancelar">Cancelar</button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            carro: {
                // type: Object,
                default: null
            }
        },

        data() {
            return {
                xcarro: {
                    marca: '',
                    cor: ''
                }
            }
        },

        mounted(){

        },

        computed: {

        },

        watch: {
            'carro': function(val, oldval){
                this.xcarro = val
                console.log('Carro Prop:', this.xcarro.marca)
            }
        },

        methods: {
            salvar() {
                // this.carro = ''
                this.$emit('salvar', this.xcarro)
                this.xcarro = {
                    marca: '',
                    cor: ''
                }
            },
            cancelar() {
                this.$refs.marca.value = ''
            },            
            updateCarro(e) {
                this.c = e.target.value
            }
        }
    }
</script>