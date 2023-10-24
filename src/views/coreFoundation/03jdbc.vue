<template>
  <page-template
    href="https://www.bilibili.com/video/BV1sK411B71e/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="JDBC"
    subtitle="JDBC实战教程（2023最新版jdbc，JDK17+MySQL8）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/03jdbc.js'
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
