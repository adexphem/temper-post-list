import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mockStore = new Vuex.Store({
  state: {
    posts: [
      { title: 'Post Title 1', id: 1 },
      { title: 'Post Title 2', id: 2 },
      { title: 'Post Title 3', id: 3 },
      { title: 'Post Title 4', id: 4 },
      { title: 'Post Title 5', id: 5 }
    ],
    actions: [],
    lastActionIndex: -1
  },
  getters: {
    posts: state => state.posts,
    actions: state => state.actions
  },
  actions: {
    fetchPosts: jest.fn()
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addAction(state, action) {
      state.lastActionIndex = -1;
      state.actions.push(action);
    },
    setLastActionIndex(state, index) {
      state.lastActionIndex = index;
    }
  },
});
