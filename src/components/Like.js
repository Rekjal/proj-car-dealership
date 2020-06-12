import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if(!this.props.liked) classes += "-o";
    return (
      <React.Fragment>         
        {/* <i className="fa fa-heart" aria-hidden="true"></i>
        <i className="fa fa-bath" aria-hidden="true"></i> */}
        <i style = {{cursor: 'pointer'}} className={classes} aria-hidden="true"></i>
        {/* <div>
    <FontAwesomeIcon icon={faHome} />
  </div> */}
      </React.Fragment>
    );
  }
}

export default Like;
