<template>
    <button class="btn" @click="clickHandler">
        {{ text }}
    </button>
</template>

<script>
    export default {
        emits: ['clickHandler'],
        
        props: {
            text: {
                required: true,
                type: String
            }
        },

        methods: {
            clickHandler () {
                this.$emit('clickHandler')
            }
        }
    }
</script>