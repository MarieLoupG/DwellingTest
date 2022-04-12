import React from 'react';
import { InputAndMessageForChecker } from '../InputAndMessageForChecker/InputAndMessageForChecker';
const functions = require("../../functions");

export const FormForChecker = (props) => 
    <>
        <InputAndMessageForChecker cardNumber={props.cardNumber} setCardNumber={props.setCardNumber} message={props.message} setMessage={props.setMessage} setError={props.setError} />
        <button data-cy="cardNumberSubmit" 
                onClick={() => { 
                        const response = functions.checkCardNumber(props.cardNumber);
                        props.setError(response.error);
                        props.setMessage(response.message);
                    } 
                } >
            Check
        </button>
    </>;