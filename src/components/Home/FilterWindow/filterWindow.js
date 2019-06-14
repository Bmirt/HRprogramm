import React, { Component } from "react";
import Modal from "../../Modal/Modal";

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
  state = {
    english: "",
    filterWindowValues: {
      name: "",
      phone: "",
      position: "",
      portfolio: "",
      profile: "",
      technologies: [""],
      english: "",
      source: "",
      status: "",
      projects: [""],
      startDate: "",
      endDate: ""
    },
    projects: this.props.projects,
    technologies: this.props.technologies
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase()
    });

    // this.setState({
    //   filterWindowValues: {
    //     ...this.state.filterWindowValues,
    //     [e.target.name]: e.target.value.toLowerCase()
    //   }
    // });
  };
  handleMultiSelect = (category, data) => {
    let dataStringified = [];
    data.map(item => {
      dataStringified.push(
        this.state[category].find(x => x.value == item).label
      );
    });
    if (category === "technologies") {
      this.setState({
        filterWindowValues: {
          technologies: dataStringified
        }
      });
    }
    if (category === "projects") {
      this.setState({
        filterWindowValues: { ...this.state.filterWindowValues, projects: data }
      });
    }
  };
  filter = () => {
    let filtered = [];
    this.props.currentRows.map(row => {
      if (row.Name.toLowerCase().includes(this.state.filterWindowValues.name)) {
        console.log("name");
        if (
          row.Phone.toLowerCase().includes(this.state.filterWindowValues.phone)
        ) {
          console.log("phone");
          if (
            row.Position.toLowerCase().includes(
              this.state.filterWindowValues.position
            )
          ) {
            console.log("position");
            if (
              row.Profile.toLowerCase().includes(
                this.state.filterWindowValues.profile
              )
            ) {
              console.log("profile");
              if (
                row.Portfolio.toLowerCase().includes(
                  this.state.filterWindowValues.portfolio
                )
              ) {
                console.log("portfolio");
                let found = false;
                this.state.filterWindowValues.technologies.map(tech => {
                  if (row.Projects.toLowerCase().includes(tech)) {
                    found = true;
                    return;
                  }
                });
                if (found) {
                  console.log("tech");
                  console.log(
                    "english:",
                    this.state.filterWindowValues.english
                  );
                  if (
                    row.English.toLowerCase() ===
                    this.state.filterWindowValues.english
                  ) {
                    if (
                      row.Source.toLowerCase().includes(
                        this.state.filterWindowValues.source
                      )
                    ) {
                      if (
                        row.Status.toLowerCase().includes(
                          this.state.filterWindowValues.status
                        )
                      ) {
                        let found = false;
                        this.state.filterWindowValues.projects.map(project => {
                          if (row.Projects.toLowerCase().includes(project)) {
                            found = true;
                            return;
                          }
                        });
                        if (found) {
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
    });
    this.props.filteredRows(filtered);
    console.log(filtered);
  };
  render() {
    return (
      <Modal
        title="Add Candidate"
        canCancel
        canConfirm
        onCancel={this.modalCancelHandler}
        createProfile={this.filter}
        fields={[
          {
            name: "name",
            type: "text",
            label: "Name,Surname"
          },
          { name: "phone", type: "number", label: "Phone" },
          { name: "position", type: "text", label: "Position" },
          { name: "profile", type: "text", label: "Profile" },
          { name: "portfolio", type: "text", label: "Portfolio" },
          { name: "comment", type: "text", label: "Comment" },
          {
            name: "english",
            type: "select",
            label: "English",
            options: [
              { value: "any", label: "any" },
              { value: "no english", label: "no english" },
              { value: "good", label: "good" },
              { value: "fluent", label: "fluent" }
            ]
          },
          {
            name: "source",
            type: "select",
            label: "Source",
            options: [
              { value: "any", label: "any" },
              { value: "Linkedin", label: "Linkedin" },
              { value: "Refference", label: "Refference" },
              { value: "Job Post", label: "Job Post" }
            ]
          },
          { name: "profile", type: "text", label: "Profile" },
          {
            name: "technologies",
            type: "multiSelect",
            label: "Technologies",
            options: this.state.technologies
          },
          {
            name: "projects",
            type: "multiSelect",
            label: "Projects",
            options: this.state.projects
          }
        ]}
        onChange={this.handleChange}
        handleMultiSelect={this.handleMultiSelect}
      />
    );
  }
}

export default FilterWindow;
