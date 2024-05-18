import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
