<script setup lang="ts">
import { ref } from 'vue';
import { Item } from './classes';
import { currentList } from './store';
import NumberToggle from './NumberToggle.vue';

const name = ref('');
const quantity = ref(1);
const handleSubmit = () => {
  const item = new Item(name.value, quantity.value);
  currentList.value.addItem(item);
  name.value = '';
  quantity.value = 1;
};
</script>

<template>
  <div class="form-container">
    <form id="list-item-form" form @submit.prevent="handleSubmit">
      <div id="form-items-container">
        <div>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="bannnana"
            required
            v-model="name"
          />
        </div>
        <div id="quantity">
          <span>{{ quantity }}</span>
          <NumberToggle
            @add="quantity += 1"
            @minus="if (quantity >= 2) quantity -= 1;"
          ></NumberToggle>
        </div>
      </div>
      <button id="submit-button" type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped>
#form-items-container {
  font-size: 50px;
  display: flex;
  flex-direction: row;
}
#name {
  height: 50px;
  font-size: 40px;
}
#list-item-form button {
  font-size: 50px;
  height: 100px;
}
.form-container {
  border: 1px solid red;
  height: 800px;
}
#submit-button {
  width: 100%;
}
</style>
