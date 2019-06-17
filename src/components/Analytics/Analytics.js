import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Analytics extends Component {
  state = {};

  render() {
    const data = {
      labels: ["Profiles", "Projects", "Technologies"],
      datasets: [
        {
          data: [
            this.props.profiles.length,
            this.props.projects.length,
            this.props.technologies.length
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };
    console.log(this.props);
    return (
      <>
        <Pie
          data={data}
          width={10}
          height={10}
          options={{ maintainAspectRatio: false }}
        />
      </>
    );
  }
}

export default Analytics;
