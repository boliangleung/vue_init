import axios from 'axios'

try {
  // http://localhost:50001/yzshis baseURL= 绝对地址的
  axios.defaults.baseURL = '/yzshis'
} catch (e) {
  console.log(e)
}

function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(respone => {
        resolve(respone.data)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
/* 数据获取 */

const getClinc = params => fetch('/clinic/info', params)
const chatSessionList = params => fetch('/chat/session/list', params)

export { fetch, chatSessionList, getClinc }
