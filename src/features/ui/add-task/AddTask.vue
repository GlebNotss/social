<template>
    <div class="add-task-wrap">
        <Input 
            @inputValue="inputValue"
            :clearInput="clearInput"
        />
        <Button 
            :text="'Добавить'"
            @clickHandler="addTask"
        />
    </div>
</template>

<script>
    import { Button, Input } from '@/shared'
    import { mapActions } from 'vuex'

    export default {
        emits: ['addTask'],

        data () {
            return {
                clearInput: false
            }
        },
        
        components: {
            Button,
            Input
        },

        methods: {
            ...mapActions([
                'task/addTask'
            ]),

            addTask () {
                if (!this.clearInput) {
                    this['task/addTask'](this.value)
                }

                this.clearInput = true
            },

            inputValue (value) {
                this.value = value

                if (value != '') {
                    this.clearInput = false
                }
            }
        }
    }
</script>