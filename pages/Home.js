/* eslint-disable react/display-name */
import { Builder } from '../components/Builder';
import { Footer } from '../components/communs/Footer';
import style from './Home_styled.module.css';

export default () => {

  return(
    <>
      <div className={style.mainContent}>
        <Builder />
      </div>
      <Footer />
    </>
  )
};
