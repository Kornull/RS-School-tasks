export class LocalStor {
  private localsetItem: string | null;
  private todos!: [];
  constructor() {
    this.localsetItem = localStorage.getItem('');
  }

  public set(name: string, lang: string[] | number[]) {
    localStorage.setItem(name, JSON.stringify(lang));
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
