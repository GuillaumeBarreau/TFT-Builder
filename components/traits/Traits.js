import style from './Traits.module.css';
import * as images from '../../data/set3/traits/tft3_traits.js';
import { Button } from '../communs/button/Button';
import { useState, useEffect } from "react";

export const Traits = ({ traits, onclick, traitReset, traitSelected }) => {
    const [menuDisplay, setMenuDisplay] = useState(false);

    return (
        <>
            <Button
                onclick={() => setMenuDisplay(!menuDisplay)}
            >
                Filter
            </Button>
            <ul className={
                `${style.mainContent}` +
                `${menuDisplay ? ` ${style.menuSelected}` : ''}`
            }
            >
                {
                    traits.map(trait => (
                        <li
                            className={
                                `${style.mainContent_item}` +
                                `${traitSelected.indexOf(trait.key) !== -1 ? ` ${style.mainContent_itemSlected}` : ''}`
                            }
                            key={trait.key}
                        >
                            <button
                                className={style.mainContent_itemButton}
                                onClick={() => onclick(trait.key)}
                            >

                                <img
                                    alt={trait.name}
                                    className={style.mainContent_image}
                                    src={images[trait.key.toLowerCase()]}
                                />
                                <p
                                    className={style.mainContent_txt}
                                >
                                    {
                                        trait.name
                                    }
                                </p>
                            </button>
                        </li>
                    ))
                }
                <div
                    className={style.mainContent_ButtonContent}
                >
                    <Button
                        onclick={traitReset}
                    >
                        Reset
                    </Button>
                    <Button
                        onclick={() => setMenuDisplay(!menuDisplay)}
                    >
                        close
                    </Button>
                </div>
            </ul>
        </>
    )
};
