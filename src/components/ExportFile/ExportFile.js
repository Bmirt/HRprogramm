import React, { Component } from "react";
import styles from "./ExportFile.module.css";
import ReactToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ExportFileIcon from "../../images/exportFile.png";

class ExportFile extends Component {
  state = {
    open: false
  };

  handlePdf = () => {
    const doc = new jsPDF({
      orientation: "landscape"
    });

    doc.autoTable({
      html: "#html_to_excel",
      theme: "grid",
      tableWidth: "wrap"
    });
    doc.save("table.pdf");

    this.setState({ open: false });
  };

  render() {
    let content = this.state.open ? (
      <div className={styles.absoluteBox}>
        <button onClick={this.handlePdf} className={styles.optionBtn}>
          PDF
        </button>
        <div onClick={() => this.setState({ open: false })}>
          <ReactToExcel
            className={styles.optionBtn}
            table="html_to_excel"
            filename="candidates"
            sheet="sheet 1"
            buttonText="Excel"
          />
        </div>
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
          <span className={styles.btnSpan}>Export</span>
          <img src={ExportFileIcon} alt="export" className={styles.btnIcon} />
        </button>
        {content}
      </div>
    );
  }
}

export default ExportFile;
