const actions = {
  async createPost (context, post) {
    context.commit('createPost', post)
  },
  async deletePost (context, id) {
    context.commit('deletePost', id)
  }
}

export default actions
