import { set } from '@/utils/vuex'

const defaultInvoice = () => {
  return {
    company: null,
    client: null,
    title: '',
    articles: [],
    dateOverdue: '',
    paymentMethod: '',
    total: {
      totalHT: 0,
      tva: 0,
      totalTTC: 0
    },
    conditions: 'Taux de pénalités exigibles de plein droit et sans rappel préalable en cas de paiement à une date ultérieure à celle figurant sur la facture : 10,00% , Indemnité forfaitaire pour frais de recouvrement en cas de paiement à une date ultérieure à celle figurant sur la facture : 40,00€. Si les frais de recouvrement sont supérieurs à ce montant, une indemnisation complémentaire sera due, sur présentation des justificatifs.'
  }
}

export const state = defaultInvoice()

export const mutations = {
  RESET_INVOICE: (state) => { Object.assign(state, defaultInvoice()) },
  SET_CLIENT: set('client'),
  SET_COMPANY: set('company'),
  SET_TITLE: set('title'),
  SET_DATE_OVER: set('dateOverdue'),
  SET_PAYMENT: set('paymentMethod'),
  SET_CONDITIONS: set('conditions'),
  SET_ARTICLES (state, articles) {
    state.total.totalHT = articles.reduce((a, b) => a + (b.totalPrice || 0), 0)
    state.total.tva = 0
    state.total.totalTTC = state.total.totalHT - (state.total.totalHT * (state.total.tva || 0) / 100)
    state.articles = articles
  }
}

export const actions = {
  addArticle ({ state, commit }, article) {
    const newArticles = [...state.articles, article]
    commit('SET_ARTICLES', newArticles)
  }
}
