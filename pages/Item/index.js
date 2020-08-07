/* eslint-disable react/display-name */
import { Footer } from '../../components/communs/Footer';
import style from './styled.module.css';
import { Items } from '../../components/Items';

export default () => {

  return (
    <div className={style.mainContent}>
      <Items />
    </div>
  )
};