import React, { useState } from 'react'
import './AddNewProduct.css'
import { AiOutlineDollarCircle } from "react-icons/ai";


export default function AddNewProduct({ getAllProducts }) {

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewDiscount, setProductNewDiscount] = useState("");
  const [productNewCategory, setProductNewCategory] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewImg1, setProductNewImg1] = useState("");
  const [productNewImg2, setProductNewImg2] = useState("");
  const [productNewImg3, setProductNewImg3] = useState("");
  const [productNewImg4, setProductNewImg4] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors1, setProductNewColors1] = useState('');
  const [productNewColors2, setProductNewColors2] = useState('');
  const [productNewColors3, setProductNewColors3] = useState('');
  const [productNewSize1, setProductNewSize1] = useState('');
  const [productNewSize2, setProductNewSize2] = useState('');
  const [productNewSize3, setProductNewSize3] = useState('');
  const [productNewSize4, setProductNewSize4] = useState('');
  const [productNewKey1, setProductNewKey1] = useState('');
  const [productNewKey2, setProductNewKey2] = useState('');
  const [productNewKey3, setProductNewKey3] = useState('');
  const [productNewKey4, setProductNewKey4] = useState('');
  const [productNewproperty1, setProductproperty1] = useState('');
  const [productNewproperty2, setProductproperty2] = useState('');
  const [productNewproperty3, setProductproperty3] = useState('');
  const [productNewproperty4, setProductproperty4] = useState('');

  const newProductsInfos = {
    title: productNewTitle,
    price: productNewPrice,
    count: productNewCount,
    img: productNewImg,
    allImg: [
      { id: 1, img: productNewImg1 },
      { id: 2, img: productNewImg2 },
      { id: 3, img: productNewImg3 },
      { id: 4, img: productNewImg4 }
    ],
    size: [
      `${productNewSize1}`,
      `${productNewSize2}`,
      `${productNewSize3}`,
      `${productNewSize4}`
    ],
    color: [
      `${productNewColors1}`,
      `${productNewColors2}`,
      `${productNewColors3}`
    ],
    feature: [
      { title: `${productNewKey1}`, text: `${productNewproperty1}` },
      { title: `${productNewKey2}`, text: `${productNewproperty2}` },
      { title: `${productNewKey3}`, text: `${productNewproperty3}` },
      { title: `${productNewKey4}`, text: `${productNewproperty4}` }
    ],
    category:productNewCategory,
    stock:productNewCount,
    discount:productNewDiscount,
    score: productNewPopularity,
    sale: productNewSale,
  }

    const addNewProduct = (event) => {

        event.preventDefault()

        fetch(`http://localhost:4000/products`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProductsInfos)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                getAllProducts()
            })
    }

    return (
        <div className='products-main'>
            <h1 className='products-title'>افزودن محصول جدید</h1>

            <form action="#" className='add-products-form'>
                <div className="edit-proructs-container">
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="عنوان جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewTitle}
                            onChange={(event) => setProductNewTitle(event.target.value)}
                        />
                    </div>

                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="قیمت  تفیف خورده جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewPrice}
                            onChange={(event) => setProductNewPrice(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="مقدار درصد تخفیف جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewDiscount}
                            onChange={(event) => setProductNewDiscount(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="موجودی جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewCount}
                            onChange={(event) => setProductNewCount(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <select
                            className="edit-product-input"
                            value={productNewCategory}
                            onChange={(event) => setProductNewCategory(event.target.value)}
                        >
                            <option value="">دسته بندی جدید-{productNewCategory}</option>
                            <option value="h-halfBoot">h-halfBoot</option>
                            <option value="woman-autumnwcoat">woman-autumnwcoat</option>
                            <option value="man-autumnHody">"man-autumnHody"</option>
                            <option value="woman-Scarf">woman-Scarf</option>
                            <option value="woman-poliwer">woman-poliwer</option>
                            <option value="mam-poliwer">mam-poliwer</option>
                            <option value="a-Accessory">a-Accessory</option>
                            <option value="c-child">c-child</option>
                            <option value="man-coat">man-coat</option>
                            <option value="man-tshert">man-tshert</option>
                            <option value="man-Menclothes">man-Menclothes</option>
                        </select>
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="آدرس کاور اصلی جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewImg}
                            onChange={(event) => setProductNewImg(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="آدرس کاور1 جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewImg1}
                            onChange={(event) => setProductNewImg1(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="آدرس کاور2 جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewImg2}
                            onChange={(event) => setProductNewImg2(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="آدرس کاور3 جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewImg3}
                            onChange={(event) => setProductNewImg3(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="آدرس کاور جدید4 را وارد کنید"
                            className="edit-product-input"
                            value={productNewImg4}
                            onChange={(event) => setProductNewImg4(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="محبوبیت جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewPopularity}
                            onChange={(event) => setProductNewPopularity(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="میزان فروش جدید را وارد کنید"
                            className="edit-product-input"
                            value={productNewSale}
                            onChange={(event) => setProductNewSale(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder=" رنگ  اول   را وارد کنید"
                            className="edit-product-input"
                            value={productNewColors1}
                            onChange={(event) => setProductNewColors1(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder=" رنگ  دوم   را وارد کنید"
                            className="edit-product-input"
                            value={productNewColors2}
                            onChange={(event) => setProductNewColors2(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder=" رنگ  سوم   را وارد کنید"
                            className="edit-product-input"
                            value={productNewColors3}
                            onChange={(event) => setProductNewColors3(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder="سایز اول  را وارد کنید"
                            className="edit-product-input"
                            value={productNewSize1}
                            onChange={(event) => setProductNewSize1(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder=" سایز دوم   را وارد کنید"
                            className="edit-product-input"
                            value={productNewSize2}
                            onChange={(event) => setProductNewSize2(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder=" سایز  سوم   را وارد کنید"
                            className="edit-product-input"
                            value={productNewSize3}
                            onChange={(event) => setProductNewSize3(event.target.value)}
                        />
                    </div>
                    <div className="edit-proructs-form-group">
                        <span>
                            <AiOutlineDollarCircle />
                        </span>
                        <input
                            type="text"
                            placeholder=" سایز  چهارم   را وارد کنید"
                            className="edit-product-input"
                            value={productNewSize4}
                            onChange={(event) => setProductNewSize4(event.target.value)}
                        />
                    </div>
                    <div className="two-input">
                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="عنوان ویژگی اول را وارد کنید"
                                className="edit-product-input"
                                value={productNewKey1}
                                onChange={(event) => setProductNewKey1(event.target.value)}
                            />
                        </div>

                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="ویژگی اول را وارد کنید"
                                className="edit-product-input"
                                value={productNewproperty1}
                                onChange={(event) => setProductproperty1(event.target.value)}
                            />
                        </div>

                    </div>
                    <div className="two-input">
                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="عنوان ویژگی دوم را وارد کنید"
                                className="edit-product-input"
                                value={productNewKey2}
                                onChange={(event) => setProductNewKey2(event.target.value)}
                            />
                        </div>

                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="ویژگی دوم را وارد کنید"
                                className="edit-product-input"
                                value={productNewproperty2}
                                onChange={(event) => setProductproperty2(event.target.value)}
                            />
                        </div>

                    </div>
                    <div className="two-input">
                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="عنوان ویژگی سوم را وارد کنید"
                                className="edit-product-input"
                                value={productNewKey3}
                                onChange={(event) => setProductNewKey3(event.target.value)}
                            />
                        </div>

                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="ویژگی سوم را وارد کنید"
                                className="edit-product-input"
                                value={productNewproperty3}
                                onChange={(event) => setProductproperty3(event.target.value)}
                            />
                        </div>

                    </div>
                    <div className="two-input">
                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="عنوان ویژگی چهارم را وارد کنید"
                                className="edit-product-input"
                                value={productNewKey4}
                                onChange={(event) => setProductNewKey4(event.target.value)}
                            />
                        </div>

                        <div >
                            <span>
                                <AiOutlineDollarCircle />
                            </span>
                            <input
                                type="text"
                                placeholder="ویژگی چهارم را وارد کنید"
                                className="edit-product-input"
                                value={productNewproperty4}
                                onChange={(event) => setProductproperty4(event.target.value)}
                            />
                        </div>

                    </div>
                </div>
                <button className='add-products-submit' onClick={addNewProduct}>ثبت محصول</button>
            </form>
        </div>
    )
}
