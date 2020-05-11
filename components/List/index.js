import style from './styled.module.css';

export const List = ({ children }) => {
    
    return (
        <ul 
            className={style.mainContent}
         >
           {children}
        </ul>
    )
};
