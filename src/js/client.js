import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import InvoiceSearch from "./pages/InvoiceSearch";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Dashboard}></IndexRoute>      
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="invoice-search" component={InvoiceSearch}></Route>
    </Route>
  </Router>,
app);
