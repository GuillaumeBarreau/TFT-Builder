import style from './Synergies.module.css';
import * as images from '../../data/set3/traits/tft3_traits.js';

export const Synergies = ({ synergies }) => {

    return (
        <ul className={style.mainContent}>
            {
                Object.keys(synergies).map(synergy => {

                    synergies[synergy].sets.forEach((set) => {

                        if ((synergies[synergy].count >= set.min)) {
                            synergies[synergy].level = set.style
                        }
                    });

                    return (
                        <li
                            className={
                                `${style.mainContent_item}` +
                                ` ${style[`synergiesLevel__${synergies[synergy].level}`]}`
                            }
                            key={synergies[synergy].key}
                        >
                            <p className={style.mainContent_itemTxt__count}>
                                {
                                    synergies[synergy].count
                                }
                            </p>
                            <p className={style.mainContent_itemTxt__name}>
                                {
                                    synergies[synergy].name
                                }
                            </p>
                            <ul className={style.mainContent_itemList}>
                                {
                                    synergies[synergy].sets.map((set, index) => {

                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    `${style.mainContent_itemList_item}` +
                                                    `${((synergies[synergy].count >= set.min && synergies[synergy].count <= set.max)
                                                        || synergies[synergy].count >= set.min && !set.max)
                                                        ? ` ${style.mainContent_itemList_itemSelected}`
                                                        : ''}`
                                                }
                                            >
                                                {
                                                    set.min
                                                }
                                            </li>
                                        )
                                    }

                                    )
                                }
                            </ul>
                            <img
                                className={style.mainContent_itemImage}
                                src={images[synergies[synergy].key.toLowerCase()]}
                            />
                        </li>
                    )
                })
            }
        </ul>

    )
};
