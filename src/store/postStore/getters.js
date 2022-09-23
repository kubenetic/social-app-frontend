const getters = {
  posts (state) {
    return state.posts
  },
  userPosts: (state) => (user) => {
    return state.posts.filter(post => post.user === user)
  }
}

export default getters
