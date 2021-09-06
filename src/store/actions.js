const actions = {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let product = context.state.cartlist.find(item => (item.iid === payload.iid))
      if (product) {
        context.commit('addcount', product)
        resolve('同样商品+1~')
      }else {
        context.commit('addcart', payload)
        resolve('添加成功~')
      }
    })

  },
}

export default actions
