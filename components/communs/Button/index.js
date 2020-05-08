import style from './styled.module.css';

export const Button = ({ onClick, children  }) => {
    return (
        <button
            className={style.mainContent}
            onClick={onClick}
        >
            {
                children
            }
            <span className={style.mainContent_Border}></span>
        </button>

    )
};
