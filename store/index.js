import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state() {
		return {
			bikes: [],
			favorites: [],
			cart: [],
		}
	},
	mutations: {
		FETCH_BIKES(state, bikes) {
			state.bikes = bikes
		},
		ADD_TO_FAVORITES(state, bikeId) {
			const bike = state.bikes.find(bike => bike.id === bikeId)
			const index = state.favorites.findIndex(fav => fav.id === bikeId)
			if (index !== -1) {
				state.favorites.splice(index, 1)
			} else {
				state.favorites.push(bike)
			}
		},
		ADD_TO_CART(state, bike) {
			state.cart.push(bike)
		},
	},
	actions: {
		async fetchBikes({ commit }) {
			const response = await axios.get('http://localhost:3001/bikes')
			commit('FETCH_BIKES', response.data)
		},
		addToFavorites({ commit }, bikeId) {
			commit('ADD_TO_FAVORITES', bikeId)
		},
		addToCart({ commit }, bike) {
			commit('ADD_TO_CART', bike)
		},
	},
})
