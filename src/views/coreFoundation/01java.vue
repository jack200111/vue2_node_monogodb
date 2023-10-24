<template>
  <page-template
    href="https://www.bilibili.com/video/BV1PY411e7J6/?p=107&spm_id_from=pageDriver&vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Java零基础"
    subtitle="尚硅谷Java零基础全套视频教程(宋红康2023版，java入门自学必备)"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/01java.js'
import pageTemplate from '@/components/pageTemplate/index'

export default {
  components: {
    pageTemplate
  },
  data() {
    return {
      courses: myData
    }
  }
}
</script>
