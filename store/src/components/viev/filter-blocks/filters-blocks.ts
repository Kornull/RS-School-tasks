import { ConstructorDiv, Laptop } from '../../types';

class FilterBlocksDiv implements ConstructorDiv {
  filter: HTMLDivElement;
  fragment: DocumentFragment;
  filterSearch: HTMLDivElement;
  filterBtn: HTMLDivElement;
  btnDescr: HTMLDivElement;

  brandArr: string[];
  colorArr: string[];
  memoryRam: string[];
  sortAll: string[];
  keyname: string[];
  brandCount: string[];

  sortArr: Laptop[];
  copySortLeng: Laptop[];
  availabilityCheck: number[];
  copySortAll: string[];
  constructor() {
    this.filter = document.createElement('div');
    this.fragment = document.createDocumentFragment();
    this.filterSearch = document.createElement('div');
    this.filterBtn = document.createElement('div');
    this.btnDescr = document.createElement('div');
    this.brandArr = [];
    this.sortArr = [];
    this.colorArr = [];
    this.memoryRam = [];

    this.sortAll = [];
    this.copySortAll = [];
    this.copySortLeng = [];
    this.keyname = [];
    this.brandCount = [];
    this.availabilityCheck = [];
  }
}

export default FilterBlocksDiv;
