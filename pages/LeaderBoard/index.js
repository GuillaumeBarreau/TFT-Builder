import { Message } from '../../components/communs/Message';
import { Footer } from '../../components/communs/Footer';
import { LeaderBoard } from '../../components/LeaderBoard';
import { AlertContext } from "../../contexts/AlertContext";
import style from './styled.module.css';
import { useState } from "react";

export default () => {

  const [alert, setAlert] = useState({});

  return (
    <>
      <div className={style.mainContent}>
        <AlertContext.Provider value={{ alert, setAlert }}>
          <LeaderBoard />
        </AlertContext.Provider>
        {
          alert.message && (
            <Message
              alert={alert}
              onClick={setAlert}
            />
          )
        }
      </div>
      <Footer />
    </>
  )
};
