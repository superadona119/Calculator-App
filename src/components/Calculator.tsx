import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Display from './Display';
import Keypad from './Keypad';

const add = (a: string, b: string) => Number(a) + Number(b);
const subtract = (a: string, b: string) => Number(a) - Number(b);
const multiply = (a: string, b: string) => Number(a) * Number(b);
const divide = (a: string, b: string) => Number(a) / Number(b);

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState<string>('0');
  const [operator, setOperator] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [historial, setHistorial] = useState<string>('');

  const OPERATORS: string[] = ['+', '-', 'x', '/'];
  const NUMBERS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const locale = 'en-US';
  const numberFormatOptions = {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  };

  const calculate = (operator: string) => {
    let calculatedResult: number;

    switch (operator) {
      case '+':
        calculatedResult = add(result, currentInput);
        break;
      case '-':
        calculatedResult = subtract(result, currentInput);
        break;
      case 'x':
        calculatedResult = multiply(result, currentInput);
        break;
      case '/':
        const divisor = currentInput;
        if (divisor !== '0') {
          calculatedResult = divide(result, currentInput);
        } else {
          toast(`You can't divide by zero`);
          calculatedResult = Number(result);
        }
        break;
      default:
        calculatedResult = 0;
    }

    return String(calculatedResult);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key;

    if (key === 'Enter' || key === '=') {
      handleClick('=');
    } else if (key === 'Escape') {
      handleClick('RESET');
    } else if (key === 'Backspace') {
      handleClick('DEL');
    } else if (key === '.') {
      handleClick('.');
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
      handleClick(key);
    } else if (/^\d$/.test(key)) {
      handleClick(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClick = (value: string) => {
    if (value === '0' && currentInput === '0') return;

    if (NUMBERS.includes(value) || value === '.') {
      handleNumericInput(value);
    } else if (OPERATORS.includes(value)) {
      handleOperatorInput(value);
    }
    handleSpecialInputs(value);
  };

  const handleNumericInput = (value: string) => {
    if (currentInput === '0') {
      value === '.'
        ? setCurrentInput((currentInput) => currentInput + value)
        : setCurrentInput(value);
    } else if (currentInput.length < 21) {
      let newValue;

      if (value === '.' && !currentInput.includes('.')) {
        newValue = `${currentInput}${value}`;
      } else if (value !== '.') {
        newValue = `${currentInput}${value}`;
      } else {
        newValue = currentInput;
      }

      setCurrentInput(newValue);
    }
  };

  const handleOperatorInput = (value: string) => {
    if (operator === '') {
      setResult(currentInput);
      setHistorial(
        `${Number(currentInput).toLocaleString(
          locale,
          numberFormatOptions
        )} ${value}`
      );
    } else if (currentInput === '0') {
      setHistorial(
        `${Number(result).toLocaleString(locale, numberFormatOptions)} ${value}`
      );
    } else {
      setResult(calculate(operator));
      setHistorial(
        `${Number(result).toLocaleString(locale, numberFormatOptions)} ${value}`
      );
    }
    setOperator(value);
    setCurrentInput('0');
  };

  const handleSpecialInputs = (value: string) => {
    switch (value) {
      case 'DEL':
        deleteLastChar(currentInput);
        break;
      case 'RESET':
        clearAll();
        break;
      case '=':
        handleEquals(value);
        break;
      default:
        break;
    }
  };

  const handleEquals = (value: string) => {
    operator === ''
      ? setHistorial(
          `${Number(result).toLocaleString(
            locale,
            numberFormatOptions
          )} ${value}`
        )
      : setHistorial(
          `${Number(result).toLocaleString(
            locale,
            numberFormatOptions
          )} ${operator} ${Number(currentInput).toLocaleString(
            locale,
            numberFormatOptions
          )} ${value}`
        );
    setResult(calculate(operator));
    setCurrentInput('0');
  };

  const deleteLastChar = (input: string) => {
    if (input.charAt(input.length - 2) === ',') {
      setCurrentInput(input.slice(0, -2));
    } else {
      input.length === 1
        ? setCurrentInput('0')
        : setCurrentInput(input.slice(0, -1));
    }
  };

  const clearAll = () => {
    setCurrentInput('0');
    setOperator('');
    setResult('0');
    setHistorial('');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='max-w-xl rounded-lg p-6 bg-calculator'>
        <ToastContainer position='top-center' theme='dark' />
        <div className='flex justify-between px-5'>
          <h1 className='flex items-end text-2xl font-bold text-displayText'>
            calc
          </h1>
          <ThemeSwitcher />
        </div>
        <Display
          result={
            currentInput === '0'
              ? Number(result).toLocaleString(locale, numberFormatOptions)
              : Number(currentInput).toLocaleString(locale, numberFormatOptions)
          }
          historial={historial}
        />
        <Keypad onButtonClick={handleClick} />
      </div>
    </div>
  );
}
