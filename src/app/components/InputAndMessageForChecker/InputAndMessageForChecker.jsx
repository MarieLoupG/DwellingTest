import React from 'react';
import { MaskField } from 'react-mask-field';
import { MessageForChecker } from './MessageForChecker';
import closeIcon from './images/icons/close.svg';
import './styles.css';

export const InputAndMessageForChecker = (props) => 
    <>
        <div className="inputContainer">
            <MaskField data-cy="cardNumberField" 
                        onChange={e => props.setCardNumber(e.target.value)} 
                        onBlur={e => props.setCardNumber(e.target.value)} 
                        placeholder="xxxx xxxx xxxx xxxx" 
                        mask="____ ____ ____ ____" 
                        replacement={{ _: /\d/ }} 
                        value={props.cardNumber}/>
            { props.cardNumber &&
                <a data-cy="cardNumberClear" className="close" onClick={() => { 
                                props.setCardNumber("");
                                props.setError(false);
                                props.setMessage("");
                            } 
                        } >
                    <img src={closeIcon} alt="Reset" title="Reset" />
                </a>
            }
        </div>
        {props.message && 
            <MessageForChecker cardNumber={props.cardNumber} message={props.message} />
        }
    </>;
