/* eslint-disable react/display-name */
import Builder from '../components/Builder';
import { Message } from '../components/communs/Message';
import { Footer } from '../components/communs/Footer';
import style from './Home_styled.module.css';
import { useState } from "react";
import { AlertContext } from "../contexts/AlertContext";

export const Home = () => {
  
  const [alert, setAlert] = useState({});

  return(
    <>
      <div className={style.mainContent}>
        <AlertContext.Provider value={{ alert, setAlert }}>
          <Builder />
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
