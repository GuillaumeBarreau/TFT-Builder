import style from './Button.module.css';

export const Button = ({ onclick, children  }) => {
    return (
        <button
            className={style.mainContent}
            onClick={onclick}
        >
            {
                children
            }
            <span className={style.mainContent_Border}></span>
        </button>

    )
};
