import { useState } from "react";
import style from './styled.module.css';
import { BoardCaseData } from '../BoardCaseData';
import { BoardCaseTrait } from '../BoardCaseTrait';

export const BoardCase = ({ id, data, onClickAddChampion, onClickDeleteChampion}) => {
    
    return (
        <>
            <li className={style.mainContent} >
                <div
                    className={
                        `${style.mainContent_background}` +
                        `${Object.keys(data).length > 1 ? ` ${style[`mainContent_backgroundColorCost-0${data.cost}`]}` : '' }`
                    }
                ></div>
               <div
                    className={style.mainContent_list}
                    id={id}
                    onClick={onClickAddChampion}
                >
                    {
                        data.hasOwnProperty('name') &&
                        <>
                            <BoardCaseTrait data={data} />
                            <BoardCaseData
                                data={data}
                                onClickDeleteChampion={onClickDeleteChampion}
                                id={id}
                            />
                        </>
                    }
                </div>
               
            </li>
        </>
    );
};
