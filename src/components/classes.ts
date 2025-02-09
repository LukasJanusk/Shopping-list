export class Item {
  id: string;
  name: string;
  quantity: number;

  constructor(name: string, quantity: number) {
    this.id = new Date().toISOString();
    this.name = name;
    this.quantity = quantity;
  }
}

export class List {
  id: string;
  items: Item[];
  completed: Item[];
  modified: string;

  constructor(items: Item[] = []) {
    this.id = crypto.randomUUID();
    this.items = items;
    this.completed = [];
    this.modified = new Date().toISOString();
  }
  addItem(item: Item) {
    this.items.push(item);
  }
  removeItem(id: string) {
    console.log('remove is called');
    this.items = this.items.filter(i => i.id != id);
  }
  checkItem(item: Item) {
    this.completed.push(item);
    this.removeItem(item.id);
  }
  uncheckItem(item: Item) {
    this.addItem(item);
    this.completed = this.completed.filter(i => i.id != item.id);
  }
  static loadLists(): List[] {
    try {
      const stored = localStorage.getItem('shopping-lists');
      if (!stored) return [];
      const lists: List[] = JSON.parse(stored);

      return lists;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error occured loading shopping list: ${error.message}`);
      }
      return [];
    }
  }
  static saveLists(lists: List[]): boolean {
    try {
      const json = JSON.stringify(lists);
      localStorage.setItem('shopping-lists', json);
      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error occured saving shopping lists: ${error.message}`);
      }
      return false;
    }
  }
}
