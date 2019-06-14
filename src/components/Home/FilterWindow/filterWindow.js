import React, { Component } from "react";
import Modal from "../../Modal/Modal";

class FilterWindow extends Component {
  state = {
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
      comment: "",
      startDate: "",
      endDate: ""
    },
    projects: this.props.projects,
    technologies: this.props.technologies
  };
  handleChange = e => {
    this.setState({
      filterWindowValues: {
        ...this.state.filterWindowValues,
        [e.target.name]: e.target.value.toLowerCase()
      }
    });
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
      if (
        row.name.includes(this.state.filterWindowValues.name.toLowerCase()) &&
        row.phone.includes(this.state.filterWindowValues.phone.toLowerCase()) &&
        row.position.includes(
          this.state.filterWindowValues.position.toLowerCase()
        ) &&
        row.profile.includes(
          this.state.filterWindowValues.profile.toLowerCase()
        ) &&
        row.portfolio.includes(
          this.state.filterWindowValues.portfolio.toLowerCase()
        ) &&
        row.comment.includes(
          this.state.filterWindowValues.comment.toLocaleLowerCase()
        ) &&
        row.english.includes
      )
        return;
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
        // createProfile={this.filter}
        fields={[
          { name: "name", type: "text", label: "Name,Surname" },
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
          },
          { name: "startDate", type: "date", label: "From" },
          { name: "endDate", type: "date", label: "To" }
        ]}
        onChange={this.handleChange}
        handleMultiSelect={this.handleMultiSelect}
      />
    );
  }
}

export default FilterWindow;
