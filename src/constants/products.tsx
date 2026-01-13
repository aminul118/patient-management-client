export type Product = {
  slug?: string;
  product_name: string;
  category: string;
  product_img: string;
};

export type SubCategory = {
  title: string;
  products: Product[];
};

export type ProductCategory = {
  id: number;
  title: string;
  products: Product[] | SubCategory[];
};

const productsData: ProductCategory[] = [
  {
    id: 1,
    title: "lift",
    products: [
      {
        title: "residence",
        products: [
          {
            slug: "hd-v002",
            product_name: "WBJX-K-02",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-02.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-03",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-03.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-04",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-04.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-05",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-05.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-06",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-06.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-07",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-07.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-08",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-08.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-09",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-09.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-10",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-10.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-11",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-11.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-12",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-12.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-13",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-13.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-14",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-14.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-15",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-15.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-16",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-16.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-17",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-17.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-18",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-18.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-19",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-19.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-20",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-20.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-21",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-21.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-22",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-22.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-23",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-23.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-24",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-24.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-25",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-25.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-26",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-26.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-27",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-27.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-28",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-28.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-29",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-29.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-30",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-30.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-31",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-31.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-32",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-32.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-33",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-33.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-34",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-34.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-35",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-35.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-36",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-36.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-37",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-37.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-38",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-38.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-39",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-39.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-40",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-40.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-41",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-41.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-42",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-42.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-43",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-43.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-44",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-44.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-45",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-45.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-46",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-46.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-47",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-47.png",
          },
        ],
      },
      {
        title: "corporate",
        products: [
          {
            slug: "hd-v002",
            product_name: "WBJX-K-42",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-k-42.png",
          },
        ],
      },
      {
        title: "hospital",
        products: [
          {
            slug: "hd-v002",
            product_name: "WBJX-K-42",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-y-01.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-42",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-y-02.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-K-42",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-y-03.png",
          },
        ],
      },
      {
        title: "capsole",
        products: [
          {
            slug: "hd-v002",
            product_name: "WBJX-G-02",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-02.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-G-03",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-03.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-G-04",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-04.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-G-05",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-05.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-G-06",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-06.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-G-07",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-07.png",
          },
          {
            slug: "hd-v002",
            product_name: "WBJX-G-08",
            category: "lift",
            product_img: "/assets/images/products/lifts/wbjx-g-08.png",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "genarator",
    products: [
      {
        product_name: "Genarator",
        category: "genarator",
        product_img: "/assets/images/products/controller.png",
      },
    ],
  },
  {
    id: 7,
    title: "substration",
    products: [
      {
        product_name: "Transformer",
        category: "substration",
        product_img: "/assets/images/products/substration/transformer.webp",
      },
      {
        product_name: "BOP Substation PMT Switching",
        category: "substration",
        product_img:
          "/assets/images/products/substration/BOP-Substation-PMT-Switching.jpg",
      },
      {
        product_name: "Grounding",
        category: "substration",
        product_img: "/assets/images/products/substration/grounding.jpg",
      },
      {
        product_name: "Substation EPC",
        category: "substration",
        product_img: "/assets/images/products/substration/substation-epc.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "hvac",
    products: [
      {
        product_name: "Water Cooled Chiller",
        category: "substration",
        product_img: "/assets/images/products/hbac/Air-Cooled-Chiller.jpg",
      },
      {
        product_name: "Heat Pump",
        category: "substration",
        product_img: "/assets/images/products/hbac/Heat-Pump.jpg",
      },
      {
        product_name: "Airside",
        category: "substration",
        product_img: "/assets/images/products/hbac/Airside.jpg",
      },
      {
        product_name: "Speciality Products",
        category: "substration",
        product_img: "/assets/images/products/hbac/Speciality-Products.jpg",
      },
      {
        product_name: "Light Commercial Range",
        category: "substration",
        product_img: "/assets/images/products/hbac/Light-Commercial-Range.jpg",
      },
      {
        product_name: "Light Commercial Range",
        category: "substration",
        product_img: "/assets/images/products/hbac/lg_multi_v5.png",
      },
    ],
  },
];

export default productsData;
