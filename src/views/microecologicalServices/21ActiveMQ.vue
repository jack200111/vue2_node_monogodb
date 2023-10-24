<template>
  <page-template
    href="https://www.bilibili.com/video/BV164411G7aB/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="ActiveMQ"
    subtitle="ActiveMQ教程(MQ消息中间件快速入门)"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/21ActiveMQ.js'
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
