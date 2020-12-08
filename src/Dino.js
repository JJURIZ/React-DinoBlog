function Dino(props) {
  console.log(props);

  return (
    <div>
      <h1 className="main_header">{props.title}</h1>
      <h3 className="sub_header">{props.author}</h3>
      <p className="standard_paragraph">{props.body}</p>
      <h2 className="comments">Comments: </h2>
      <p className="standard_paragraph">{props.comments[0]}</p>
    </div>
  );
}

export default Dino;

/* 
as a Class Component

import React, { Component } from 'react';

class Dino extends Component {
   render() {
        console.log(this.props);
        return (
    <div>
      <h1 className="main_header">{this.props.title}</h1>
      <h3 className="sub_header">{this.props.author}</h3>
      <p className="standard_paragraph">{this.props.body}</p>
      <h2 className="comments">Comments: </h2>
      <p className="standard_paragraph">{this.props.comments[0]}</p>
    </div>
        )
   }

}




*/