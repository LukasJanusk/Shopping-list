<script setup lang="ts">
import ListItem from './ListItem.vue';
import { currentList } from './store';
</script>

<template>
  <div id="shopping-list-container">
    <div>
      <span v-if="currentList.completed.length > 0">Completed:</span>
      <ul class="completed-list">
        <ListItem
          class="completed-item"
          v-for="(listItem, index) in currentList.completed"
          :key="index"
          :item="listItem"
          @toggle="currentList.uncheckItem(listItem)"
          @delete="currentList.removeItem(listItem.id)"
        />
      </ul>
    </div>
    <div>
      <span v-if="currentList.items.length > 0">Active:</span>
      <ul class="active-list">
        <ListItem
          class="active-item"
          v-for="(listItem, index) in currentList.items"
          :key="index"
          :item="listItem"
          @toggle="currentList.checkItem(listItem)"
          @delete="currentList.removeItem(listItem.id)"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.completed-item {
  text-decoration: line-through;
}
.completed-list {
  justify-self: flex-start;
}
.active-list {
  justify-self: flex-end;
}
#shopping-list-container {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
