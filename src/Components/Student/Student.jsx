import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div className="container p-2">
        <div className="row border col-8 pr-2">
          <div className="col-2">
            <img src={this.props.picture} className="w-100" py-2></img>
          </div>
          <div className="col-4">
            {this.props.name}
            <br />
            Programming Experience {this.props.experience} years
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Student;
