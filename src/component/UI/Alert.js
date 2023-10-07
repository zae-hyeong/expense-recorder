import React from "react";
import ReactDOM from "react-dom";
import "./Alert.css";
import Card from "./Card";

const Alert = (props) => {

  const onClicked = () => {
    props.onSetAlert('');
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
          <div className="alert-background">
          <Card className="alert-card">
            <p className="alert-msg">{props.contents}</p>
            <button onClick={onClicked} className="alert-close">Close</button>
          </Card>
        </div>,
        document.getElementById('alert-div')
        )}
      </React.Fragment>
)};

export default Alert;
