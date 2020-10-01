import Vue from 'vue'

export default {
  getFilms ( { commit }) {
    Vue.axios.get('https://swapi.dev/api/films').then((response) => {
      // TODO: check status
      console.log(response.data)
      commit('setFilms', response.data)
    })
  }
}
