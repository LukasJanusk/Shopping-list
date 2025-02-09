<script setup lang="ts">
const emits = defineEmits<{
  (event: 'add'): void;
  (event: 'minus'): void;
}>();
</script>

<template>
  <div id="container">
    <img src="../assets/minus.svg" @click="emits('minus')" />
    <img src="../assets/plus.svg" @click="emits('add')" />
  </div>
</template>
<style lang="css" scoped>
#container {
  display: flex;
  flex-direction: row;
}
img {
  border-radius: 10rem;
  border: 5px solid red;
  padding-left: 5px;
  height: 100px;
}
</style>
