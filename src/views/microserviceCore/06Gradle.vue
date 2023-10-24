<template>
  <page-template
    href="https://www.bilibili.com/video/BV12q4y147e4/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Gradle"
    subtitle="Gradle教程入门到进阶（从gradle安装到项目实战）"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/06Gradle.js'
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
