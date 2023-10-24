<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '添加' }}图片</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // props: {
  //   id: {
  //     type: String,
  //     default: ''
  //   }
  // },
  // props: ['id'],
  data() {
    return {
      model: {},
      id: this.$route.query.id
    }
  },
  created() {
    this.id && this.fetch()
  },
  methods: {
    /* eslint-disable no-console */
    afterUpload(res) {
      console.log(res, 1)
      this.$set(this.model, 'icon', res.url)
      // this.model.icon = res.url
    },
    async save() {
      if (this.id) {
        await this.$http.put(`rest/items/${this.id}`, this.model)
      } else {
        await this.$http.post("rest/items", this.model)
      }
      this.$router.push("/content/Item/ItemList")
      this.$message({
        type: "success",
        message: "保存成功"
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data
    }
  }
}
</script>

