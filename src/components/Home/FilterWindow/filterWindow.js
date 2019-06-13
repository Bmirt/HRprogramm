import React, { Component } from "react";

// fields={[
//   {
//     name: "name",
//     type: "text",
//     label: "Name,Surname"
//   },
//   { name: "phone", type: "number", label: "Phone" },
//   { name: "position", type: "text", label: "Position" },
//   { name: "profile", type: "text", label: "Profile" },
//   { name: "portfolio", type: "text", label: "Portfolio" },
//   { name: "comment", type: "text", label: "Comment" },
//   { name: "english", type: "dropdown", label: "English" },
//   { name: "salary", type: "text", label: "Salary Expectation" },
//   { name: "source", type: "dropdown", label: "Source" },
//   { name: "profile", type: "text", label: "Profile" },
//   { name: "technologies", type: "dropdown", label: "Technologies" },
//   { name: "projects", type: "dropdown", label: "Projects" }
// ]}

class FilterWindow extends Component {
  filter = () => {
    let filtered = [];
    this.props.currentRows.map(row => {
      if (row.Name.includes("bad")) {
        if (row.Phone.includes("5")) {
          if (row.Position.includes("ont")) {
            if (row.Profile.includes("")) {
              if (row.Portfolio.includes("")) {
                if (row.Technologies.includes("")) {
                  if (row.English.includes("")) {
                    if (row["Salary Expectation"].includes("")) {
                      if (row.Source.includes("")) {
                        if (row.Status.includes("")) {
                          if (row.Projects.includes("")) {
                            filtered.push(row);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        return;
      }
    });
    this.props.filteredRows(filtered);
  };
  render() {
    return <button onClick={this.filter}>filter</button>;
  }
}

export default FilterWindow;
