import React from 'react';

import './App.css';
import Case from '../Case/Case';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';
import { evaluate } from 'mathjs';
import { useDisplayClearByEscape } from '../../hooks/useDisplayClearByEscape';

function App() {
  /* стейт состояния введенных значений*/
  const [inputValue, setInputValue] = React.useState("");
  /* стейт состояния результатов значений*/
  const [result, setResult] = React.useState("");

  /* стейт состояния очистки дисплея*/
  const [isClearedDisplay, setClearedDiplay] = React.useState(true);

  useDisplayClearByEscape(isClearedDisplay, handleDisplayClearByEsc);

  /*Обработчик числовых значений и математических знаков*/
  function handleButtonClick(event) {
    event.preventDefault();

    let value = event.target.innerHTML;/*текущее введенное значение*/
    let displayValue = inputValue + value;

    /*Проверка на количество введенных символов*/
    if (displayValue.length > 16) {
      return;
    }

    setInputValue(displayValue);
  }

  /*Обработчик кнопки "Backspace"*/
  function handleBackspaceButtonClick() {
    if (result !== "") {/*Если вывели результат*/
      setInputValue(result.toString().slice(0, -1));
      setResult("");
    } else { /*если введены числа, без расчета результата*/
      setInputValue((current) => {
        return current.slice(0, -1);
      });
    }
  }

  /*Обработчик кнопки "." для ввода десятичных знаков*/
  function handleComaButtonClick(event) {
    event.preventDefault();
    let value = event.target.innerHTML;/*текущее введенное значение*/
    if (inputValue.toString().includes(".")) {
      if (inputValue.length === 0) {
        setInputValue("0" + value);
      } else {
        setInputValue(inputValue + value);
      }
    } else {
      setInputValue(inputValue + value);
    }
  }

  /*Обработчик кнопки "Escape"*/
  function handleDisplayClearByEsc() {
    setInputValue("");
    setResult("");
    setClearedDiplay(true);
  }

  /*Обработчик кнопки "равно"*/
  function handleEqualButtonClick() {
    let answerResult = 0;
    let finaleValue = inputValue

    if (finaleValue.match("x")) {
      finaleValue = finaleValue.replaceAll("x", "*");
    } else if (finaleValue.match("÷")) {
      finaleValue = finaleValue.replaceAll("÷", "/");
    }

    answerResult = evaluate(finaleValue);
    setInputValue(answerResult);
    setResult(answerResult);
  }

  React.useEffect(() => {
    setClearedDiplay(false);
  }, [inputValue, result])

  return (
    <div className="page">
      <Case>
        <Display
          value={inputValue ? inputValue : result} />
        <Buttons
          onButtonClick={handleButtonClick}
          onBackspaceButtonClick={handleBackspaceButtonClick}
          onComaButtonClick={handleComaButtonClick}
          onEqualButtonClick={handleEqualButtonClick}
          onDisplayClearByEsc={handleDisplayClearByEsc}
        />
      </Case>
    </div>
  );
}

export default App;
