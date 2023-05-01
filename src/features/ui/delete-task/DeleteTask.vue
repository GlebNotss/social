<template>
    <div>
        <ButtonDelete @clickHandler="clickHandler"/>
    </div>
</template>

<script>
    import { ButtonDelete } from '@/shared';
    import { mapActions } from 'vuex';

    export default {
        props: {
            taskIndex: Number
        },

        components: {
            ButtonDelete
        },

        methods: {
            ...mapActions([
                'task/deleteTask'
            ]),

            clickHandler () {
                this['task/deleteTask'](this.taskIndex)
            }
        }
    }
</script>