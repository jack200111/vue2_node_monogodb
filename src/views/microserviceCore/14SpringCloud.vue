<template>
  <page-template
    href="https://www.bilibili.com/video/BV18E411x7eT/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="SpringCloud"
    subtitle="SpringCloud框架开发教程(SpringCloudAlibaba微服务分布式架构)"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/14SpringCloud.js'
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
