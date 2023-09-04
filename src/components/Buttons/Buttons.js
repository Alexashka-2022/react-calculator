import React from "react";
import './Buttons.css';
import buttonImage from '../../images/button-box__digits.svg'

function Buttons(props) {
    return (
        <section className="button-box">
            <div className="button-box__digits">
                <button className="button-box__digits-item" type="button">1</button>
                <button className="button-box__digits-item" type="button">2</button>
                <button className="button-box__digits-item" type="button">3</button>
                <button className="button-box__digits-item" type="button">4</button>
                <button className="button-box__digits-item" type="button">5</button>
                <button className="button-box__digits-item" type="button">6</button>
                <button className="button-box__digits-item" type="button">7</button>
                <button className="button-box__digits-item" type="button">8</button>
                <button className="button-box__digits-item" type="button">9</button>
                <button className="button-box__digits-item" type="button">.</button>
                <button className="button-box__digits-item" type="button">0</button>
                <button className="button-box__digits-item" type="button">
                    <img className="button-box__digits-image" src={buttonImage} alt="кнопка удаления знака" />
                </button>
            </div>
            <div className="button-box__signs">
                <button className="button-box__signs-item" type="button">× </button>
                <button className="button-box__signs-item" type="button">÷</button>
                <button className="button-box__signs-item" type="button">+</button>
                <button className="button-box__signs-item" type="button">-</button>
                <button className="button-box__signs-item" type="button">%</button>
                <button className="button-box__signs-item" type="button">^</button>
                <button className="button-box__signs-item" type="button">＝</button>
            </div>
        </section>
    );
}

export default Buttons;