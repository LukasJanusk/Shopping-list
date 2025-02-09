<script setup lang="ts">
import { ref } from 'vue';
import ShoppingList from './components/ShoppingList.vue';
import ShoppingListForm from './components/ShoppingListForm.vue';
import AddButton from './components/AddButton.vue';
import Header from './components/Header.vue';
const add = ref(false);
</script>

<template>
  <Header></Header>
  <div><ShoppingList></ShoppingList></div>
  <div v-if="add" id="shopping-list-form">
    <ShoppingListForm></ShoppingListForm>
  </div>
  <AddButton id="add-button" @click="add = !add"></AddButton>
</template>

<style scoped>
#add-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
#shopping-list-form {
  position: absolute;
  bottom: 10%;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
