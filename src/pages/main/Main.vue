<template>
    <div class="container">
        <div>
            <Toolbar />
        </div>
        <div>
            <TaskListWidgest />
        </div>
    </div>
</template>

<script>
    import { TaskListWidgest } from '@/widgets';
    import { Toolbar } from '@/widgets'

    export default {
        components: {
            TaskListWidgest,
            Toolbar
        }
    }
</script>