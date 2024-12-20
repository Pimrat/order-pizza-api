const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("123456");
const userData = [
  {
    firstName: 'test2',
    lastName: 'test2',
    username: 'test2',
    email: 'test2@email.com',
    password,
    isAdmin: false
  },
  {
    firstName: 'test3',
    lastName: 'test3',
    username: 'test3',
    email: 'test3@email.com',
    password,
    isAdmin: true
  }
];

const productData = [
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733633781/pepperoni-pizza_bt98xt.jpg',
    productType: 'PIZZA',
    productName: 'Pepperoni',
    productDetail: 'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733633779/margherita-pizza_ps1shc.jpg',
    productType: 'PIZZA',
    productName: 'Margherita',
    productDetail: 'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733633778/meat-pizza_fhudi8.jpg',
    productType: 'PIZZA',
    productName: 'Meat',
    productDetail: 'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733646490/California-Style_mbmai8.jpg',
    productType: 'PIZZA',
    productName: 'California',
    productDetail: 'Feta cheese, marinated artichoke hearts, red bell pepper, red onion.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733646490/cheese-pizza-375_mzuupc.jpg',
    productType: 'PIZZA',
    productName: 'Cheese',
    productDetail: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733663929/Detroit-Style-pizza_t1hjga.jpg',
    productType: 'PIZZA',
    productName: 'Detroit',
    productDetail: 'Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733664389/Genovese_nb1a7z.jpg',
    productType: 'PIZZA',
    productName: 'Genovese',
    productDetail: 'Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.',
    price: 450
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733665198/Lemon_Ricotta_Pasta_lcxz3c.jpg',
    productType: 'OTHERS',
    productName: 'Lemon Ricotta Pasta',
    productDetail: 'Spaghetti, ricotta, lemon, red pepper flakes, parmesan.',
    price: 290
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733665380/Lasagna_Bolognese_cmijmm.jpg',
    productType: 'OTHERS',
    productName: 'Lasagna Bolognese',
    productDetail: 'Ground italian sausage, ground beef, bolognese sauce, lasagna noodles.',
    price: 290
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733665634/Pasta_Puttanesca_kiskzg.jpg',
    productType: 'OTHERS',
    productName: 'Pasta Puttanesca',
    productDetail: 'Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.',
    price: 290
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733665800/Baked_Spaghetti_sxt5xy.jpg',
    productType: 'OTHERS',
    productName: 'Baked Spaghetti',
    productDetail: 'Ground beef, spaghetti, olive oil, crushed tomatoes, basil.',
    price: 390
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733666345/coca-cola-classic_nuh8kz.jpg',
    productType: 'SOFTDRINKS',
    productName: 'Coca-Cola',
    productDetail: 'Soda',
    price: 39
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733666347/LiptonGreenTea_cbin5c.jpg',
    productType: 'SOFTDRINKS',
    productName: 'Lipton Green Tea',
    productDetail: 'Tea',
    price: 49
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733666346/RedBull_vunpkf.jpg',
    productType: 'SOFTDRINKS',
    productName: 'Red Bull',
    productDetail: 'Energy drinks',
    price: 49
  },
  {
    productImage: 'https://res.cloudinary.com/dveghxfyv/image/upload/v1733666346/PureWater_ghul6k.jpg',
    productType: 'SOFTDRINKS',
    productName: 'Pure Water',
    productDetail: 'Water',
    price: 29.00
  }
];

const run = async () => {
  await prisma.user.createMany({ data: userData });
  await prisma.product.createMany({ data: productData });
};

run();
