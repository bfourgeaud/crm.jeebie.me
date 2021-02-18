import database from '~/api/database'

export default (ctx, inject) => {
  const firebaseDB = database(ctx.$fire)

  const dbs = {
    clients: firebaseDB('clients')
  }

  inject('dbs', dbs)
}
