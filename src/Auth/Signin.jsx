import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn } from "../Constant";

import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";

import CustomizerContext from "../_helper/Customizer";
import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";

const Signin = ({ selected }) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Ahmadou Fall");
  }, [value, name]);

  // const loginAuth = async (e) => {
  //   e.preventDefault();
  //   setValue(man);
  //   setName("Emay Walter");
    
  //   if (email === "test@gmail.com" && password === "test123") {
  //     localStorage.setItem("login", JSON.stringify(true));
  //     history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
  //     toast.success("Successfully logged in!..");
  //   } else {
  //     toast.error("You enter wrong password or username!..");
  //   }
  // };

  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName("Ahmadou Lat");

    // Simulation des rôles selon l'email
    const users = {
      "admin@gmail.com": { role: "administrateur", id: "ADM1234", name: "Admin", sex: "F" },
      "teacher@gmail.com": { role: "enseignant", id: "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0", name: "Enseignant", sex: "M" },
      "parent@gmail.com": { role: "parent", id: "PAR9012", name: "Parent", sex: "F" },
      "test@gmail.com": { role: "general", id: "GEN0000", name: "SuperAdmin", sex: "M" },
    };

    const user = users[email];

    if (user && password === "test123") {
      localStorage.setItem("login", JSON.stringify(true));
      localStorage.setItem("eduos_role", user.role);
      localStorage.setItem("eduos_access", "granted");
      localStorage.setItem("eduos_id", user.id);
      localStorage.setItem("profileURL", man);
      localStorage.setItem("Name", user.name);

      // Redirection selon le rôle
      let redirectPath = `${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`;
      if (user.role === "enseignant") {
        redirectPath = `${process.env.PUBLIC_URL}/enseignant/emploi-du-temps/${layoutURL}`;
      } else if (user.role === "administrateur") {
        redirectPath = `${process.env.PUBLIC_URL}/administration/dashboard-general/${layoutURL}`;
      }

      history(redirectPath);
      // history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
      toast.success("Successfully logged in!..");
    } else {
      toast.error("Identifiants incorrects !");
    }
  };

  
  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <H4>{selected === "simpleLogin" ? "" : "EDUOS CONNEXION"}</H4>
                  <P>{"Bienvenue dans l'univers pedagogique"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} />
                      <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className="position-relative form-group mb-0">
                    <div className="checkbox">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <a className="link" href="#javascript">
                      {ForgotPassword}
                    </a>
                    <Btn attrBtn={{ color: "primary", className: "d-block w-100 mt-2", onClick: (e) => loginAuth(e) }}>{SignIn}</Btn>
                  </div>
                  {/* <OtherWay /> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
