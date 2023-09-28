import React from "react";
import './Buttons.css';
import buttonImage from '../../images/button-box__digits.svg'

function Buttons(props) {
    return (
        <section className="button-box">
            <div className="button-box__digits">
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>1</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>2</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>3</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>4</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>5</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>6</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>7</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>8</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>9</button>
                <button className="button-box__digits-item" type="button" onClick={props.onComaButtonClick}>.</button>
                <button className="button-box__digits-item" type="button" onClick={props.onButtonClick}>0</button>
                <button className="button-box__digits-item" type="button" onClick={props.onBackspaceButtonClick}>
                    <img className="button-box__digits-image" src={buttonImage} alt="кнопка удаления знака" />
                </button>
            </div>
            <div className="button-box__signs">
                <button className="button-box__signs-item" type="button" onClick={props.onButtonClick}>x</button>
                <button className="button-box__signs-item" type="button" onClick={props.onButtonClick}>÷</button>
                <button className="button-box__signs-item" type="button" onClick={props.onButtonClick}>+</button>
                <button className="button-box__signs-item" type="button" onClick={props.onButtonClick}>-</button>
                <button className="button-box__signs-item" type="button" onClick={props.onButtonClick}>%</button>
                <button className="button-box__signs-item" type="button" onClick={props.onButtonClick}>^</button>
                <button className="button-box__signs-item" type="button" onClick={props.onEqualButtonClick}>＝</button>
            </div>
        </section>
    );
}

export default Buttons;