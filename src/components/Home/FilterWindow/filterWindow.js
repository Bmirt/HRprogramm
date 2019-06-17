import React, { Component } from "react";
import Modal from "../../Modal/Modal";
import moment from "moment";

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
      startDate: "1200-10-10",
      endDate: "3000-10-10"
    },
    startDate: "1200-10-10",
    endDate: "3000-10-10",
    projects: this.props.projects,
    technologies: this.props.technologies
  };
  handleChange = e => {
    let data =
      e.target.type == "date" && e.target.value == ""
        ? this.state[e.target.name]
        : e.target.value.toLowerCase();
    this.setState({
      filterWindowValues: {
        ...this.state.filterWindowValues,
        [e.target.name]: data
      }
    });
    console.log(this.state.filterWindowValues);
  };
  handleMultiSelect = (category, data) => {
    if (category === "technologies") {
      this.setState({
        filterWindowValues: {
          ...this.state.filterWindowValues,
          technologies: data
        }
      });
    }
    if (category === "projects") {
      this.setState({
        filterWindowValues: {
          ...this.state.filterWindowValues,
          projects: data
        }
      });
    }
    // console.log(this.state.filterWindowValues);
  };
  checkItemsInArray = (a, b) => {
    let result = true;
    for (var i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) result = false;
    }
    return result;
  };
  getIdsFromArrOfObjects = a => {
    return a.map(elem => {
      return elem.id;
    });
  };

  filter = () => {
    let filtered = [];
    this.props.currentRows.map(row => {
      if (
        row.name
          .toLowerCase()
          .includes(this.state.filterWindowValues.name.toLowerCase()) &&
        row.phone.includes(this.state.filterWindowValues.phone.toLowerCase()) &&
        row.position
          .toLowerCase()
          .includes(this.state.filterWindowValues.position.toLowerCase()) &&
        row.profile.includes(
          this.state.filterWindowValues.profile.toLowerCase()
        ) &&
        ((row.portfolio &&
          row.portfolio.includes(
            this.state.filterWindowValues.portfolio.toLowerCase()
          )) ||
          this.state.filterWindowValues.portfolio === "") &&
        row.comment
          .toLowerCase()
          .includes(this.state.filterWindowValues.comment.toLowerCase()) &&
        (row.english === this.state.filterWindowValues.english ||
          this.state.filterWindowValues.english === "" ||
          this.state.filterWindowValues.english === "notselected") &&
        (row.source === this.state.filterWindowValues.source ||
          this.state.filterWindowValues.source === "" ||
          this.state.filterWindowValues.source === "notselected") &&
        (row.status === this.state.filterWindowValues.status ||
          this.state.filterWindowValues.status === "" ||
          this.state.filterWindowValues.status === "notselected") &&
        (this.checkItemsInArray(
          this.state.filterWindowValues.technologies,
          this.getIdsFromArrOfObjects(row.technologies)
        ) ||
          this.state.filterWindowValues.technologies == "") &&
        (this.checkItemsInArray(
          this.state.filterWindowValues.projects,
          this.getIdsFromArrOfObjects(row.projects)
        ) ||
          this.state.filterWindowValues.projects == "") &&
        moment(
          moment(row.created_at)
            .format()
            .split("T")[0]
        ).isBetween(
          this.state.filterWindowValues.startDate,
          this.state.filterWindowValues.endDate
        )
      )
        filtered.push(row);
      this.props.closeFilter();
      return;
    });
    this.props.filteredRows(filtered);
  };

  render() {
    return (
      <Modal
        title="Add Candidate"
        canCancel
        canConfirm
        onCancel={this.props.closeFilter}
        createProfile={this.filter}
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
              { value: "Linkedin", label: "Linkedin" },
              { value: "Refference", label: "Refference" },
              { value: "Job Post", label: "Job Post" }
            ]
          },
          {
            name: "status",
            type: "select",
            label: "Status",
            options: [
              { value: "wrote on Linkedin", label: "wrote on Linkedin" },
              { value: "refused", label: "refused" },
              { value: "interested", label: "interested" },
              { value: "rejected", label: "rejected" },
              { value: "shortlisted", label: "shortlisted" },
              { value: "hired", label: "hired" }
            ]
          },
          {
            name: "technologies",
            type: "multiSelect",
            label: "Technologies",
            options: this.props.technologies.map(item => {
              return { value: item.id, label: item.title };
            })
          },
          {
            name: "projects",
            type: "multiSelect",
            label: "Projects",
            options: this.props.projects.map(item => {
              return { value: item.id, label: item.title };
            })
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
