import { Footer } from '../components/communs/Footer';
import { LeaderBoard } from '../components/LeaderBoard';
import style from './LeaderBoard_styled.module.css';

export default () => {

  return (
    <>
      <div className={style.mainContent}>
          <LeaderBoard />
      </div>
      <Footer />
    </>
  )
};
