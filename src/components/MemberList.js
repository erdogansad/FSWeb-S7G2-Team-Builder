import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const MemberList = ({memberList, roles, editMember, deleteMember}) => {
  const [loading, setLoading] = useState("Yükleniyor..."),
        MouseOver = (event) => event.target.style.color = "red",
        MouseOut= (event) => event.target.style.color= "",
        createButtons = (id) => {
          return (
            <>
              <FontAwesomeIcon role='button' className='ms-1' onMouseOver={MouseOver} onMouseOut={MouseOut} icon={faPenToSquare} onClick={() => editMember(id)}/>
              <FontAwesomeIcon role='button' className='ms-1' onMouseOver={MouseOver} onMouseOut={MouseOut} icon={faTrashCan} onClick={() => deleteMember(id)}/>
            </>
          )
        };

  useEffect(() => {
    setTimeout(() => memberList.length === 0 && setLoading("Veriler yüklenemedi veya veri yok."), 3000);
  },[memberList]);

  if(memberList.length === 0){
    return (
      <div className='h-100 d-flex justify-content-center align-items-center'> 
        <h3>{loading}</h3>
      </div>
    )
  }

  return (
    <div className='h-100 m-5'>
      <Table responsive hover>
          <thead className='bg-light sticky-top top-0'>
            <tr>
              <th>#</th>
              <th>Ad Soyad</th>
              <th>Rol</th>
              <th>E-posta</th>
              <th className='text-center'>Eylemler</th>
            </tr>
          </thead>
          <tbody>
            {
              memberList.map((member, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{member.id}</th>
                    <td>{member.name}</td>
                    <td>{roles[member.role]}</td>
                    <td>{member.email}</td>
                    <td className='text-center'>{createButtons(member.id)}</td>
                  </tr>
                )
              })
            }
          </tbody>
      </Table>
    </div>
  )
}

export default MemberList