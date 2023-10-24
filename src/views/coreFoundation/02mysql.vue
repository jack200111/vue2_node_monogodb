<template>
  <page-template
    href="https://www.bilibili.com/video/BV1iq4y1u7vj/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="MySQL数据库"
    subtitle="MySQL数据库入门到大牛，mysql安装到优化，百科全书级"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/02mysql.js'
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
