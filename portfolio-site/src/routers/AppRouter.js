import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import WelcomePage from "../components/WelcomePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import ProjectPage from "../components/ProjectPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={WelcomePage} exact={true} />
        <Route path='/portfolio/' component={PortfolioPage} exact={true} />
        <Route path='/portfolio/:id' component={ProjectPage} />
        <Route path='/contact/' component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
