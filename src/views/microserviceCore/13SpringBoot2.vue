<template>
  <page-template
    href="https://www.bilibili.com/video/BV19K4y1L7MT/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="SpringBoot2"
    subtitle="SpringBoot2零基础入门教程"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/13SpringBoot2.js'
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
