import React from "react";
import ReactDOM from "react-dom";

const modalRootEl = document.getElementById("portal-root");
class PortalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRootEl.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRootEl.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
export default PortalDemo;

// function PortalDemo() {
//   return ReactDOM.createPortal(<h1>Protel page</h1>, document.getElementById("portal-root"));
// }

// const appRootEl = document.getElementById('app-root');

// const root = ReactDOM.createRoot(appRootEl);
// root.render(<Parent />);
