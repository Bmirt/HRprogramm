import React, { Component } from "react";

class SmartTable extends Component {
  state = {
    roughcolumns: [],
    columnHeaders: this.props.columnHeaders
  };

  getElementCoords = id => {
    let coorX0 = document.getElementById(id).getBoundingClientRect().left;
    let coorX2 = coorX0 + document.getElementById(id).offsetWidth;
    let coorX1 = (coorX0 + coorX2) / 2;

    return [coorX0, coorX1, coorX2];
  };

  placeBefore = (movingItem, origin) => {
    if (movingItem !== origin) {
      let currentArray = this.state.columnHeaders.filter(x => x !== movingItem);
      let filteredDown = currentArray.filter(
        x => currentArray.indexOf(x) < currentArray.indexOf(origin)
      );
      let filteredUp = currentArray.filter(
        x => currentArray.indexOf(x) >= currentArray.indexOf(origin)
      );

      this.setState({
        roughcolumns: [...filteredDown, movingItem, ...filteredUp]
      });
    }
  };
  placeAfter = (movingItem, origin) => {
    if (movingItem !== origin) {
      let currentArray = this.state.columnHeaders.filter(x => x !== movingItem);
      let filteredDown = currentArray.filter(
        x => currentArray.indexOf(x) <= currentArray.indexOf(origin)
      );
      let filteredUp = currentArray.filter(
        x => currentArray.indexOf(x) > currentArray.indexOf(origin)
      );

      this.setState({
        roughcolumns: [...filteredDown, movingItem, ...filteredUp]
      });
    }
  };
  handleDragging = e => {
    let coordinates = [];
    this.state.columnHeaders.map(header => {
      coordinates.push([header, ...this.getElementCoords(header)]);
    });
    coordinates.map(header => {
      if (e.clientX === 0) {
      } else if (e.clientX < header[3] && e.clientX > header[2]) {
        return this.placeAfter(
          e.target.id,
          coordinates[coordinates.indexOf(header)][0]
        );
      } else if (e.clientX < header[2] && e.clientX > header[1]) {
        return this.placeBefore(
          e.target.id,
          coordinates[coordinates.indexOf(header)][0]
        );
      } else {
        return;
      }
    });
  };

  headerRow = () => {
    let headers = this.state.columnHeaders.map(header => {
      return (
        <th
          key={header}
          id={header}
          draggable="true"
          onDrag={this.handleDragging}
          onDragEnd={() =>
            this.setState({ columnHeaders: this.state.roughcolumns })
          }
        >
          {header}
        </th>
      );
    });
    return <tr>{headers}</tr>;
  };
  contentRows = () => {
    let rows = this.props.rows.map(row => {
      let currentrow = this.state.columnHeaders.map(header => {
        return <td key={header}>{row[header]}</td>;
      });
      return <tr key={this.props.rows.indexOf(row)}>{currentrow}</tr>;
    });
    return <tbody>{rows}</tbody>;
  };
  render() {
    return (
      <table>
        <tbody>{this.headerRow()}</tbody>
        {this.contentRows()}
      </table>
    );
  }
}

export default SmartTable;
