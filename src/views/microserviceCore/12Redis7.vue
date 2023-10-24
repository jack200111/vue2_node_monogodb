<template>
  <page-template
    href="https://www.bilibili.com/video/BV13R4y1v7sP/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Redis7"
    subtitle="Redis零基础到进阶，最强redis7教程，阳哥亲自带练"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/12Redis7.js'
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
