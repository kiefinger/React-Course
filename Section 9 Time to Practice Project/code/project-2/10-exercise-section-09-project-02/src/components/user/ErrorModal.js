import React from 'react';

import './ErrorModal.css';
import Card from "../UI/Card";

const ErrorModal = props => {
    return (
        <div className="backdrop">
            <Card className="modal" >
            <header className="header">
                    <h2 className="header" >{props.header}</h2>
            </header>
            <div className="content">
                  <p>{props.message}</p>
            </div>
            <footer className="action">
                <button className="button" onClick={props.ok}>OK</button>
            </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
