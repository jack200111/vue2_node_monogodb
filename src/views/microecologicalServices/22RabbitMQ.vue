<template>
  <page-template
    href="https://www.bilibili.com/video/BV1cb4y1o7zz/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="RabbitMQ"
    subtitle="RabbitMQ教程丨快速掌握MQ消息中间件rabbitmq"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/22RabbitMQ.js'
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
