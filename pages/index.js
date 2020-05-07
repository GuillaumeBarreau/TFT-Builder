import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Builder from '../components/Builder';
import style from './styled.module.css';

export default () => (
  <div className={style.mainContent}>
    {/* <Head title="Home" />
    <Nav /> */}
    <Builder></Builder>
  </div>
);
