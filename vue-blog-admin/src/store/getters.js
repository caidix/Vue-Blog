const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  introduce: state => state.user.introduce,
  sidebar: state => state.sidebar.sidebar,
}

export default getters;