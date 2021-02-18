export default $fire => collection => ({
  index (found, err) {
    const clients = []
    $fire.firestore.collection(collection).get().then((snapshot) => {
      snapshot.forEach((doc) => {
        clients.push({ id: doc.id, ...doc.data() })
      })
      found(clients)
    }).catch((error) => {
      err(error)
    })
  },

  create (payload, ok, err) {
    $fire.firestore.collection(collection).add(payload).then(ok).catch(err)
  },

  find (id, ok, err) {
    const docRef = $fire.firestore.collection(collection).doc(id)
    docRef.get().then((doc) => {
      if (doc.exists) {
        ok({ id: doc.id, ...doc.data() })
      } else {
        err('No such document!')
      }
    }).catch((error) => {
      err(error)
    })
  },

  update (payload, id, ok, err) {
    const docRef = $fire.firestore.collection(collection).doc(id)
    delete payload.id
    docRef.update(payload).then(ok).catch(err)
  },

  delete (id, ok, err) {
    const docRef = $fire.firestore.collection(collection).doc(id)
    docRef.delete().then(ok).catch(err)
  }
})
