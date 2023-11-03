import React from 'react';

import './Modal.css';
import ReactDOM from 'react-dom';
import Card from "./Card";

function Backdrop (props) {
    return (<div className="backdrop" onClick={props.onClick}> </div>);
}

function ModalOverlay (props) {
    return (
        <div className="modal">
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

function  Modal (props)  {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />,
                document.getElementById('overlay-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                   title={props.title}
                   message={props.message}>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default Modal;
