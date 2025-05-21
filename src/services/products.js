const products = [
  {
    id: 1,
    title: "Air Jordan 1",
    description: "Clássico dos clássicos com cano alto.",
    price: 999.99,
    image: require("../../assets/jordan1.png"),
  },
  {
    id: 2,
    title: "Air Jordan 3",
    description: "Design icônico com tecnologia Nike Air.",
    price: 1049.99,
    image: require("../../assets/jordan2.png"),
  },
  {
    id: 3,
    title: "Air Jordan 4",
    description: "Estilo urbano com conforto garantido.",
    price: 1099.99,
    image: require("../../assets/jordan3.png"),
  },
  {
    id: 4,
    title: "Air Jordan 5",
    description: "Inspiração nos aviões de caça da Segunda Guerra.",
    price: 1149.99,
    image: require("../../assets/jordan4.png"),
  },
  {
    id: 5,
    title: "Air Jordan 6",
    description: "O modelo usado por Jordan na primeira final.",
    price: 1199.99,
    image: require("../../assets/jordan5.png"),
  },
  {
    id: 6,
    title: "Air Jordan 11",
    description: "O favorito de muitos, com acabamento brilhante.",
    price: 1299.99,
    image: require("../../assets/jordan6.png"),
  },
  {
    id: 7,
    title: "Air Jordan 13",
    description: "Design felino, inspirado na pantera negra.",
    price: 1349.99,
    image: require("../../assets/jordan7.png"),
  },
];

export default {
  getAll: async () => products,
};
