import React, { Component } from "react";
import List from "./container/List";
import Form from "./container/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          email: "contoh@gmail.com",
          password: "1234"
        },
        {
          email: "contoh2@gmail.com",
          password: "2345"
        },
        {
          email:"contoh3@gmail.com",
          password: "3456"
        }
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, data, password } = this.state;
    if (email === undefined || email === "" || password === "" || password === undefined) {
      alert("cek lagi");
    } else {
      data.push({ email, password });
      this.setState({
        data,
        email: "",
        password: ""
      });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <List data={this.state.data} />
        <Form
          onChange={this.onChangeText}
          email={email}
          password={password}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}
