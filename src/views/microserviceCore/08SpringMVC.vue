<template>
  <page-template
    href="https://www.bilibili.com/video/BV1Ry4y1574R/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="SpringMVC"
    subtitle="JSpringMVC教程丨一套快速上手spring mvc"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/08SpringMVC.js'
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
