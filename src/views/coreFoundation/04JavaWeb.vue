<template>
  <page-template
    href="https://www.bilibili.com/video/BV1AS4y177xJ/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="JavaWeb"
    subtitle="JavaWeb教程(全新技术栈,全程实战)"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/04JavaWeb.js'
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
