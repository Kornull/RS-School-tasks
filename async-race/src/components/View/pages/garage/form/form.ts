import './_form.scss';

export const formGarage = <HTMLElement>(<unknown>`
  <form class="form">
    <input type="text" value="" placeholder="name car" id="car-name" name="name" class="form__name">
    <input type="color" id="car-color" name="color" value="#e66465">
    <div class="form__btns">
    <button type="button" class="btn btn__create-car" id="one-car">Create</button>

    </div>
    <input type="text" value="" placeholder="name car" id="car-name__update" name="name"  class="form__name">
    <input type="color" id="car-color__update" name="color" value="#e66465">
    <div class="form__btns">
    <button type="button" class="btn btn__update-car" id="update-car" disabled="disabled">Update</button>
    </div>
    <div class="form__btn-racing--cars">
    <button type="button" class="btn btn__race-all--car" id="all-race">start racing</button>
    <button type="button" class="btn btn__reset-all--car" id="all-reset">reset racing</button>
    <button type="button" class="btn btn__create-all--car" id="create-cars">create cars</button>
    </div>
    <div class="page">
    <div class="page__text"><h1 id="page-count-cars">Cars(<span></span>)</h1></div>
    <div class="page__text"><h1 id="page-title">#PAGE <span>1</span></h1></div>
    <div class="page__btns">
    <button type="button" class="page__btn btn btn__left" id="run-left" disabled="disabled">❰</button>
    <button type="button" class="page__btn btn btn__right" id="run-right">❱</button>
    </div>
    </div>
</form>
  `);
