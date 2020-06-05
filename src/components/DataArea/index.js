import React, { Component } from "react";

import Nav from "./navbar";
import API from "../utils/API";
import "./style.css";

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }
