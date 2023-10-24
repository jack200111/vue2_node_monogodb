import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:5109/admin/api' || '/admin/api'
  // baseURL: 'http://8.134.171.23:5109/admin/api'
})
http.interceptors.request.use((config) => {
  // Do something before request is sent
  // const token = this.$store.state.user.token
  // console.log('token', this.$store)
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })

    if (err.response.status === 401) {
      router.push('/login')
    }
  }

  return Promise.reject(err)
})

export default http
