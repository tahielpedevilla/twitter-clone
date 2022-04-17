import React from "react";
import {Redirect, Route, Switch} from "react-router";

import FeedScreen from "./screens/Feed";
import MessagesScreen from "./screens/MessagesScreen";

const Routes: React.FC = () => (
  <Switch>
    <Route exact component={FeedScreen} path="/home" />
    <Route exact component={MessagesScreen} path="/messages" />
    <Redirect to="/home" />
  </Switch>
);

export default Routes;
