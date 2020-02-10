const axios = {
  get: () => new Promise(res => res({ 
    data: { title: 'Mock with Jest' } ,
    posts: [],
    actions: [],
    lastActionIndex: -1
  }))
}

export default axios