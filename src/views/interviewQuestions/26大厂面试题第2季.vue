<template>
  <page-template
    href="https://www.bilibili.com/video/https://www.bilibili.com/video/BV18b411M7xz//?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="大厂面试题第2季"
    subtitle="Java大厂面试题第2季，面试必刷，跳槽大厂神器"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/26大厂面试题第2季.js'
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
