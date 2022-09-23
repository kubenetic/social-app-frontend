import getters from '@/store/postStore/getters'
import mutations from '@/store/postStore/mutations'
import actions from '@/store/postStore/actions'

export default {
  namespaced: true,
  state: () => ({
    posts: [
      {
        id: 1,
        user: 'teszt.elek',
        date: '2022-09-21T20:00:00',
        post: 'Hello, World!',
        comments: [
          {
            id: 3,
            user: 'Nostradamus',
            date: '2022-09-22T09:11:30',
            post: 'Nice quote!'
          },
          {
            id: 4,
            user: 'Shakespeare',
            date: '2022-09-22T08:15:45',
            post: 'Really nice quote!'
          }
        ]
      },
      {
        id: 2,
        user: 'cserepes.virag',
        date: '2022-09-20T22:00:00',
        post: 'Hello, Világ!'
      }
    ]
  }),

  getters,
  mutations,
  actions
}
