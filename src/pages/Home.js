import React, { Component } from "react";
import axios from "axios";
import Card from "../Card";

class Home extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  state = {
    weetjes: []
  };

  componentDidMount() {
    const { numberOfWeetjes } = this.props.match.params;
    console.log(numberOfWeetjes);
    for (let i = 0; i < parseInt(numberOfWeetjes); i++) {
      this.goGetWeetje();
    }
  }

  goGetWeetje() {
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(response => {
        const newWeetjes = [response.data.text].concat(this.state.weetjes);

        this.setState({
          weetjes: newWeetjes
        });
      });
  }

  render() {
    // .map / .filter
    const filteredWeetjes = this.state.weetjes.filter(
      weetje => weetje.indexOf("the") === -1
    );

    return (
      <div>
        <h1>
          Showing {filteredWeetjes.length} of {this.state.weetjes.length}
        </h1>

        {filteredWeetjes.map(weetje => (
          <Card weetje={weetje} />
        ))}
      </div>
    );
  }
}

export default Home;
