import maps from '~/api/maps'

export default (ctx, inject) => {
  const mapsApi = maps(ctx.$axios)
  inject('maps', mapsApi)
}
