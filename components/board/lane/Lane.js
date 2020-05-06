import style from './Lane.module.css';

export const Lane = ({ children, onDrop, dragOver }) => (
    <ul 
        className={style.mainContent}
        onDrop={onDrop}
        onDragOver={dragOver}
    >
        {children}
    </ul>
);
