import React from "react";

export default class Example extends React.Component {
  state = {
    name: "Armine",
    status: "Developer",
    showDiv: false,
  };
  changeName = () => {
    this.setState({
      name: "Valod",
    });
  };

  showDiv = () => {
    this.setState({
      showDiv: !this.state.showDiv,
    });
  };
  render() {
    return (
      <div>
        Name : {this.state.name}
        Status : {this.state.status}
        <br />
        <br />
        <button onClick={this.changeName}> Change name</button>
        <br />
        <br />
        {this.state.showDiv ? (
          <div style={{ color: "red", fontSize: "15px" }}>this is error</div>
        ) : (
          ""
        )}
        <button onClick={this.showDiv}>showDiv</button>
      </div>
    );
  }
}
