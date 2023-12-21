import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Bán Hambuger',
        price: 20000,
        tags: ['Hambuger', 'Bánh', 'FastFood'],
        favorite: false,
        stars: 0,
        imageUrl: '/assets/images/foods/food-2.jpg',
        origins: ['Ý'],
        cookTime:'10-20',
      },
      {
        id: '2',
        name: 'Mỳ  Spageti bò viên',
        price: 35000,
        tags: ['Mỳ', 'Phở'],
        favorite: true,
        stars: 3,
        imageUrl: '/assets/images/foods/food-4.jpeg',
        origins: ['Ý'],
        cookTime: '20-30'
      },
      {
        id: '3',
        name: 'Set gà rán 1 đùi',
        price: 50000,
        tags: ['Gà', 'FastFood'],
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/foods/food-6.jpg',
        origins: ['Mỹ'],
        cookTime: '15-20'
      },
      {
        id: '4',
        name: 'Mẹt gà luộc 4 người',
        price: 280000,
        tags: ['Gà', 'FastFood'],
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/foods/food-7.jpg',
        origins: ['Việt Nam'],
        cookTime: '45-60'
      },
      {
        id: '5',
        name: 'Bún riêu cua',
        price: 30000,
        tags: ['Phở', 'Bún'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/foods/food-8.jpg',
        origins: ['Việt Nam'],
        cookTime: '20-30'
      },
      {
        id: '6',
        name: 'Bánh mỳ kẹp thịt',
        price: 25000,
        tags: ['Bánh mỳ', 'FastFood'],
        favorite: true,
        stars: 4,
        imageUrl: '/assets/images/foods/food-9.jpg',
        origins: ['Việt Nam'],
        cookTime: '5-10'
      },
      {
        id: '7',
        name: 'Bún thịt heo',
        price: 40000,
        tags: ['Phở', 'Bún'],
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/foods/food-10.jpg',
        origins: ['Việt Nam'],
        cookTime: '20-30'
      },
      {
        id: '8',
        name: 'Phở bò',
        price: 40000,
        tags: ['Phở', 'Bún'],
        favorite: true,
        stars: 3,
        imageUrl: '/assets/images/foods/food-11.jpg',
        origins: ['Việt Nam'],
        cookTime: '15-20'
      }
];