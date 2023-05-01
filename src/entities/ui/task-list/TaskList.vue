<template>
    <div>
        <div>
            {{ task.text }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
                required: true
            }
        }
    }
</script>