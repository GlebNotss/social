import * as Vue from 'vue'
import { createStore } from 'vuex';
import { task } from '../../entities/index';
console.log(task)
export const store = createStore({
    modules: {
        task
    }
})