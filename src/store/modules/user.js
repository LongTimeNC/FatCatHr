import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
// 存放数据
const state = {
  // 从缓存中读取初始值
  token: getToken(),
  // 存储用户基本资料的状态
  userInfo: {}
}

// 修改数据
const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步到缓存
    setToken(token)
  },
  removeToken() {
    // 删除vuex的token
    state.token = null
    removeToken()
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}

// 异步操作
const actions = {
  // context上下文，传入参数
  async login(context, data) {
    console.log(data)
    // 调用登录接口 返回一个token
    const token = await login(data)
    console.log(token)
    context.commit('setToken', token)
  },
  // 获取用户基本资料
  async getUserInfo(context) {
    const result = await getUserInfo()
    context.commit('userInfo', result)
  }
}
export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions
}
