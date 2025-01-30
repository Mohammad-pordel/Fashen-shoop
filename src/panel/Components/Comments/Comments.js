import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import ErrorBox from '../Errorbox/Errorbox'
import DetailsModal from '../DetailsModal/DetailsModal'
import "./Comments.css"
import EditModal from '../EditModal/EditModal'
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";


export default function Comments() {
  const [allComments, setAllComments] = useState([])
  const [showTextComment, setShowTextComment] = useState(false)
  const [textComment, setTextComment] = useState('')
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [CommentAction, setCommentAction] = useState(null)
  const [isShowEditModal, setIsIsShowEditModal] = useState(false)
  const [mainCommentBody, setMainCommentBody] = useState(null)
  const [isShoَAcceptModal, setIsShoَAcceptModal] = useState(false)
  const [isShoَRejectModal, setIsShoَRejectModal] = useState(false)





  useEffect(() => {
    getAllComment()

  }, [])

  function getAllComment() {
    fetch('http://localhost:8000/api/comments/')
      .then(res => res.json())
      .then(Comments => setAllComments(Comments))
  }

  const closeDleteModal = () => setIsShowDeleteModal(false)
  const closeEditModal = () => setIsIsShowEditModal(false)
  const closeAcceptModal = () => setIsShoَAcceptModal(false)

  const deleteComment = () => {
    console.log('کامنت بسته شد');
    fetch(`http://localhost:8000/api/comments/${CommentAction}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        closeDleteModal()
        getAllComment()

      })

  }

  const UpdateCommentModal = (event) => {
    event.preventDefault();
    console.log(mainCommentBody);

    fetch(`http://localhost:8000/api/comments/${CommentAction}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: mainCommentBody
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        getAllComment()
        setIsIsShowEditModal(false)

      })
  }

  const acceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${CommentAction}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        getAllComment()
        setIsShoَAcceptModal(false)

      })
  }

  const RejectComment = () => {
    fetch(`http://localhost:8000/api/comments/reject/${CommentAction}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        getAllComment()
        setIsShoَRejectModal(false)

      })

  }

  const closeRejectModal = () => setIsShoَRejectModal(false)

  return (
    <>
      <Sidebar />
      <Header />
      <div className='cms-main'>
        <h1 className='cms-title'>لیست کامنت ها</h1>


        {
          allComments.length ? (
            <table className='cms-table'>
              <thead>
                <tr>
                  <th>اسم کاربر</th>
                  <th>محصول</th>
                  <th>کامنت</th>
                  <th>تاریخ</th>
                  <th>ساعت</th>
                </tr>
              </thead>

              <tbody>
                {
                  allComments.map(comment => (

                    <tr key={comment.id} >
                      <td>{comment.userID}</td>
                      <td>{comment.productID} </td>
                      <td>
                        <button onClick={() => {
                          setShowTextComment(true)
                          setTextComment(comment.body)

                        }}>دیدن متن</button>
                      </td>
                      <td>{comment.data}</td>
                      <td>{comment.hour}</td>
                      <td>
                        <button onClick={() => {
                          setIsShowDeleteModal(true)
                          setCommentAction(comment.id)
                        }}>حذف</button>
                        <button onClick={() => {
                          setIsIsShowEditModal(true)
                          setMainCommentBody(comment.body)
                          setCommentAction(comment.id)
                        }}>ویرایش</button>
                        <button>پاسخ</button>
                        {
                          comment.isAccept == 0 ? (
                            <button onClick={() => {
                              setIsShoَAcceptModal(true)
                              setCommentAction(comment.id)
                            }}>تایید</button>
                          ) : (
                            <button onClick={() => {
                              setIsShoَRejectModal(true)
                              setCommentAction(comment.id)

                            }}>رد  </button>
                          )
                        }


                      </td>
                    </tr>
                  ))
                }

              </tbody>

            </table>
          ) : (
            <ErrorBox msg="هیچ کامنتی یافت نشد" />
          )

        }
        {
          showTextComment && (
            <DetailsModal onHide={() => setShowTextComment(false)}>
              {textComment}
              <button className='text-modal-close-btn' onClick={() => setShowTextComment(false)}>بستن</button>
            </DetailsModal >

          )
        }
        {
          isShowDeleteModal && (
            <DeleteModal cancelAction={closeDleteModal} submitAction={deleteComment} title="ایا از حذف این کامنت اطمینان دارید؟" />
          )
        }

        {
          isShowEditModal && (
            <EditModal onClose={closeEditModal} onSubmit={UpdateCommentModal}>
              <textarea value={mainCommentBody} onChange={event => setMainCommentBody(event.target.value)}>

              </textarea>

            </EditModal>
          )
        }
        {
          isShoَAcceptModal && (
            <DeleteModal
              cancelAction={closeAcceptModal}
              submitAction={acceptComment}
              title="ایا از تایید این کامنت اطمینان دارید؟"
            >
            </DeleteModal>
          )
        }
        {
          isShoَRejectModal && (
            <DeleteModal
              cancelAction={closeRejectModal}
              submitAction={RejectComment}
              title="ایا از رد این کامنت اطمینان دارید؟"
            >
            </DeleteModal>
          )
        }


      </div>
    </>
  )
}
