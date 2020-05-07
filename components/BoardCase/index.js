import { useState } from "react";
import style from './styled.module.css';
import { BoardCaseData } from '../BoardCaseData';
import { BoardCaseTrait } from '../BoardCaseTrait';

export const BoardCase = ({id, data, ...props}) => {
    
    return (
        <>
            <li className={style.mainContent} >
                <div className={style.mainContent_background}
                    className={
                        `${style.mainContent_background}` +
                        ` ${style[`mainContent_backgroundColorCost-0${data.cost}`]}`
                    }
                ></div>
                <div
                    className={style.mainContent_list} 
                    id={id}
                    draggable={true}
                    {...props}
                >
                    {
                        data.hasOwnProperty('name') && 
                            <>
                                <BoardCaseTrait data={data} />
                                <BoardCaseData data={data} /> 
                            </>
                    }
                </div>
            </li>
        </>
    );
};
