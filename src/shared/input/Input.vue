<template>
    <input class="input" type="text" v-model="value" @input="inputValue">
</template>

<script>
    export default {
        props: {
            clearInput: Boolean
        },

        emits: ['inputValue'],

        data () {
            return {
                value: ''
            }
        },

        watch: {
            clearInput () {
                if (this.clearInput) {
                    this.value = ''
                }
            }
        },

        methods: {
            inputValue () {
                this.$emit('inputValue', this.value)
            }
        }
    }
</script>