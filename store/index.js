import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state() {
		return {
			bikes: [],
		}
	},
	mutations: {
		FETCH_BIKES(state, bikes) {
			state.bikes = bikes
		},
	},
	actions: {
		async fetchBikes({ commit }) {
			const response = await axios.get('http://localhost:3001/bikes')
			commit('FETCH_BIKES', response.data)
		},
	},
})
