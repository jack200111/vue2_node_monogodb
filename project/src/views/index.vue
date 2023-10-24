<template>
  <div class="boxPadding">
    <h1>GPT3.5</h1>
    <!-- <el-button @click="getAllApi">备用</el-button> -->
    <div style="display: flex;justify-content: center">
      <!-- <div ref="box" style="width: 800px"></div> -->
      <!-- element-loading-text="加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, 0.6)" -->
      <div
        v-loading="loading"
        style="width: 70vw; line-height: 2; padding-bottom: 58px;">
        <div v-html="innerHTML" />
      </div>
      <!-- left: 16vw; -->
      <div
        style="
          position: fixed;
          z-index: 1;
          bottom: 1vh;
          display: flex;
          align-items: center
        "
      >
        <!-- @input="checkEnter" -->
        <!-- placeholder="请输入提示词,回车或空白处或按钮搜索" -->
        <el-input
          v-model="tip"
          class="input"
          type="textarea"
          :autosize="{ minRows: 1.5, maxRows: 1.5 }"
          placeholder="请输入提示词,按钮搜索"
          resize="none"
          style="
            width: 66vw;
            padding-radio-bottom: 1rem;
            padding-radio-top: 1rem;
            padding-radio-left: 1rem;
            padding-radio-right: 3rem;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5)
            "
        />
        <!-- @change="checkEnter" -->
        <!-- <textarea v-model="tip" style="resize: none;" /> -->
        <!-- <el-button @click="getApi">确定</el-button> -->
        <el-button
          slot="append"
          icon="el-icon-search"
          style="margin-left: 2vw; box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5)"
          @click="testText"
        />
      </div>
    </div>
    <!-- f0f0f0 -->
    <div style="position: fixed;bottom: 0;left: 0;background-color: #fff;height: 8vh;  width:100vw;">
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tip: "",
      lastText: "",
      html: "",
      loading: false
    }
  },
  computed: {
    innerHTML() {
      const str = this.html
      const str1 = str.replace(/(\d+\.\s[^\n]+：)/g, "<strong>$1</strong>")
      const str2 = str1.replace(/(： )/g, ":  <br><br>")
      return str2
    }
  },
  created() {
    // this.fetch()
  },
  mounted() {
    this.testHtml()
  },
  methods: {
    testHtml2() {
      this.html = ''
      this.loading = true
      setTimeout(() => {
        this.html = '123'
        this.loading = false
      }, 2000)
    },
    checkEnter() {
      /* eslint-disable no-console */
        // 回车键按下，执行你的操作
       this.getApi()
    },
    // async getAllApi() {
    //   const out = this.$refs.box
    //   const res = await this.$http.get(`http://localhost:8004/all?keyword=${this.tip}`)
    //   /* eslint-disable no-console */
    //   out.innerHTML = ''
    //   out.innerHTML = res.data.choices[0].message.content
    // },
    async getApi2() {
      // const out = this.$refs.box
      const res = new EventSource(
        `http://localhost:8004/wait?keyword=${this.tip}`
      )
      // out.innerHTML = ''
      this.html = ""
      res.onmessage = (e) => {
        if (e.data === "[DONE]") {
          return res.close()
        }
        const data = JSON.parse(e.data)
        const { content = "" } = data.choices[0].delta
        console.log(content + "1")
        // out.innerHTML+=content
        this.html += content
        // if(content === '。'){ //content === '。' ||  content === '。' && this.lastText ===' '
        //   out.innerHTML+= '<br>'
        //   console.log('<br>')
        // } else if(content === '。\n\n'  || content === '：\n\n'){
        //   out.innerHTML+= '<br><br>'
        //   console.log('<br><br>')
        // }
        //  //content === '。' ||  content === '。' && this.lastText ===' '
        if (content === "。") {
          // out.innerHTML+= '<br>'
          // this.html+= '<li>'
          // console.log('<br>')
        } else if (content === "。\n\n" || content === "：\n\n") {
          // out.innerHTML+= '<br><br>'
          this.html += "<br><br>"
          // console.log('<br><br>')
        }
        // this.lastText = content
      }
    },
    async getApi() {
      let res = null
      try {
          res = new EventSource(
            `${process.env.VUE_APP_AI_URL}/chat?keyword=${this.tip}`
          )
          this.tip = ""
          this.html = ""
          this.loading = true
          res.onmessage = (e) => {
            if (this.loading) {
              this.loading = false
            }
            // 断开
            if (e.data === "[DONE]") {
              return res.close()
            }
            const data = JSON.parse(e.data)
            const { content = "" } = data.choices[0].delta
            // console.log(content+'1')
            this.html += content
            if (content === "。") {
              // console.log('<br>')
            } else if (content === "。\n\n") {
              this.html += "<br><br>"
            } else if (content === "：\n\n") {
              this.html += "<br><br>"
            } else if (content === "。\n") {
              this.html += "<br>"
            } else if (content === "：\n") {
              this.html += "<br>"
            }
          }
        } catch (error) {
          this.loading = false
          res.close()
          this.$message({
            type: 'error',
            message: '请求失败'
          })
          console.error(error)// 输出异常信息到控制台，以便进一步排查问题
        }
      },
    testHtml() {
      var a = `学习前端和后端开发，你需要掌握以下内容：<br><br>

前端开发：<br>

1. HTML：学习标记语言，用于构建网页结构。<br><br>

2. CSS：学习样式表语言，用于设计网页的外观和布局。<br><br>

3. JavaScript：学习脚本语言，用于实现网页的交互功能和动态效果。<br><br>

4. 前端框架：学习一些流行的前端框架，如React、Vue等，以提高开发效率。<br><br>

5. 前端工具：学习使用一些前端开发工具，如代码编辑器、版本控制工具、调试工具等。<br><br>

后端开发：<br>

1. 编程语言：学习一种后端编程语言，如Python、Java、C#等。<br><br>

2. 数据库：学习关系型数据库（如MySQL、PostgreSQL）或非关系型数据库（如MongoDB、Redis）的使用。<br><br>

3. 后端框架：学习一些后端框架或开发库，如Django、Spring、Express等，以提高开发效率。<br><br>

4. API设计与开发：学习如何设计和开发后端API，使前端与后端能够进行数据交互。<br><br>

5. 安全性和性能优化：学习如何保护后端API的安全性，并进行性能优化。<br><br>

此外，对于全栈开发（前端和后端都涉及）的学习，还需要了解web服务器的运行环境和部署、网络协议、数据结构与算法等相关知识。`
      var b = `幸福是一种主观感受，是指人们在心理、情感、精神和生活各个方面体验到满足、快乐和满意的状态。幸福是人们追求的目标之一，同时也是人生的重要指标和衡量标准。

幸福对人的作用有以下几个方面：

1. 健康：幸福对身体健康有积极影响。幸福的人往往有更好的免疫系统，更少患病，更快康复。心情愉悦有助于降低压力激素水平，提高免疫功能，从而促进身体的健康。

2. 心理健康：幸福的人更容易处理压力和挫折，拥有更高的抗压能力。幸福的心态有助于减少焦虑、抑郁和其他心理健康问题的发生。

3. 人际关系：幸福的人更容易建立和维持良好的人际关系。他们更具有社交能力，更愿意与他人分享快乐和帮助他人，从而产生更多的社会支持和亲密关系。

4. 工作和学习：幸福的人更具有创造性和创新能力，更容易获得成功和成就。他们在工作和学习中更加积极主动、专注和有效，从而取得更好的表现和成果。

5. 整体生活质量：幸福的人通常拥有更高的生活满意度和幸福感。他们更能够享受生活，更容易感到满足和幸福，更具有积极的生活态度和乐观的人生观。

总之，幸福对人有着积极的影响，不仅提升身心健康，还能促进良好的人际关系、工作学习成就以及整体生活质量。因此，保持积极的心态，追求幸福成为每个人的重要目标。`
      // 正则表达式模式，用于匹配特定格式的内容
      // var pattern = a.replace(/(\d+\.\s[^\n]+：)/g, "<strong>$1</strong>")
      // var pattern1 = a.replace(/([。]\n\n)/g, "。<br>")
      // var pattern2 = pattern1.replace(/([：]\n\n)/g, ": <br>")
      // var pattern3 = pattern2.replace(/[。](.+?)[。]/g, '<li>$1</li>')
      // var pattern3 = pattern2.replace(/[。](.+?)[。]/g, '<li>$1</li>')
      this.html = a
    },
    testText() {
      var a = `该功能暂未开发,敬请期待：<br><br>

祝你：<br><br>

1. <strong>可以追求自己想要的</strong>:  <br>健康, 家庭美满, 每天开开心心。<br><br>

2. <strong>体验自己想要的</strong>:  <br>一段甜蜜的爱情, 三五知己好友畅聊。

`
      // 正则表达式模式，用于匹配特定格式的内容
      var pattern = a.replace(/(\d+\.\s[^\n]+：)/g, "<strong>$1</strong>")
      var pattern1 = pattern.replace(/([。]\n\n)/g, "。<br>")
      var pattern2 = pattern1.replace(/([：]\n\n)/g, ": <br>")
      // var pattern3 = pattern2.replace(/[。](.+?)[。]/g, '<li>$1</li>')
      // var pattern3 = pattern2.replace(/[。](.+?)[。]/g, '<li>$1</li>')
      this.html = pattern2
    }
  }
}
</script>

<style scoped>
/* 隐藏垂直滚动条 */
::-webkit-scrollbar {
  width: 0
}

/* 隐藏水平滚动条 */
::-webkit-scrollbar {
  height: 0
}

/* 隐藏滚动条的轨道 */
::-webkit-scrollbar-track {
  display: none
}
/* .input{
  ::v-deep .el-textarea__inner {
    resize: none;
  }

  v-::deep {
    .el-textarea__inner {
      resize:none;
    }
  }
} */

</style>
