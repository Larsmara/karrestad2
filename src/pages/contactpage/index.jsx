import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { Button } from "../../components";

const ContactPage = () => {
  const history = useHistory();
  return (
    <div className="contactpage container">
      <div className="item">
        <h1>Contact us</h1>
        <h4>Members:</h4>
        <ul className="list">
          <li className="list-item">
            <div className="list-key">Styreleder:</div>
            <div className="list-value">Åge</div>
          </li>

          <li className="list-item">
            <div className="list-key">Styreleder:</div>
            <div className="list-value">Rolf</div>
          </li>

          <li className="list-item">
            <div className="list-key">Styreleder:</div>
            <div className="list-value">Jon Inge</div>
          </li>

          <li className="list-item">
            <div className="list-key">Styreleder:</div>
            <div className="list-value">Line</div>
          </li>

          <li className="list-item">
            <div className="list-key">Styreleder:</div>
            <div className="list-value">Lars</div>
          </li>
        </ul>

        <h1 className="h1">How to contact us</h1>
        <ul>
          <li className="list-item">
            <div className="list-key">General question:</div>
            <div className="list-value">123 12 123</div>
          </li>

          <li className="list-item">
            <div className="list-key">Questions about parking / garage:</div>
            <div className="list-value">123 12 123</div>
          </li>
        </ul>

        <h1 className="h1">Have a complaint?</h1>
        <Button inverted onClick={() => history.push("/complain")}>
          Send it here
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
