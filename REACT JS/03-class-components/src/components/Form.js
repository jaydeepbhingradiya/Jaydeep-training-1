import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      passWord: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ userName: e.target.value });
  };

  passWordHandler = (e) => {
    this.setState({
      passWord: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <div>
            <label>User Name : </label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <label>User Name : </label>
            <input
              type="password"
              value={this.state.passWord}
              onChange={this.passWordHandler}
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
