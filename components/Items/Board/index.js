import PropTypes from 'prop-types';
import style from './styled.module.css';
import * as images from '../../../data/set3/items/tft3_items.js';
import { log } from 'util';

export const Board = ({ data }) => (
  <>
    <div className={style.mainContent_right}>
      <ul className={style.mainContent_rightTop}>
        {
          data.map((item) => {

            return (
              <li
                key={item.id}
                ata-id={item.id}
                className={style.mainContent_list}
              >
                <img
                  alt={item.name}
                  src={images[item.id]}
                  className={style.mainContent_list_image}
                />
              </li>
            )
          })
        }
      </ul>
      <div className={style.mainContent_rightBottom}>
        {
          data.map((item) => {
            return (
              <ul key={item.id}>
                {Object.keys(item.combination).map((element) => {

                  return (
                    <li 
                      key={item.combination[element]} 
                      className={style.mainContent_list}
                      id={`${item.id}__${element}`}
                    >
                      <img
                        alt={item.name}
                        src={images[item.combination[element]]}
                        className={style.mainContent_list_image}
                      />
                  </li>
                  )
                })}
              </ul>
            )
          })
        }
      </div>
    </div>
    <ul className={style.mainContent_left}>
      {
        data.map((item) => {

          return (
            <li
              key={item.id}
              data-id={item.id}
              className={style.mainContent_list}
            >
              <img
                alt={item.name}
                src={images[item.id]}
                className={style.mainContent_list_image}
              />
            </li>
          )
        })
      }
    </ul>
  </>
);

Board.propTypes = {
  data: PropTypes.array.isRequired
}