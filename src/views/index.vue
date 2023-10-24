<template>
  <div class="boxPadding">
    <h1>GPT3.5</h1>
    <!-- <el-button @click="getAllApi">备用</el-button> -->
    <div style="display: flex;justify-content: center">
      <div>
        <!-- <div ref="box" style="width: 800px"></div> -->
        <!-- element-loading-text="加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 0.6)" -->
        <div
          v-loading="loading"
          style="width: 52vw; line-height: 2.5; padding-bottom: 58px;">
          <div v-html="innerHTML" />
        </div>
        <div
          style="
            position: fixed;
            z-index: 1;
            bottom: 1vh;
            left: 29vw;
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
              width: 54vw;
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
            style="margin-left: 5px"
            @click="getApi"
          />
        </div>
      </div>
    </div>
    <div style="position: fixed;bottom: 0 ;background-color: #fff;height: 8vh;  width:100vw;">
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
      const str2 = str1.replace(/(： )/g, ":  <br>")
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
      const res = new EventSource(
        `http://8.134.171.23:5109/chat?keyword=${this.tip}`
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
        }
      }
    },
    testHtml() {
      var a = `快乐是一种积极的情绪状态，通常与愉悦、满足和幸福感相关。它是一种主观感觉，人们通常会在实现某种愿望、享受美好的经历或与他人建立良好的人际关系时感受到快乐。

快乐的作用有很多方面： 1. 促进心理健康：快乐能够减轻压力和焦虑，增强自尊心和自信心，提高幸福感和满足感。它与心理健康之间存在着密切的关联。

2. 提高生活质量：快乐使人们更加积极、乐观和有活力，有更多的动力去追求自己的目标和梦想。它能够增加生活的乐趣，让人们更加享受生活的过程。

3. 促进身体健康：快乐对身体健康有积极影响。它可以增强免疫力，降低患病的风险，改善睡眠质量，提高心脏健康，并有助于延长寿命。

4. 加强人际关系：快乐能够增进人与人之间的亲密感和信任感，促进正面的人际交往。它能够加强社交联系，提高人际关系的质量。

5. 增强创造力和思维能力：快乐能够激发人们的创造力和思维能力，提高思维的灵活性和创新性。它有助于人们更加积极地思考问题并找到解决方案。`
      // 正则表达式模式，用于匹配特定格式的内容
      var pattern = a.replace(/(\d+\.\s[^\n]+：)/g, "<strong>$1</strong>")
      var pattern1 = pattern.replace(/([。]\n\n)/g, "。<br><br>")
      var pattern2 = pattern1.replace(/([：]\n\n)/g, ": <br><br>")
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
