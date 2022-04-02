import styles from './base.module.scss';
import Footer from './footer';
import Main from './main';
import Nav from './nav';

export default function Main_({ children: children }: { children: JSX.Element }): JSX.Element {
  return (
    <div className={styles.c_base}>
      <Nav />

      <Main>{children}</Main>

      <Footer />
    </div>
  );
}
