import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductsBox from '../components/productsBox/productsBox';
import { useParams } from 'react-router-dom';
import Footer from './../components/footer/footer.js';


export default function Product() {
  const [allproducts, setAllProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);
  let Params = useParams()


  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(Object.entries(  [
          {
            "id": "11001",
            "img": "images/product/bot.webp",
            "title": " نیم بوت مردانه ",
            "price": 1453000,
            "score": 4.1,
            "category": "h-halfBoot",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/bot.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/bot.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "11003",
            "img": "images/product/wbot1.webp",
            "title": "نیم بوت زنانه",
            "price": 920000,
            "score": 4,
            "category": "h-halfBoot",
            "discount": 10,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wbot1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/wbot1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "title": "بوت زنانه",
            "price": 5190000,
            "count": 8,
            "img": "images/product/wbot2.webp",
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wbot2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/wbot2.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ],
            "size": [
              "S",
              "M",
              "L",
              "xl"
            ],
            "color": [
              "red",
              "green",
              "blue"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "category": "h-halfBoot",
            "stock": 8,
            "discount": 12,
            "score": 4.8,
            "sale": 5190000,
            "id": "11004"
          },
          {
            "id": "11005",
            "img": "images/product/wcot1.webp",
            "title": "کت چرم زنانه",
            "price": 18950000,
            "score": 4.5,
            "category": "woman-autumnwcoat",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wcot1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/wcot1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "title": " کت  زنانه الیانا",
            "price": 888000,
            "count": 8,
            "img": "images/product/wcot2.webp",
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wcot2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ],
            "size": [
              "S",
              "M",
              "L",
              "xl"
            ],
            "color": [
              "red",
              "green",
              "blue"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "category": "woman-autumnwcoat",
            "stock": 8,
            "discount": 5,
            "score": 4.4,
            "sale": 888000,
            "id": "11006"
          },
          {
            "id": "11007",
            "img": "images/product/wpalto1.webp",
            "title": "پالتو تدی زنانه",
            "price": 751000,
            "score": 3.2,
            "category": "woman-autumnwcoat",
            "discount": 5,
            "color": [
              "red",
              "green",
              "black"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wpalto1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "title": "هودی جهانگرد مردانه",
            "price": 8950000,
            "count": 8,
            "img": "images/product/hody1.webp",
            "allImg": [
              {
                "id": 1,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ],
            "size": [
              "S",
              "M",
              "L",
              "xl"
            ],
            "color": [
              "red",
              "green",
              "blue"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "category": "man-autumnHody",
            "stock": 8,
            "discount": 5,
            "score": 4.5,
            "sale": 8950000,
            "id": "11008"
          },
          {
            "id": "11009",
            "img": "images/product/hody3.webp",
            "title": "هودی مردانه",
            "price": 930000,
            "score": 4.1,
            "category": "man-autumnHody",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/hody3.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110010",
            "img": "images/product/whody1.webp",
            "title": "هودی زنانه",
            "price": 560000,
            "score": 4.2,
            "category": "woman-autumnHody",
            "discount": 11,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/whody1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110011",
            "img": "images/product/bag1.webp",
            "title": "شلوار بگ",
            "price": 190000,
            "score": 4,
            "category": "man-Menclothes",
            "discount": 8,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/bag1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110012",
            "img": "images/product/manto-2.webp",
            "title": " مانتو زنانه",
            "price": 850000,
            "score": 3,
            "category": "woman-autumnHody",
            "discount": 15,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/manto-2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110013",
            "img": "images/product/shal1.webp",
            "title": "شال زنانه ",
            "price": 1250000,
            "score": 4.5,
            "category": "woman-Scarf",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/shal1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110014",
            "img": "images/product/shal2.webp",
            "title": "شال زنانه ",
            "price": 920000,
            "score": 4,
            "category": "woman-Scarf",
            "discount": 10,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/shal2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/shal2.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110015",
            "img": "images/product/rosary1.webp",
            "title": "روسری زنانه ",
            "price": 920000,
            "score": 4,
            "category": "woman-Scarf",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/rosary1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110016",
            "img": "images/product/t-2.webp",
            "title": " تیشرت ",
            "price": 630000,
            "score": 5,
            "category": "man-tshert",
            "discount": 15,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/t-2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110017",
            "img": "images/product/t-4.webp",
            "title": " تیشرت ",
            "price": 453000,
            "score": 2,
            "category": "man-tshert",
            "discount": 15
          },
          {
            "id": "110018",
            "img": "images/product/pafer-3.webp",
            "title": " پافر مردانه",
            "price": 360000,
            "score": 5,
            "category": "man-autumnHody",
            "discount": 15,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/pafer-3.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110019",
            "img": "images/product/cot1.webp",
            "title": "کت چرم مردانه",
            "price": 45000000,
            "score": 4.9,
            "category": "man-coat",
            "discount": 5,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/cot1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110020",
            "img": "images/product/capshan1.webp",
            "title": "کاپشن مردانه",
            "price": 1720000,
            "score": 4.1,
            "category": "man-coat",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/capshan1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110021",
            "img": "images/product/barany1.webp",
            "title": "بارانی مردانه",
            "price": 2640000,
            "score": 3.9,
            "category": "man-coat",
            "discount": 15,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/barany1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110022",
            "img": "images/product/child1.webp",
            "title": " سویشرت بچگانه",
            "price": 372000,
            "score": 4.1,
            "category": "c-child",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/child1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110023",
            "img": "images/product/child2.webp",
            "title": "شلوار اسلش دخترانه ",
            "price": 242000,
            "score": 4,
            "category": "c-child",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/child2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110024",
            "img": "images/product/child3.webp",
            "title": "کاپشن بچگانه",
            "price": 1120000,
            "score": 4.3,
            "category": "c-child",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/child3.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110025",
            "img": "images/product/wpoliver1.webp",
            "title": "پلیور زنانه",
            "price": 250000,
            "score": 4.8,
            "category": "woman-poliwer",
            "discount": 5,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wpoliver1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110026",
            "img": "images/product/wpoliwer2.webp",
            "title": "پلیور زنانه",
            "price": 480000,
            "score": 4.5,
            "category": "woman-poliwer",
            "discount": 0,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/wpoliwer2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110027",
            "img": "images/product/poliwer1.webp",
            "title": "پلیور مردانه",
            "price": 852000,
            "score": 4.7,
            "category": "mam-poliwer",
            "discount": 20,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/poliwer1.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110028",
            "img": "images/product/poliwer2.webp",
            "title": "پلیور مردانه",
            "price": 562000,
            "score": 4.5,
            "category": "mam-poliwer",
            "discount": 13,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/poliwer2.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110029",
            "img": "images/product/f67361a7ff5c3640ce973dcc43842db3b33fe112_1614766331.webp",
            "title": "ساعت مچی مردانه",
            "price": 2562000,
            "score": 4.5,
            "category": "a-Accessory",
            "discount": 18,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/f67361a7ff5c3640ce973dcc43842db3b33fe112_1614766331.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "id": "110030",
            "img": "images/product/da7ad22de62c5a7e7f46bd97cb8c749b4d4ce60a_1720440996.webp",
            "title": "عینک آفتابی زنانه",
            "price": 92562000,
            "score": 4.5,
            "category": "a-Accessory",
            "discount": 20,
            "color": [
              "red",
              "green",
              "blue"
            ],
            "stock": 8,
            "size": [
              "S",
              "M",
              "L",
              "xl",
              "2xl"
            ],
            "feature": [
              {
                "title": "جنس",
                "text": "پلی استر"
              },
              {
                "title": "طرح",
                "text": "ساده"
              },
              {
                "title": "تنخور",
                "text": "معمولی"
              },
              {
                "title": "کیفیت",
                "text": "خوب"
              }
            ],
            "allImg": [
              {
                "id": 1,
                "img": "images/product/da7ad22de62c5a7e7f46bd97cb8c749b4d4ce60a_1720440996.webp"
              },
              {
                "id": 2,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 3,
                "img": "images/product/hody1.webp"
              },
              {
                "id": 4,
                "img": "images/product/hody1.webp"
              }
            ]
          },
          {
            "title": "کاپشن چرم ترک",
            "price": "3256000",
            "count": "4",
            "img": "images/product/capshencharm1.webp",
            "allImg": [
              {
                "id": 1,
                "img": "images/product/capshencharm1.webp"
              },
              {
                "id": 2,
                "img": "images/product/capshencharm2.webp"
              },
              {
                "id": 3,
                "img": "images/product/capshencharm3.webp"
              },
              {
                "id": 4,
                "img": "images/product/capshencharm2.webp"
              }
            ],
            "size": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "color": [
              "red",
              "blue",
              "black"
            ],
            "feature": [
              {
                "title": "دوخت",
                "text": "ترکیه"
              },
              {
                "title": "جنس",
                "text": "چرم"
              },
              {
                "title": "قابلیت",
                "text": "ضد آب"
              },
              {
                "title": "تنخور",
                "text": "عالی"
              }
            ],
            "category": "man-coat",
            "stock": "4",
            "discount": "10",
            "score": "4.6",
            "sale": "3256000",
            "id": "b0d7"
          }
        ],));
      });
  }, []);


  useEffect(() => {
    Params.postID === 'all' ? (
      setFilterProducts(allproducts)
    ) : Params.postID === 'offs' ? (
      setFilterProducts(allproducts.filter(item => {
        return item[1].discount > 0
      }))

    ) : Params.postID === 'man' || Params.postID === 'woman' ? (
      setFilterProducts(allproducts.filter(item => {
        const firstRegex = /.+(?=-)/;
        const firstMatch = item[1].category.match(firstRegex);

        if (firstMatch == Params.postID) {
          return item[1].category.includes(firstMatch)
        }
      }))
    ) : (setFilterProducts(allproducts.filter(item => {
      const firstRegex = /.+(?=-)/;
      const secondRegex = /(?<=-).+/;
      const firstLinkMatch = Params.postID.match(firstRegex);
      const secondLinkMatch = Params.postID.match(secondRegex);
      const firstproductMatch = item[1].category.match(firstRegex);
      const secondproductMatch = item[1].category.match(secondRegex);
      if (firstLinkMatch[0] === firstproductMatch[0] && secondLinkMatch[0] === secondproductMatch[0]) {
        return item[1]
      }

    })))
  }, [allproducts])

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  },);


  return (
    <>
      <div className='px-1 md:px-4 overflow-hidden'>
        <div className='w-[100%]  mt-8 flex align-middle justify-center'>
          <div className='w-64 md:w-[30%] h-10  md:hover:w-[45%] transition-all  duration-500 px-4 borde bg-white shadow-xl flex justify-between align-middle rounded-lg'>
            <input type="text" placeholder='دنبال چی میگردی؟' className='w-[80%] bg-white text-xs md:text-lg text-gray-900 outline-none font-DanaDemiBold ' />
            <IconButton aria-label="search" >
              <SearchIcon color='primary' />
            </IconButton>
          </div>
        </div>
        <div className='w-full h-[2px] bg-gray-300  mt-5 md:mt-8'></div>

        <div className=' w-full px-3 pl-6 md:px-15 2xl:px-20 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-14 mt-14'>
          {filterproducts.map((product) => (
            <ProductsBox {...product[1]} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
