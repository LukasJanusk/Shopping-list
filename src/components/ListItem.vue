<script setup lang="ts">
import { Item } from './classes';
import DeleteButton from './DeleteButton.vue';

const props = defineProps<{
  item: Item;
}>();
const emits = defineEmits<{
  (event: 'delete', id: string): void;
  (event: 'toggle', id: string): void;
}>();
</script>

<template>
  <div class="list-item-container">
    <li class="list-item" @click="emits('toggle', item.id)">
      {{ props.item.name }} x{{ props.item.quantity }}
    </li>
    <DeleteButton @click="emits('delete', item.id)"></DeleteButton>
  </div>
</template>

<style scoped>
.list-item-container {
  display: flex;
  font-size: 35px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.list-item {
  flex-grow: 1;
  text-align: end;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2px;
  margin: 2px;
}
</style>
