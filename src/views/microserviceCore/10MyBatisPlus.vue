<template>
  <page-template
    href="https://www.bilibili.com/video/BV12R4y157Be/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="MyBatisPlus"
    subtitle="MyBatisPlus教程（一套玩转mybatis-plus）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/10MyBatisPlus.js'
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
