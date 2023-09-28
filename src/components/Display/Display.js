import React from "react";
import { Textfit } from "new-react-textfit";
import './Display.css';

function Display(props) {
    return (
        <section className="display">
            <Textfit mode="single" className="display__input" max={32} min={20}>{props.value}</Textfit>
        </section>
    );
}

export default Display;