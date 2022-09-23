const mutations = {
  createPost (state, post) {
    state.posts.push(post)
  },
  deletePost (state, id) {
    state.posts = state.posts.filter(post => post.id === id)
  }
}

export default mutations
