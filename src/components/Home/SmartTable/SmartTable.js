import React, { Component } from "react";
import styles from "./SmartTable.module.css";
import { Link } from "react-router-dom";
import { isArray } from "util";

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
    let movingObject = this.state.columnHeaders.find(x => x.name == movingItem);
    if (movingItem !== origin) {
      let currentArray = this.state.columnHeaders.filter(
        x => x.name !== movingItem
      );
      let filteredDown = currentArray.filter(
        x =>
          currentArray.indexOf(x) <
          currentArray.indexOf(currentArray.find(x => x.name == origin))
      );
      let filteredUp = currentArray.filter(
        x =>
          currentArray.indexOf(x) >=
          currentArray.indexOf(currentArray.find(x => x.name == origin))
      );

      this.setState({
        roughcolumns: [...filteredDown, movingObject, ...filteredUp]
      });
    }
  };
  placeAfter = (movingItem, origin) => {
    let movingObject = this.state.columnHeaders.find(x => x.name == movingItem);
    if (movingItem !== origin) {
      let currentArray = this.state.columnHeaders.filter(
        x => x.name !== movingItem
      );
      let filteredDown = currentArray.filter(
        x =>
          currentArray.indexOf(x) <=
          currentArray.indexOf(currentArray.find(x => x.name == origin))
      );
      let filteredUp = currentArray.filter(
        x =>
          currentArray.indexOf(x) >
          currentArray.indexOf(currentArray.find(x => x.name == origin))
      );

      this.setState({
        roughcolumns: [...filteredDown, movingObject, ...filteredUp]
      });
    }
  };

  handleDragging = e => {
    let coordinates = [];
    this.state.columnHeaders.map(header => {
      coordinates.push([header.name, ...this.getElementCoords(header.name)]);
      return 0;
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
      }
      return 0;
    });
  };

  makeItString = a => {
    if (isArray(a)) {
      return a.map(item => {
        return "#" + item.title + " ";
      });
    }
    return a;
  };

  hoverModal = id => {
    const FiltUser = this.props.rows.filter(row => row.id == id);
    this.setState({ hoveruser: FiltUser[0] });
  };
  hoverLeave = () => {
    this.setState({ hoveruser: false });
  };

  headerRow = () => {
    let headers = this.state.columnHeaders.map(header => {
      return (
        <th
          key={header.title}
          id={header.name}
          draggable="true"
          onDrag={this.handleDragging}
          onDragEnd={() =>
            this.setState({ columnHeaders: this.state.roughcolumns })
          }
        >
          {header.title}
        </th>
      );
    });
    return <tr>{headers}</tr>;
  };
  contentRows = () => {
    if (!this.props.rows.length) {
      return (
        <tbody>
          <tr>
            <td
              colSpan={this.state.columnHeaders.length}
              className={styles.noItemsAlert}
            >
              No Items To Show
            </td>
          </tr>
        </tbody>
      );
    }
    let rows = this.props.rows.map(row => {
      let currentrow = this.state.columnHeaders.map(header => {
        return (
          <td key={header.name}>
            <Link
              to={`profile/${row.id}`}
              style={{ color: row.black_list ? "#fff" : "#000" }}
            >
              {this.makeItString(row[header.name])}
            </Link>
          </td>
        );
      });

      return (
        <tr
          key={this.props.rows.indexOf(row)}
          bgcolor={row.black_list ? "#dc3545" : "white"}
        >
          {currentrow}
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };
  render() {
    return (
      <div className={styles.container}>
        <table id="html_to_excel">
          <thead>{this.headerRow()}</thead>
          {this.contentRows()}
        </table>
      </div>
    );
  }
}

export default SmartTable;
