import React from "react";
import "./Alert.css";
import Card from "./Card";

const Alert = (props) => {

  const onClicked = () => {
    props.onSetAlert('');
  }

  return <div className="alert-background">
    <Card className="alert-card">
      <p className="alert-msg">{props.contents}</p>
      <button onClick={onClicked} className="alert-close">Close</button>
    </Card>
  </div>;
};

export default Alert;
