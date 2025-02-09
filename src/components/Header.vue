<script setup lang="ts"></script>
<template>
  <div id="header-container">
    <div class="header-item" id="current"><h1>Current</h1></div>
    <div class="header-item" id="all"><h1>ShoppingLists</h1></div>
  </div>
</template>
<style lang="css" scoped>
#header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 20%;
  justify-self: flex-start;
  background-color: beige;
}
.header-item {
  text-align: center;
  padding-top: 5px;
  border-radius: 10px;
  background-color: antiquewhite;
}
</style>
