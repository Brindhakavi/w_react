import React from "react";
import ChildClass from "./ChildClass";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  render() {
    return (
        <div>
          <ChildClass
            num={this.state.count}
            updateNum={(num) =>
              this.setState({
                count: num
              })
            }
          />
        </div>
    );
  }
}

export default ParentClass;