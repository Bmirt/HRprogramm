import React from 'react';
import Classes from './Modal.module.css';

const modal = props =>{
    return(
    <div className={Classes.modal}>
        <header className={Classes.modal_header}>
            <h1>{props.title}</h1>
        </header>
        <section className={Classes.modal_content}>
            {props.children}
        </section>
        <section className={Classes.modal_actions}> 
            {props.canCancel && <button className={Classes.modal_btn} onClick={props.onCancel}>Cancel</button>}
            {props.canConfirm && <button className={Classes.modal_btn} onClick={props.onConfirm}>Add</button>}
        </section>
    </div>
    )
}

export default modal