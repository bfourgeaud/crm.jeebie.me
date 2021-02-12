export default function ({ app, store, route, redirect }) {
  if (route.name === 'auth') { return }

  // Si l'utilisateur n'est pas authentifié
  if (!store.getters['auth/isLoggedIn']) {
    return redirect({ name: 'auth' })
  }
}
