<template>
  <div id="app2" class="container">
    <div class="nav">
      <ul>
        <li @mouseover="showGroup(-1)">
          <!-- <a :href="href" target="_blank"> -->
          {{ title }}
          <!-- </a> -->
        </li>
        <li v-for="(group, index) in groups" :key="index" @mouseover="showGroup(index)">
          {{ group }}
        </li>
      </ul>
    </div>
    <div class="course-list">
      <div v-if="currentGroupIndex == -1">
        <ul>
          <li class="course-item"><strong>总时长: </strong> {{ totalTime }} </li>
          <li class="course-item display"><strong>已学: </strong>
            <input v-model="myObject.learnedValue">小时
            <el-button class="course-item-left" size="small" @click="decreaseHours">-</el-button>
            <el-button size="small" @click="increaseHours">+</el-button>
            <el-button type="primary" size="small" @click="save">确定</el-button>
          </li>
          <li class="course-item"><strong>B站链接: </strong>
            <a :href="href" target="_blank">{{ subtitle }}
            </a>
            <button class="goBtn course-item-left">前往B站学习</button>
          </li>
        </ul>
      </div>
      <ul>
        <li v-for="(course, index) in displayedCourses" :key="index" class="course-item">
          <strong>{{ course.time }}</strong> - {{ course.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mixins from '@/mixins/index'

export default {
  name: 'PageTemplate',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    courses: {
      type: Array,
      required: true
    }
}
}
</script>
