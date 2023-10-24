<template>
  <page-template
    href="https://www.bilibili.com/video/BV1kR4y1b7Qc/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Spring6"
    subtitle="2023新版Spring零基础入门到进阶，一套搞定spring6全套"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/07Spring6.js'
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
