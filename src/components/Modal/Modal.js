import React from "react";
import Classes from "./Modal.module.css";
import MultiSelect from "../MultiSelect/MultiSelect";

const modal = props => {
  return (
    <div className={Classes.modal}>
      <header className={Classes.modal_header}>
        <h1>{props.title}</h1>
      </header>
      <section className={Classes.modal_content}>
        {props.fields.map(item => {
          if (item.type === "select") {
            const content = item.options ? (
              <div className="form-control">
                <label htmlFor={item.name}>{item.label}</label>
                <select>
                  {item.options.map(itm => {
                    return <option>{itm.value}</option>;
                  })}
                </select>
              </div>
            ) : null;
            return <options>{content}</options>;
          } else if (item.type === "multiSelect") {
            return (
              <div className="form-control">
                <label htmlFor={item.name}>{item.label}</label>
                <div style={{ display: "inline-block", width: 300 }}>
                  <MultiSelect
                    options={item.options}
                    onChangeCallback={response => console.log(response)}
                  />
                </div>
              </div>
            );
          } else
            return (
              <div className="form-control">
                <label htmlFor={item.name}>{item.label}</label>
                <input
                  // placeholder={item.name}
                  type={item.type}
                  name={item.name}
                  // value={props.profile ? props.profile.Phone : props.value}
                  onChange={props.onChange}
                />
              </div>
            );
        })}
      </section>
      <section className={Classes.modal_actions}>
        {props.canCancel && (
          <button className={Classes.modal_btn} onClick={props.onCancel}>
            Cancel
          </button>
        )}
        {props.canConfirm && (
          <button className={Classes.modal_btn} onClick={props.onConfirm}>
            Add
          </button>
        )}
      </section>
    </div>
  );
};

export default modal;
