import type { Products, Product, Store } from "../types/api-ripley.ts"; // Los tipos de datos del api, productos es un array de product

const products: Products = [
  {
    brand: "BATA",
    title: "producto1",
    description: "descripcion1",
    discount: "17% de ahorro en",
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fd865aa547d3a4907932f1ff3f635e6e8?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4f4b4cdd5b3816727be8c04f972df490",
    price: "S/ 10",
    link: "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
    stores: [
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logo_Ripley.svg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://sf.ezoiccdn.com/ezoimgfmt/www.vectorlogo.es/wp-content/uploads/2024/02/logo-vector-real-plaza-horizontal.jpg?ezimgfmt=rs:630x320/rscb1/ngcb1/notWebP",
        price: "S/ 10",
      },
    ],
  },
  {
    brand: "BATA",
    title: "producto2",
    description: "descripcion1",
    discount: "17% de ahorro en",
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fd865aa547d3a4907932f1ff3f635e6e8?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4f4b4cdd5b3816727be8c04f972df490",
    price: "S/ 10",
    link: "https://simple.ripley.com.pe/zapatos-para-nina-bubblegummers-azul-pmp00002006699?sein=zapatos",
    stores: [
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
    ],
  },
  {
    brand: "BATA",
    title: "producto3",
    description: "descripcion1",
    discount: "17% de ahorro en",
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fd865aa547d3a4907932f1ff3f635e6e8?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4f4b4cdd5b3816727be8c04f972df490",
    price: "S/ 10",
    link: "https://simple.ripley.com.pe/zapatos-para-nina-bubblegummers-azul-pmp00002006699?sein=zapatos",
    stores: [
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
    ],
  },
  {
    brand: "BATA",
    title: "producto4",
    description: "descripcion1",
    discount: "17% de ahorro en",
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fd865aa547d3a4907932f1ff3f635e6e8?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4f4b4cdd5b3816727be8c04f972df490",
    price: "S/ 10",
    link: "https://simple.ripley.com.pe/zapatos-para-nina-bubblegummers-azul-pmp00002006699?sein=zapatos",
    stores: [
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
    ],
  },
  {
    brand: "BATA",
    title: "producto5",
    description: "descripcion1",
    discount: "17% de ahorro en",
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fd865aa547d3a4907932f1ff3f635e6e8?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4f4b4cdd5b3816727be8c04f972df490",
    price: "S/ 10",
    link: "https://simple.ripley.com.pe/zapatos-para-nina-bubblegummers-azul-pmp00002006699?sein=zapatos",
    stores: [
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
    ],
  },
  {
    brand: "BATA",
    title: "producto6",
    description: "descripcion1",
    discount: "17% de ahorro en",
    image:
      "https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Fd865aa547d3a4907932f1ff3f635e6e8?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4f4b4cdd5b3816727be8c04f972df490",
    price: "S/ 10",
    link: "https://simple.ripley.com.pe/zapatos-para-nina-bubblegummers-azul-pmp00002006699?sein=zapatos",
    stores: [
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
      {
        name: "falabella",
        image:
          "https://brandemia.org/contenido/subidas/2021/08/11-falabella-com-1200x670.jpg",
        price: "S/ 10",
      },
    ],
  },
];

export default products;
