export const task = {
    namespaced: true,
    state: {
        tasks: [
            { id: 1, text: 'task 1' },
            { id: 2, text: 'task 2' },
            { id: 3, text: 'task 3' },
            { id: 4, text: 'task 4' },
        ]
    },

    actions: {
        addTask ({commit}, value ) {
            commit('addTaskSuccess', value)
        },

        deleteTask ({commit}, index) {
            commit('deleteTaskSucces', index)
        }
    },

    mutations: {
        addTaskSuccess (state, payload) {
            state.tasks.push({
                id: 5,
                text: payload
            })
        },

        deleteTaskSucces (state, payload) {
            state.tasks.splice(payload, 1)
        }
    },

    getters: {
        getTasks (state) {
            return state.tasks
        }
    }
}