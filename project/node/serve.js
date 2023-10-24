// node请求
const express = require('express')
const app = express()
// 解决跨域
const cors = require('cors')
// 解决JSON
app.use(cors())
// post接收请求参数

app.get('/chat', async(req, res) => {
    const aValue = req.query.keyword
    res.setHeader("Content-Type", "text/event-stream")
    const { data } = await api.post(
        "/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: aValue }],
          stream: true
        //   max_tokens: 20
        },
        {
          responseType: "stream"
        }
      )
      data.pipe(res)
})
app.get('/all', async(req, res) => {
    const aValue = req.query.keyword
    const { data } = await api.post(
      "/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: aValue }]
        // max_tokens: 20,
      }
    )
    res.end(JSON.stringify(data))
})

const OPENAI_API_KEY = "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" // 替换为
const axios = require('axios')
const api = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    // "Content-Type": "application/json",
    Authorization: "Bearer " + OPENAI_API_KEY
  },
  proxy: {
    protocol: "http",
    host: "127.0.0.1",
    port: 7890
  }
})
// 启动服务器
const port = 5110
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
