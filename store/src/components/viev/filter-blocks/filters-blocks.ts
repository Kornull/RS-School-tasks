import { ConstructorDiv, Laptop } from '../../types';

class FilterBlocksDiv implements ConstructorDiv {
  public filter: HTMLDivElement;
  public fragment: DocumentFragment;
  public filterSearch: HTMLDivElement;
  public filterBtn: HTMLDivElement;
  public btnDescr: HTMLDivElement;
  public brandArr: string[];
  public colorArr: string[];
  public memoryRam: string[];
  public sortAll: string[];
  public keyname: string[];
  public brandCount: string[];
  public sortArr: Laptop[];
  public copySortLeng: Laptop[];
  public availabilityCheck: number[];
  public copySortAll: string[];
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
