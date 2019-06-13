import React, { Component } from "react";

class FilterWindow extends Component {
  state = {
    people: [
      {
        English: "good",
        Name: "Giorgi Parunov",
        Phone: "55992994",
        Portfolio: "-",
        Position: "55992994",
        Profile: "@parunchika",
        Projects: "#PayLix ",
        "Salary Expectation": "1500$",
        Source: "refference",
        Status: "interested",
        Technologies: "#CSS "
      },
      {
        English: "good",
        Name: "Lasha Sumbadze",
        Phone: "666",
        Portfolio: "-",
        Position: "666",
        Profile: "@lashaia",
        Projects: "#DropShip ",
        "Salary Expectation": "0$",
        Source: "refference",
        Status: "interested",
        Technologies: ""
      },
      {
        English: "good",
        Name: "Liko Gabadadze",
        Phone: "578544",
        Portfolio: "-",
        Position: "578544",
        Profile: "@liliko",
        Projects: "#DropShip #Some Project ",
        "Salary Expectation": "100000$",
        Source: "refference",
        Status: "interested",
        Technologies: "#html #CSS "
      }
    ]
  };
  filter = () => {};
  render() {
    return <button onClick={this.filter} />;
  }
}

export default FilterWindow;
