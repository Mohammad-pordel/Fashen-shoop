import React, { useEffect, useState } from "react";
import ErrorBox from "../Errorbox/Errorbox";
import DeleteModal from './../DeleteModal/DeleteModal'
import EdutModal from './../EditModal/EditModal.js'
import DetailsModal from './../DetailsModal/DetailsModal.js'
import { AiOutlineDollarCircle } from "react-icons/ai";
import './Users.css'

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [isShowDetailes, setIsShowDetailes] = useState(false)
  const [mainUserID, setMainUserID] = useState(null)
  const [mainUser, setMainUser] = useState([])
  const [firsname, setFirsname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [email, setemail] = useState('')
  const [address, setAddress] = useState('')
  const [score, setScore] = useState('')
  const [buy, setBuy] = useState('')

  useEffect(() => {
    getAllUsers()
  }, []);

  function getAllUsers() {
    fetch(`http://localhost:8000/api/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }

  const closeDeleteModal = () => setIsShowDeleteModal(false)

  const removeUser = () => {
    console.log(mainUserID);
    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        setIsShowDeleteModal(false)
        getAllUsers()
      })

  }

  const editeUser = (event) => {
    event.preventDefault()
    let updataInfoUser = {
      firsname,
      lastname,
      username,
      password,
      phone,
      city,
      email,
      address,
      score,
      buy
    }
    console.log(mainUserID);


    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updataInfoUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        getAllUsers()
        setIsShowEditModal(false)



      })

  }

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>

      {users.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firsname}-{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => {
                    setIsShowDeleteModal(true)
                    setMainUserID(user.id)
                  }}>حذف</button>
                  <button onClick={() => {
                    setMainUser(user)
                    setIsShowDetailes(true)
                  }}>جزییات</button>
                  <button onClick={() => {
                    setIsShowEditModal(true)
                    setMainUserID(user.id)

                    setFirsname(user.firsname)
                    setLastname(user.lastname)
                    setUsername(user.username)
                    setPassword(user.password)
                    setPhone(user.phone)
                    setCity(user.city)
                    setemail(user.email)
                    setAddress(user.address)
                    setScore(user.score)
                    setBuy(user.buy)

                  }}>ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}
      {
        isShowDeleteModal && (
          <DeleteModal
            title="آیا از حذف اطمینان دارید؟"
            cancelAction={closeDeleteModal}
            submitAction={removeUser}
          />
        )
      }
      {
        isShowEditModal && <EdutModal onSubmit={editeUser} onClose={() => setIsShowEditModal(false)}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={firsname} onChange={(e) => setFirsname(e.target.value)} className="edit-user-info-input " placeholder="  نام کاربر را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="edit-user-info-input " placeholder=" نام خانوادگی کاربر را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="edit-user-info-input " placeholder="نام کاربری  را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="edit-user-info-input " placeholder="پسورد کاربر  را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="edit-user-info-input " placeholder="شماره تماس کاربر  را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="edit-user-info-input " placeholder=" محل زندگی کاربر - شهر را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className="edit-user-info-input " placeholder="آدرس کاربر  را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="edit-user-info-input " placeholder="‌امیتیاز کاربر در سایت  را وارد نمایید" >

            </textarea>

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={score} onChange={(e) => setScore(e.target.value)} className="edit-user-info-input " placeholder=" میزان خرید کاربر را وارد نمایید" />

          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input type="text" value={buy} onChange={(e) => setBuy(e.target.value)} className="edit-user-info-input " placeholder=" میزان خرید کاربر را وارد نمایید" />

          </div>

        </EdutModal>
      }
      {
        isShowDetailes && (
          <DetailsModal onHide={()=>setIsShowDetailes(false)}>
            <table className="cms-table">
              <thead>
                <tr>
                  <th>شهر کاربر</th>
                  <th>آدرس </th>
                  <th>آمتیاز </th>
                  <th>میزان خرید </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{mainUser.city}</td>
                  <td>{mainUser.address}</td>
                  <td>{mainUser.score}</td>
                  <td>{mainUser.buy}</td>
                </tr>
              </tbody>
            </table>
          </DetailsModal>
        )}
    </div>
  );
}
