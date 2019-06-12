import React, { Component } from "react";
import styles from "./ExportFile.module.css";
import ReactToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";

class ExportFile extends Component {
  state = {
    open: false
  };

  handlePdf = () => {
    console.log("pdf");
    const doc = new jsPDF();

    doc.autoTable({ html: "#html_to_excel" });
    doc.save("table.pdf");

    this.setState({ open: false });
  };

  render() {
    let content = this.state.open ? (
      <div className={styles.absoluteBox}>
        <button onClick={this.handlePdf} className={styles.optionBtn}>
          PDF
        </button>
        <button
          onClick={() => this.setState({ open: false })}
          className={styles.optionBtn}
        >
          <ReactToExcel
            table="html_to_excel"
            filename="candidates"
            sheet="sheet 1"
            buttonText="export"
          />
        </button>
      </div>
    ) : null;
    let buttonClass = this.state.open ? styles.openBtn : styles.exportBtn;
    return (
      <div className={styles.container}>
        <button
          className={buttonClass}
          onClick={() => {
            this.setState({ open: !this.state.open });
            console.log(this.state.open);
          }}
        >
          Export button
        </button>
        {content}
      </div>
    );
  }
}

export default ExportFile;
