import style from './styled.module.css';

export const BoardLane = ({ children, onDrop, dragOver }) => (
    <ul 
        className={style.mainContent}
        onDrop={onDrop}
        onDragOver={dragOver}
    >
        {children}
    </ul>
);
