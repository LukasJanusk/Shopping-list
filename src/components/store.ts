import { ref, watch } from 'vue';
import { List } from './classes';

export const lists = ref<List[]>(List.loadLists());
export const currentList = ref<List>(new List());
watch(
  currentList,
  update => {
    console.log(update);
  },
  { deep: true }
);
watch(
  lists,
  newList => {
    List.saveLists(newList);
  },
  { deep: true }
);
