import React, { Component } from "react";
import styles from "./SmartTable.module.css";
import { Link } from "react-router-dom";

// function hoverView(props) {
//   if (props) {
//     console.log(props.Profile);
//   }
//   return (
//     <>
//       {props ? (
//         <div>
//           <h1>Hello {props.Profile}</h1>
//         </div>
//       ) : (
//         <h1>no props</h1>
//       )}
//     </>
//   );
// }

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

  hoverBox = () => {
    return (
      <>
        {this.state.hoveruser ? (
          <div className={styles.hoverUser}>
            <h1>Hello {this.state.hoveruser.Profile}</h1>
          </div>
        ) : null}
      </>
    );
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
          <td key={header}>
            <Link
              to={`profile/${row.id}`}
              style={{ color: row.BlackList ? "#fff" : "#000" }}
            >
              {row[header]}
            </Link>
          </td>
        );
      });

      return (
        <tr
          key={this.props.rows.indexOf(row)}
          onMouseEnter={() => this.hoverModal(row.id)}
          onMouseLeave={this.hoverLeave}
          bgcolor={row.BlackList ? "#dc3545" : "white"}
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
        {this.hoverBox()}
        <table id="html_to_excel">
          <thead>{this.headerRow()}</thead>
          {this.contentRows()}
        </table>
      </div>
    );
  }
}

export default SmartTable;
