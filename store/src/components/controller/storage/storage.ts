export class LocalStor {
  localsetItem: string | null;
  todos!: [];
  constructor() {
    this.localsetItem = localStorage.getItem('');
  }

  set(name: string, lang: string[] | number[]) {
    localStorage.setItem(name, JSON.stringify(lang));
  }
  get(name: string): string[] {
    this.localsetItem = localStorage.getItem(name);
    if (this.localsetItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localsetItem);
    }
    return this.todos;
  }
}
