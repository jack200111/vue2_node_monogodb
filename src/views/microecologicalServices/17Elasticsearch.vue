<template>
  <page-template
    href="https://www.bilibili.com/video/BV1hh411D7sb/?vd_source=e5c794e2336a5e151705e650e8935cd1"
    title="Elasticsearch"
    subtitle="ElasticSearch教程入门到精通（基于ELK技术栈elasticsearch"
    :courses="courses"
  />
</template>

<script>
import myData from '@/data/17Elasticsearch.js'
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
