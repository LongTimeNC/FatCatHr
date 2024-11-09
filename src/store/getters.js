const getters = {
  // 取app模块属性
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 取user模块属性
  token: state => state.user.token,
  userId: state => state.user.userInfo.userId,
  avatar: state => state.user.userInfo.staffPhoto,
  name: state => state.user.userInfo.username
}
// getters便捷访问
export default getters
