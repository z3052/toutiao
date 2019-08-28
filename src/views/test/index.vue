<template>
  <div class='container'>
    <com-a>
      <template v-slot:content="scope">con1 {{scope.abc}}</template>
      <div slot="footer">foot1</div>
    </com-a>
    <hr>
    <com-a>
      <div slot="content">con2</div>
      <div slot="footer">foot2</div>
    </com-a>
    <hr>
    <com-a></com-a>
  </div>
</template>

<script>
import ComA from '@/components/com-a'
export default {
  components: { ComA }
}
</script>

<style scoped lang='less'></style>
