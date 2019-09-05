import React, { Component } from "react";
import { Button, Form, Input } from "../component/Form/Index";

class FormContainer extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Input
          type="email"
          name="email"
          onChange={this.props.onChange}
          value={this.props.email}
        />
        <br/>
        <Input
          type="password"
          name="password"
          onChange={this.props.onChange}
          value={this.props.password}
        />
        <br/>
        <Button textButton="Kirim" />
      </Form>
    );
  }
}

export default FormContainer;
