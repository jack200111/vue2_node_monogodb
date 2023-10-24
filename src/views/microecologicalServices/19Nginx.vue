<template>
  <page-template
    href="https://www.bilibili.com/video/BV1yS4y1N76R/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Nginx"
    subtitle="Nginx教程（亿级流量nginx架构设计）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/19Nginx.js'
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
