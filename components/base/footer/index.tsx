import Icons from 'components/icons';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className={styles.c_footer}>
        <div className={styles.c_blocks}>
          <div className={styles.c_address}>
            <h3>Direcciones</h3>

            <p>
              Calle 12 #6-54
              <br />
              Segundo piso
              <br />
              Cali, Valle del Cauca
            </p>
          </div>

          <div className={styles.c_network}>
            <h3>Redes</h3>

            <div className={styles.networks}>
              <div>
                <Icons.Phone />
                <a href='tel:+573174270997' target={'_blank'} rel='noreferrer'>
                  <span>+57 317 4270997</span>
                </a>
              </div>

              <div>
                <Icons.WhastApp />
                <a href='https://wa.lalindanovia.com' target={'_blank'} rel='noreferrer'>
                  <span>+57 317 4270997</span>
                </a>
              </div>

              <div>
                <Icons.Intagram />
                <a href='https://ig.lalindanovia.com' target={'_blank'} rel='noreferrer'>
                  <span> lalindanovia</span>
                </a>
              </div>

              <div>
                <Icons.Facebook />
                <a href='https://fb.lalindanovia.com' target={'_blank'} rel='noreferrer'>
                  <span>lalindanovia</span>
                </a>
              </div>

              <div>
                <Icons.Messenger />
                <a href='http://m.me/lalindanovia' target={'_blank'} rel='noreferrer'>
                  <span>ventas@lalindanovia.com</span>
                </a>
              </div>

              <div>
                <Icons.Email />
                <a href='mailto:ventas@lalindanovia.com' target={'_blank'} rel='noreferrer'>
                  <span>ventas@lalindanovia.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.c_copyright}>
        <p>La Linda Novia &copy; {new Date().getFullYear()}</p>

        <a href='https://slogive.com' target={'_blank'} rel='noreferrer'>
          Created by slogive
        </a>
      </div>
    </>
  );
}
