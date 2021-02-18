const apiAddr = 'https://photon.komoot.io/api/'

export default $axios => ({
  searchAddr (query, opts = {}, ok, err) {
    const search = `?q=${query}`
    let options = ''
    for (const [key, value] of Object.entries(opts)) {
      options += `&${key}=${value}`
    }

    return $axios.$get(`${apiAddr}${search}${options}`).then(ok).catch(err)
  },
  searchGeo (lon, lat, ok, err) {
    return $axios.$get(`${apiAddr}?lon=${lon}&lat=${lat}`).then(ok).catch(err)
  }
})
