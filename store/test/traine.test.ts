import btnColors from '../src/components/viev/filter-blocks/filter-color';
import updateCards from '../src/components/controller/products/product';
import arr from '../src/laptop.json';

/**
 * @jest-environment jsdom
 */
const btnColor = new btnColors();
const updateLink = new updateCards();

const card = {
  brand: 'Asus',
  model: 'Asus TUF Gaming',
  number: 10,
  ram: '16',
  color: 'black',
  image: 'asus_tuf_gaming_f15_fx507zm-hn001.jpg',
  year: '2022',
  description: [
    {
      'Screen diagonal': '15.6',
    },
    {
      'Screen resolution': '1920x1080 (FullHD)',
    },

    {
      'Processor model': 'Intel Core i7-12700H',
    },
    {
      'The amount of RAM': '16 GB',
    },
    {
      SSD: '1024 GB',
    },
    {
      'Video card model': 'NVIDIA GeForce RTX 3060',
    },
    {
      'Operating system': 'DOS',
    },
    {
      Cost: '$2343.0',
    },
  ],
};

describe('View and create color btns are in the block', () => {
  it('Create btns', () => {
    expect(btnColor.filterColor()).toMatchSnapshot();
  });
  it('Add class to the block btns', () => {
    expect(btnColor.filterColor().classList.contains('filter__btn--color'));
  });
  it('Add class to btns', () => {
    expect(btnColor.filterColor().classList.contains('btn__color'));
  });
});

describe('Create cards', () => {
  it('Create cards', () => {
    expect(updateLink.create()).toMatchSnapshot();
  });
});

describe('Array length and keys are in object', () => {
  it('length array = 21', () => {
    expect(arr).toHaveLength(21);
  });
  it('There are keys in object', () => {
    expect(arr).toContainEqual(card);
  });
});
