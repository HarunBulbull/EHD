// * Coded by HarunBulbull
// ! Kullanılacak kütüphaneler:

import React from 'react';                                          // * React
import '../css/panelReusable.css'                                   // * CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    // * FontAwesome Kütüphanesi
import { faTrash } from '@fortawesome/free-solid-svg-icons'         // * FontAwesome Kütüphanesi
import axios from 'axios';                                          // * Axios (Backend haberleşmesi için)


// ! Ana fonksiyon
function deleteUser({ id, name, mail, admin, onClose }) {


  // * İptal butonu
  const handleClose = () => {
    onClose();
  };


  // * Devam butonu
  const handledeleteUser = () => {
    axios.post('http://localhost:8081/deleteUser', {
      id: id
    })
      .then(response => {
        if (response.data.success) {
          onClose();
        } else {
          alert("Üye silinirken bir hata oluştu!");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Üye silme işleminde beklenmeyen bir hata oluştu!");
      });
  }


  // * Ekran çıktısı
  return (
    <>
      <div className="blackblurbg"></div>
      <div className="deleteForm">
        <FontAwesomeIcon className="mainIcon" icon={faTrash} />
        <h1 className='mainHeader'>Aşağıda bilgileri verilen üyeyi silmek istediğinize emin misiniz? Bu işlemin geri döndürülemez olduğunu unutmayın!</h1>
        <div className="deleteInfo">
          <i>ID: {id}</i>
          <i>İsim: {name}</i>
          <i>E-Posta: {mail}</i>
          <i>Admin: {admin}</i>
        </div>
        <div className="deleteButtons">
          <button className='deleteButton' onClick={handleClose}>İptal</button>
          <button className='deleteButton' onClick={handledeleteUser}>Sil</button>
        </div>
      </div>
    </>
  )
}

export default deleteUser
