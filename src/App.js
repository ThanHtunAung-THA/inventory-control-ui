import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
const TheLayout_User = React.lazy(() => import("./containers/UserLayout"));

// Pages
const UserLoginIndex = React.lazy(() => import("./views/login/UserLoginIndex"));
const AdminLoginIndex = React.lazy(() => import("./views/login/AdminLoginIndex"));
const AdminRegister = React.lazy(() => import("./views/login/AdminRegister"));
const Logout = React.lazy(() => import("./views/logout/LogoutIndex"));
const UserLogout = React.lazy(() => import("./views/logout/UserLogoutIndex"));

const IndexPage = React.lazy(() => import("./views/home/IndexPage"));
const ProductsPage = React.lazy(() => import('./views/home/products/ProductsPage'));
const SupportsPage = React.lazy(() => import('./views/home/supports/SupportsPage'));
const ContactPage = React.lazy(() => import('./views/home/contact/ContactPage'));
const AboutUsPage = React.lazy(() => import('./views/home/AboutUsPage'));
const TrialRegister = React.lazy(() => import('./views/home/products/TrialRegister'));
const PaymentMethods = React.lazy(() => import('./views/home/products/PaymentPage'));


const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/user-login" />} />
            
            {/* Auth */}
            <Route
              exact
              path="/user-login"
              name="User Login Page"
              render={(props) => <UserLoginIndex {...props} />}
            />
            <Route
              exact
              path="/admin-login"
              name="Admin Login Page"
              render={(props) => <AdminLoginIndex {...props} />}
            />
            <Route
              exact
              path="/admin-register"
              name="Admin Register Page"
              render={(props) => <AdminRegister {...props} />}
            />

            {/* landing pages */}
            <Route
              exact
              path="/home"
              name="Home Page"
              render={(props) => <IndexPage {...props} />}
            />
            <Route
              exact
              path="/products"
              name="Products Page"
              render={(props) => <ProductsPage {...props} />}
            />
            <Route
              exact
              path="/trial-register"
              name="Trial Register Page"
              render={(props) => <TrialRegister {...props} />}
            />
            <Route
              exact
              path="/payment-methods"
              name="Payment methods Selection Page"
              render={(props) => <PaymentMethods {...props} />}
            />
            <Route
              exact
              path="/supports"
              name="Supports Page"
              render={(props) => <SupportsPage {...props} />}
            />
            <Route
              exact
              path="/contact"
              name="Contact Us Page"
              render={(props) => <ContactPage {...props} />}
            />
            <Route
              exact
              path="/about"
              name="About Page"
              render={(props) => <AboutUsPage {...props} />}
            />

            {/* others */}
            <Route
              exact
              path="/admin/logout"
              name="Logout"
              render={(props) => <Logout {...props} />}
            />
            <Route
              exact
              path="/user/logout"
              name="User Logout"
              render={(props) => <UserLogout {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/admin"
              name="Admin Home"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              path="/user"
              name="User Home"
              render={(props) => <TheLayout_User {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;