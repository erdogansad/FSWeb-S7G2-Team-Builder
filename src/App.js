import React, { useState } from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
import { Container } from 'reactstrap';

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import MemberList from "./components/MemberList";
import MemberForm from "./components/MemberForm";

const App = () => {
  const [memberList, setMemberList] = useState([]),
        [roles, setRoles] = useState([
          "Front-end Engineer",
          "Back-end Engineer",
          "UI&UX Designer"
        ]),
        [duzenlenecekUye, setDuzenlenecekUye] = useState({id: "", name: "", email: "", role: ""}),
        navigation = useHistory();


  const saveMember = (e, data) => {
    e.preventDefault();
    let newData = [];

    if(data.id !== undefined & data.id !== ""){
      let finder = memberList.find(member => member.id === data.id), getId = memberList.indexOf(finder);
      newData = [...memberList];
      newData[getId] = data;
    }else{
      data.id = String(memberList.length + 1);
      console.log(data);
      newData = [...memberList, data];
    }
    setMemberList(newData);
    navigation.goBack();
  }

  const editMember = (id) => {
    let finder = memberList.find(member => member.id === id);
    setDuzenlenecekUye(finder);
    navigation.push("/duzenle");
  }

  const deleteMember = (id) => {
    let finder = memberList.find(member => member.id === id), 
        getId = memberList.indexOf(finder),
        newData = [...memberList];
    newData = newData.length <= 1 ? [] : delete newData[getId];
    setMemberList(newData);
  }

  return (
    <div className='d-flex flex-column vh-100 min-vh-100'>
      <Header/>

      <Container className='h-100'>
        <Switch>
          <Route exact path="/"><MemberList memberList={memberList} roles={roles} editMember={editMember} deleteMember={deleteMember}/></Route>

          <Route path="/ekle"><MemberForm roles={roles} saveMember={saveMember}/></Route>
          <Route path="/duzenle"><MemberForm duzenlenecekUye={duzenlenecekUye} roles={roles} saveMember={saveMember}/></Route>

        </Switch>
      </Container>
      
      <Footer/>
    </div>
  )
}

export default App