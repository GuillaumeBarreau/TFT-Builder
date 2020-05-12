import Head from '../components/head';
import Builder from '../components/Builder';
import style from './styled.module.css';

export default () => (
  <div className={style.mainContent}>
    {/* <Head title="Home" /> */}
    <Builder></Builder>
  </div>
);
