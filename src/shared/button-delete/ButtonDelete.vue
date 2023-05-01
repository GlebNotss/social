<template>
    <button class="btn-delete" @click="clickHandler">
        X
    </button>
</template>

<script>
    export default {
        emits: ['clickHandler'],
        
        methods: {
            clickHandler () {
                this.$emit('clickHandler')
            }
        }
    }
</script>