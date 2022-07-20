import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
import FilterBlocksDiv from './filters-blocks';

class AllResetBtn extends FilterBlocksDiv {
  private local: LocalStor;
  private sortedCards: SortedCard;
  constructor() {
    super();
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  public btnResBrand() {
    this.filter.className = 'filter__reset';
    this.filterBtn.className = 'filter__btn--reset-all';
    const btn: HTMLButtonElement = document.createElement('button');
    btn.className = 'btn btn__reset-all';
    btn.id = 'all_reset';
    btn.innerText = 'reset settings';
    btn.addEventListener('click', () => {
      this.local.set('YearsBrand', ['2019', '2020', '2021', '2022']);
      this.local.set('BtnBrandColor', []);
      this.local.set('BasketCount', []);
      this.local.set('FavoriteProduct', []);
      this.local.set('PopularCheckBox', []);
      this.local.set('BtnBrandRam', []);
      this.local.set('ListValue', [1]);
      this.local.set('ValueInput', []);
      this.local.set('UiSliderCallbackStock', [1, 16.5]);
      this.local.set('StockBrands', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
      this.local.set('CountSortedGet', ['5', '6']);
      this.local.set('UiSliderCallbackYears', [2019, 2022.5]);
      this.local.set('BtnBrandId', []);
      this.local.set('BtnInputId', []);

      setTimeout(() => {
        this.sortedCards.newSortArr();
        location.reload();
      }, 200);
    });
    this.filterBtn.append(btn);
    this.filter.append(this.filterBtn);
    return this.filter;
  }
}
export default AllResetBtn;
