import React, { useState, useEffect } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useLocation } from "react-router-dom";

const MemberForm = ({duzenlenecekUye, roles, saveMember}) => {
  const location = useLocation(),
        [pathName, setPathName] = useState(""),
        [values, setValues] = useState(duzenlenecekUye || {id: "", name: "", email: "", role: ""}),
        changeVal = (e) => {
            let name = e.target.name,
                val = e.target.value,
                newValues = {...values};
            newValues[name] = val;
            setValues(newValues);
        };

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);     

  if(duzenlenecekUye !== undefined && duzenlenecekUye.id === "" && pathName.includes("/duzenle")){
    return (
      <div className='h-100 d-flex justify-content-center align-items-center'> 
        <h3>Veriler listelenemedi.</h3>
      </div>
    )
  }

  return (
    <Form className='h-100 m-5' onSubmit={e => saveMember(e, values)}>
      <Row>
        <Col>
          <FormGroup>
            <Label for="name">Ad Soyad</Label>
            <Input id="name" name="name" placeholder="Ad Soyad" onChange={changeVal} value={values.name} type="text"/>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email">E-posta</Label>
            <Input id="email" name="email" placeholder="E-posta" onChange={changeVal} value={values.email} type="email"/>
          </FormGroup>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs="6">
          <FormGroup>
            <Label for="role">Rol</Label>
            <Input id="role" name="role" type={"select"} value={values.role} onChange={changeVal}>
              <option value="" hidden></option>
              { roles.map((role, i) => <option key={i} value={i}>{role}</option>) }
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <div className='text-center'>
        <Button className='bg-success'>Kaydet</Button>
      </div>
    </Form>
  )
}

export default MemberForm