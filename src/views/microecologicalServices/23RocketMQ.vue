<template>
  <page-template
    href="https://www.bilibili.com/video/BV1cf4y157sz/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="RocketMQ"
    subtitle="RocketMQ教程丨深度掌握MQ消息中间件"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/23RocketMQ.js'
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
