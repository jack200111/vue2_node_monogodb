<template>
  <page-template
    href="https://www.bilibili.com/video/BV1N24y1y7a1/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="MySQL面试题"
    subtitle="MySQL数据库面试题宝典，mysql面试必考！mysql工作必用！"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/25MySQL面试题.js'
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
