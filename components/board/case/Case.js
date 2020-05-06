import { useState } from "react";
import style from './Case.module.css';
import { CaseData } from './caseData/CaseData';
import { CaseTrait } from './caseTrait/CaseTrait';

export const Case = ({id, data, ...props}) => {
    
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
                                <CaseTrait data={data} />
                                <CaseData data={data} /> 
                            </>
                    }
                </div>
            </li>
        </>
    );
};
