<template>
  <page-template
    href="https://www.bilibili.com/video/BV1Hy4y1B78T/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="大厂面试题第3季"
    subtitle="Java大厂面试题第3季，跳槽必刷题目+必扫技术盲点"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/27大厂面试题第3季.js'
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
