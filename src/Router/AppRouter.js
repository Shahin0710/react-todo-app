import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Page/HomePage';
import AboutPage from '../Page/AboutPage';
import ProductPage from '../Page/ProductPage';
import TeamPage from '../Page/TeamPage';
import SupportPage from '../Page/SupportPage';
import ContactPage from '../Page/ContactPage';
import NotFoundPage from '../Page/NotFoundPage';
import ViewPage from '../Page/ViewPage';
import EditPage from '../Page/EditPage';


function AppRouter() {
    return (
        <Fragment>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/product" component={ProductPage}/>
        <Route exact path="/team" component={TeamPage}/>
        <Route exact path="/support" component={SupportPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/view/:id" component={ViewPage}/>
        <Route exact path="/edit/:id" component={EditPage}/>
        <Route exact component={NotFoundPage}/>
        </Switch>
        </Fragment>
    )
}

export default AppRouter
