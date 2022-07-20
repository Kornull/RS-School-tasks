export class LocalStor {
  private localsetItem: string | null;
  private todos!: [];
  constructor() {
    this.localsetItem = localStorage.getItem('');
  }

  public set(name: string, value: string[] | number[]) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  public get(name: string): string[] {
    this.localsetItem = localStorage.getItem(name);
    if (this.localsetItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localsetItem);
    }
    return this.todos;
  }
}
