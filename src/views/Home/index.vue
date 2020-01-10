<template>
  <section>
    <Uploader v-model="fileList" gender="female">
      <div slot-scope="user">
        <li> {{ user.data }} </li>
      </div>
    </Uploader>
    <button @click="change">点我</button>
    <div>{{'1578304181000'|fulltime}}</div>
  </section>
</template>
<script>
import Uploader from '@/components/uploader'
export default {
  data() {
    return {
      fileList: [{ a: 'a' }],
      singleName: '',
    }
  },
  components: {
    Uploader,
  },
  mounted() {
    console.log('process.env.NODE_ENV', process.env)
  },
  methods: {
    change() {
      const { fileList } = this
      fileList[0].a = 'test'
      this.singleName = 'haha'
    }
  },
  watch: {
    fileList(val, oldVal) {
      console.log('newValue', val)
      console.log('oldValue', oldVal)
    },

    singleName(val, oldVal) {
      console.log('newValue', val)
      console.log('oldValue', oldVal)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @include color(green);
}
</style>

