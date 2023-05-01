<template>
    <div class="toolbar">
        <AddTask 
            @addTask="addTask"
        />
    </div>
</template>

<script>
    import { AddTask } from '@/features';

    export default {
        data () {
            return {
                value: ''
            }
        },

        components: {
            AddTask
        }
    }
</script>