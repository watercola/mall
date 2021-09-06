const getters = {
  cartlenght(state) {
    return state.cartlist.length
  },
  cartlist(state) {
    return state.cartlist
  }
}
export default getters
