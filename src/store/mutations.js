const mutations = {
  addcount(state, payload) {
    payload.count += 1
  },
  addcart(state, payload) {
    payload.count = 1
    payload.check = true
    state.cartlist.push(payload)
  },
}
export default mutations
