import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from "reactstrap";

import avatar13 from "../../assets/img/avatars/avatar.jpg";

const SignIn = () => (
  <React.Fragment>
    <div className="text-center mt-4">
      <h2>Welcome back, Chris</h2>
      <p className="lead">Sign in to your account to continue</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <div className="text-center">
            <img
              src={avatar13}
              alt="Chris Wood"
              className="img-fluid rounded-circle"
              width="132"
              height="132"
            />
          </div>
          <Form>
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
                placeholder="Enter your password"
              />
              <small>
                <Link to="/auth/reset-password">Forgot password?</Link>
              </small>
            </FormGroup>
            <div>
              <CustomInput
                type="checkbox"
                id="rememberMe"
                label="Remember me next time"
                defaultChecked
              />
            </div>
            <div className="text-center mt-3">
              <Link to="/dashboard/default">
                <Button color="primary" size="lg">
                  Sign in
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignIn;



// import React from 'react'
// import { BrowserRouter as Router, Switch } from 'react-router-dom'
// import { UserProvider } from './teoyubelogin/utils/UserContext'
// import ProtectedRoute from './teoyubelogin/components/ProtectedRoute'
// import PublicRoute from './teoyubelogin/components/PublicRoute'
// import MainNav from './teoyubelogin/components/MainNav'
// import Login from './teoyubelogin/pages/Login'
// import Signup from './teoyubelogin/pages/Signup'
// import UserRoutes from './teoyubelogin/routes/UserRoutes'

// function App() {
//   return (
//     <UserProvider>
//       <Router>
//         <MainNav />
//         <Switch>
//           <PublicRoute exact path="/teoyubelogin/SignIn" component={Login} />
//           <PublicRoute exact path="/teoyubelogin/Signup" component={Signup} />
//           <ProtectedRoute path="/teoyubelogin/user" component={UserRoutes} />
//         </Switch>
//       </Router>
//     </UserProvider>
//   )
// }

// export default App
