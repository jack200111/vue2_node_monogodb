<template>
  <page-template
    href="https://www.bilibili.com/video/BV1VP4y1c7j7/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="MyBatis"
    subtitle="MyBatis零基础入门教程（细致全面，快速上手）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/09MyBatis.js'
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
