<template>
  <div @click="test">
    uploader
    <slot :data="data"> </slot>
    {{ $attrs['gender'] }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 'haha'
    }
  },
  model: {
    prop: 'fileList'
  },
  props: {
    fileList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    test() {
      console.log('test', this.fileList)
    }
  }
}
</script>
