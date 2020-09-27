import React from "react";
import { useHistory } from "react-router-dom";
import image from "../../assets/karrestad.jpg";
import "./index.scss";
import { Card, Button } from "../../components";

const HomePage = () => {
  const history = useHistory();
  return (
    <div className="homepage" style={{ backgroundImage: `url(${image})` }}>
      <div className="items">
        <Card
          title="About us"
          type="h2"
          width={500}
          body="Click here to learn more about us"
          actions={<Button onClick={() => history.push("/contact")}>Read more</Button>}
        />
        <Card
          title="Have a complaint?"
          type="h2"
          width={500}
          body="Send a complaint"
          actions={<Button onClick={() => history.push("/complain")}>Send complain</Button>}
        />
      </div>
    </div>
  );
};

export default HomePage;
