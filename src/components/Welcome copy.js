import React from "react";
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
    };
  }

  handleclick(value) {
    this.setState({ posts: value });
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.handleclick('asif')}>Activate Lasers</button>
        <h1>{this.state.posts}</h1>
      </div>
    );
  }
}
export default Welcome;
