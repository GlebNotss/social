<template>
    <div>
        <div
            v-for="(task, i) in getTasks"
            :key="task.text"
            class="task-item"
        >
            <TaskList 
                :task="task"
            />
            <DeleteTask 
                :taskIndex="i"
            />
        </div>
    </div>
</template>

<script>
    import { TaskList } from '@/entities'
    import { DeleteTask } from '@/features'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            TaskList,
            DeleteTask
        },

        computed: {
            ...mapGetters([
                'task/getTasks'
            ]),

            getTasks () {
                return this['task/getTasks']
            }
        },
    }
</script>