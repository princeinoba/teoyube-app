// import React, { useRef, useState } from 'react'
// import { useUser } from './teoyubelogin/utils/UserContext'
// import { signup } from './teoyubelogin/utils/user-API'
// import { Link } from 'react-router-dom'
// import './style.css'

// import {
//   Button,
//   Form,
//   Row,
//   Col,
//   Alert,
//   Container
// } from "reactstrap";

// import { ReactComponent as Logo } from './teoyubelogin/img/bitgora-wordmark.svg'

// function Signup(props) {
//   // eslint-disable-next-line no-unused-vars
//   const { _, setUser } = useUser()
//   const [err, setErr] = useState('')
//   const email = useRef('')
//   const username = useRef('')
//   const password = useRef('')

//   const handleSubmit = (e) => {
//     setUser((prevUser) => ({ loading: true, ...prevUser }))
//     e.preventDefault()
//     signup(
//       email.current.value,
//       username.current.value,
//       password.current.value
//     ).then((response) => {
//       if (response.data) {
//         setErr('')
//         setUser({ loading: false, ...response.data })
//         props.history.push('/user/dashboard')
//       } else {
//         setErr(response.err)
//       }
//     })
//   }

//   return (
//     <div className="blue-bg p-3 p-md-0">
//       <Container fluid className="h-100 p-md-0">
//         <Row
//           id="signup-row"
//           className="justify-content-center justify-content-sm-start"
//         >
//           <Col
//             id="signup-col"
//             xs={12}
//             md={6}
//             lg={5}
//             className="white-bg mt-5 mt-md-0"
//           >
//             <Row className="justify-content-center mb-5">
//               <Col xs={6}>
//                 <Logo />
//               </Col>
//             </Row>
//             <Row className="justify-content-center">
//               <Col>
//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group controlId="email">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control
//                       ref={email}
//                       type="email"
//                       placeholder="email@example.com"
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="username">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control ref={username} type="text" />
//                   </Form.Group>
//                   <Form.Group controlId="password">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control ref={password} type="password" />
//                   </Form.Group>
//                   {err ? <Alert variant="warning">{err}</Alert> : ''}
//                   <div className="w-100 d-flex flex-column align-items-center mt-4">
//                     <p className="mb-0 text-center">Already have an account?</p>
//                     <Link to="/" className="text-center">
//                       Sign in
//                     </Link>
//                     <Button
//                       type="submit"
//                       size="lg"
//                       variant="warning"
//                       className="mt-4 mb-3"
//                     >
//                       Sign Up
//                     </Button>
//                   </div>
//                 </Form>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Signup





import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const SignUp = () => (  
  <React.Fragment>
    <div className="text-center mt-4">
      <h1 className="h2">Get started</h1>
      <p className="lead">
        Start creating the best possible user experience for you customers.
      </p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
                bsSize="lg"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </FormGroup>
            {/* <FormGroup>
              <Label>Company</Label>
              <Input
                bsSize="lg"
                type="text"
                name="company"
                placeholder="Enter your company name"
              />
            </FormGroup> */}
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </FormGroup>
            <div className="text-center mt-3">
              <Link to="/dashboard/default">
                <Button color="primary" size="lg">
                  Sign up
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignUp;