import { FC } from 'react';
import styles from './index.module.scss';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return <h3 className={styles.headerTitle}>{title}</h3>;
};

export default Header;
