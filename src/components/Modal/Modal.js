import React from "react";
import Classes from "./Modal.module.css";

const modal = props => {
  console.log(props.profile, "profile");
  return (
    <div className={Classes.modal}>
      <header className={Classes.modal_header}>
        <h1>{props.title}</h1>
      </header>
      <section className={Classes.modal_content}>
        {props.fields.map(item => {
          return (
            <div className="form-control">
              <label htmlFor={item.name}>{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                value={props.profile ? props.profile.Phone : " "}
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
