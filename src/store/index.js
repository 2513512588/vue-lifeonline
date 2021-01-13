import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: 0,
        eventList: [],
        dateUtilTimer: null
    },
    mutations: {
        loginComplete (state) {
            state.login = 1
        },
        pushEvent(state,fn){
            state.eventList.push(fn)
        },
        startDateUtilTimer(state){
            if (!state.dateUtilTimer){
                state.dateUtilTimer = setInterval(function (){
                    state.eventList.forEach(async (item)=>{
                        setTimeout(()=>{
                            item && item()
                        },0)
                    })
                },30000)
            }
        }
    }
})

export default store
