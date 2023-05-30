import Card from "./Card";
import { desc } from "./Description";

import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";

function App() {
  return (
    <div>
      <h1 className="header">Personal Assistants</h1>

      <div className="card-container">
        <Card
          name="Cortana"
          handle="@cortana21"
          desc={desc[0]}
          image={CortanaImage}
        />
        <Card name="Siri" handle="@siri01" desc={desc[1]} image={SiriImage} />
        <Card
          name="Alexa"
          handle="@alexa12"
          desc={desc[1]}
          image={AlexaImage}
        />
      </div>
    </div>
  );
}

export default App;
