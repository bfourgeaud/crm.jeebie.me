const COLLECTION = 'message'
const DOCUMENT = 'message'

export const firestore = {
  async write () {
    const messageRef = this.$fire.firestore.collection(COLLECTION).doc(DOCUMENT)
    try {
      await messageRef.set({
        message: 'Nuxt-Fire with Firestore rocks!'
      })
    } catch (e) {
      alert(e)
      return
    }
    alert('Success.')
  },

  async read () {
    const messageRef = this.$fire.firestore.collection(COLLECTION).doc(DOCUMENT)
    try {
      const messageDoc = await messageRef.get()
      alert(messageDoc.data().message)
    } catch (e) {
      alert(e)
    }
  }
}

export const storage = {
  async uploadFile () {
    const storageRef = this.$fire.storage.ref().child('message.txt')
    const message = 'Nuxt-Fire with Firebase Storage rocks!'
    try {
      const snapshot = await storageRef.putString(message)
      alert('File uploaded.')
      return snapshot
    } catch (e) {
      alert(e.message)
    }
  },

  async getFileUrl () {
    const storageRef = this.$fire.storage.ref().child('message.txt')
    try {
      const url = await storageRef.getDownloadURL()
      return url
    } catch (e) {
      alert(e.message)
    }
  }
}
