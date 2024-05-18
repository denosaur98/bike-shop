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
		ADD_TO_CART_IN_BIKE_CARD(state, bike) {
			state.cart.push({
				cartItemId: state.cart.length + 1,
				id: bike.id,
				brand: bike.brand,
				model: bike.model,
				color: bike.color,
				year: bike.year,
				price: bike.price,
				photo: bike.photo[0],
				amount: bike.amount,
				sum: bike.price,
			})
		},
		ADD_TO_FAVORITES_IN_BIKE_CARD(state, bikeId) {
			const bike = state.bikes.find(bike => bike.id === bikeId)
			const index = state.favorites.findIndex(fav => fav.id === bikeId)
			if (index !== -1) {
				state.favorites.splice(index, 1)
			} else {
				state.favorites.push(bike)
			}
		},
		ADD_TO_CART_IN_BIKE_PAGE(state, bike) {
			state.cart.push(bike)
		},
		ADD_TO_FAVORITES_IN_BIKE_PAGE(state, bikeId) {
			const index = state.favorites.findIndex(bike => bike === bikeId)
			if (index !== -1) {
				state.favorites.splice(index, 1)
			} else {
				state.favorites.push(bikeId)
			}
		},
	},
	actions: {
		async fetchBikes({ commit }) {
			const response = await axios.get('http://localhost:3001/bikes')
			commit('FETCH_BIKES', response.data)
		},
	},
})
