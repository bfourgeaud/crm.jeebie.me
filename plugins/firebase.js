import database from '~/api/database'

export default (ctx, inject) => {
  const firebaseDB = database(ctx.$fire)

  const dbs = {
    clients: firebaseDB('clients'),
    invoices: firebaseDB('invoices')
  }

  inject('dbs', dbs)
}
