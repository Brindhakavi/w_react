import React from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "this.props");
    let { num, updateNum } = this.props;
    return (
      <>
        Count {num}
        <button onClick={() => updateNum(num * 4)}> 
        Multiplication 
        </button>
        <button onClick={() => updateNum(num / 4)}>
             Division 
             </button>
      </>
    );
  }
}

export default ChildClass;