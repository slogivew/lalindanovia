import styles from './main.module.scss';

export default function Main({ children: children }: { children: JSX.Element }) {
  return <main className={styles.c_main}>{children}</main>;
}
