import React from "react";
import './Case.css';

function Case(props) {
    return (
        < section className="case" > {props.children}</section>
    );
}

export default Case;