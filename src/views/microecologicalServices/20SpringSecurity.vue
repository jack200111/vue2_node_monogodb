<template>
  <page-template
    href="https://www.bilibili.com/video/BV15a411A7kP/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="SpringSecurity"
    subtitle="SpringSecurity框架教程（spring security源码剖析从入门到精通）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/20SpringSecurity.js'
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
