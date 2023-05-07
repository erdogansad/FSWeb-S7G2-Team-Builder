import React from 'react'
import {Switch, Route} from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import MemberList from "./components/MemberList";
import MemberForm from "./components/MemberForm";

const App = () => {
  return (
    <>
      <Header/>

      <Switch>
        <Route exact path="/"><MemberList/></Route>

        <Route path="/ekle"><MemberForm/></Route>
      </Switch>

      <Footer/>
    </>
  )
}

export default App