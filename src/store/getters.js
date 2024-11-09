const getters = {
  // 取app模块属性
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 取user模块属性
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
// getters便捷访问
export default getters
