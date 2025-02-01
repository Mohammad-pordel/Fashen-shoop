import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "./../DetailsModal/DetailsModal";
import EditModal from "./../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ErrorBox from "../Errorbox/Errorbox";
import showToast from '../../../components/toastify/toastify';
import { ToastContainer } from 'react-toastify';
import supabase from "../../../supabase-client";




export default function ProductsTable({ getAllProducts, allProducts }) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});

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


  useEffect(() => {
    getAllProducts();

  }, []);

  useEffect(() => {
    console.log(allProducts);

  }, [allProducts])



  const deleteModalCancelAction = () => {
    console.log("مدال کنسل شد");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = async () => {
    console.log("مدال تایید شد");
    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', productID);

    if (error) {
      console.error('Error deleting product:', error);
    } else {
      console.log('Product deleted:', data);
      setIsShowDeleteModal(false);
      getAllProducts();
    }
  };

  const closeDetailsmodal = () => {
    setIsShowDetailsModal(false);
    console.log("مدال جزییات بسته شد");
  };

  const updateProductInfos = async (event) => {
    event.preventDefault();


    const productsNewInfos = {
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
      category: productNewCategory,
      stock: productNewCount,
      discount: productNewDiscount,
      score: productNewPopularity,
      sale: productNewSale,
    }

    const { data, error } = await supabase
      .from('products')
      .update(productsNewInfos)
      .eq('id', productID);
    if (error) {
      console.error('Error updating product count:', error);
    } else {
      console.log('Product count updated:', data);
      getAllProducts()
      setIsShowEditModal(false)
    }

  };

  return (
    <>
      <ToastContainer />
      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>

          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={`./${product.img}`}
                    alt="oil image"
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setMainProductInfos(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductID(product.id)
                      setProductNewTitle(product.title)
                      setProductNewPrice(product.price)
                      setProductNewCount(product.stock)
                      setProductNewImg(product.img)
                      setProductNewImg1(product.allImg[0].img)
                      setProductNewImg2(product.allImg[1].img)
                      setProductNewImg3(product.allImg[2].img)
                      setProductNewImg4(product.allImg[3].img)
                      setProductNewPopularity(product.score)
                      setProductNewSale(product.price)
                      setProductNewColors1(product.color[0])
                      setProductNewColors2(product.color[1])
                      setProductNewColors3(product.color[2])
                      setProductNewCategory(product.category)
                      setProductNewDiscount(product.discount)
                      setProductNewSize1(product.size[0])
                      setProductNewSize2(product.size[1])
                      setProductNewSize3(product.size[2])
                      setProductNewSize4(product.size[3])
                      setProductNewKey1(product.feature[0].title)
                      setProductNewKey2(product.feature[1].title)
                      setProductNewKey3(product.feature[2].title)
                      setProductNewKey4(product.feature[3].title)
                      setProductproperty1(product.feature[0].text)
                      setProductproperty2(product.feature[1].text)
                      setProductproperty3(product.feature[2].text)
                      setProductproperty4(product.feature[3].text)
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (

        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
          title='ایا از حذف اطمینان دارید؟'
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsmodal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{mainProductInfos.score}</td>
                <td>{mainProductInfos.sale}</td>
                <td>{mainProductInfos.color}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >

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
                  onChange={(event) => productNewproperty1(event.target.value)}
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
                  onChange={(event) => productNewproperty2(event.target.value)}
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
                  onChange={(event) => productNewproperty3(event.target.value)}
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
                  onChange={(event) => productNewproperty4(event.target.value)}
                />
              </div>

            </div>
          </div>
        </EditModal>
      )}
    </>
  );
}
