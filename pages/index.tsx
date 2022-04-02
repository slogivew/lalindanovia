import { Base } from 'components';
import styles from 'components/home/home.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

export default function Home(): JSX.Element {
  const router = useRouter();

  const [input, setInput] = useState({
    message: '',
    email: '',
    name: '',
    errors: {
      message: false,
      email: false,
      name: false,
    },
  });

  function handleInput(EVENT: {
    target: {
      name: string;
      value: string;
    };
  }) {
    setInput({
      ...input,
      [EVENT.target.name]: EVENT.target.value,
    });
  }

  useEffect(() => console.log(input), [input]);

  function Request({ method }: { method: 'POST' }) {
    if (method == 'POST') {
      if (input.name == '' || input.message == '') {
        setInput({
          ...input,
          errors: {
            ...input.errors,
            name: input.name.length < 1 ? true : false,
            message: input.message.length < 1 ? true : false,
          },
        });

        return;
      }

      router.push(
        `https://wa.me/573174270997?text=${encodeURIComponent(
          `[nombre] ${input.name}${input.email ? ' | [email] ' : ''}${input.email} | [mensaje] ${input.message}`
        )}`
      );
    }
  }

  return (
    <>
      <Head>
        <title>La Linda Novia | Inicio</title>
      </Head>

      <Base>
        <>
          <section className={styles.c_images}>
            <div className={styles.c_image}>
              <Image src={'/content/home/1-min.jpg'} alt='1' width={100} height={150} layout={'responsive'} priority />
            </div>

            <div className={styles.c_image}>
              <Image src={'/content/home/2-min.jpg'} alt='2' width={100} height={150} loading={'lazy'} layout={'responsive'} />
            </div>

            <div className={styles.c_image}>
              <Image src={'/content/home/3-min.jpg'} alt='3' width={100} height={150} loading={'lazy'} layout={'responsive'} />
            </div>
          </section>

          {/* <section className={styles.c_schedule}>
          <h3 id='horarios'>Horarios</h3>
        </section> */}

          <section className={styles.c_about}>
            <h3 id='sobre_nosotros'>Sobre nosotros</h3>

            <p>
              Vestidos de novia, primera comunión, quince años, bautizo, niños y niñas 👰💕
              <br />
              Confeccionamos sobre medidas 👗
              <br />
              Somos fabricantes
              <br />
              Alquiler y venta ✨
            </p>
          </section>

          <section className={styles.c_map}>
            <h3>Nuestro negocio</h3>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.6465087347894!2d-76.53226957080415!3d3.4503604998430477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a75de9720ff5%3A0x85fd375ec2da6593!2sLa%20Linda%20Novia!5e0!3m2!1ses-419!2sco!4v1637600683571!5m2!1ses-419!2sco'
              style={{ border: 0, width: '100%', height: '500px' }}
              loading='lazy'
            />
          </section>

          <section className={styles.c_contact}>
            <h3 id='contacto'>Contactanos</h3>

            <form onSubmit={(EVENT) => EVENT.preventDefault()} className={styles.c_form}>
              <label htmlFor='name'>Nombre *</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={(EVENT: {
                  target: {
                    value: string;
                    name: string;
                  };
                }) => handleInput(EVENT)}
                value={input.name}
                data-status={input.errors.name ? 'error' : undefined}
              />

              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={(EVENT: {
                  target: {
                    value: string;
                    name: string;
                  };
                }) => handleInput(EVENT)}
                value={input.email}
              />

              <label htmlFor='message'>Mensaje *</label>
              <textarea
                name='message'
                id='message'
                cols={30}
                rows={10}
                onChange={(EVENT: {
                  target: {
                    value: string;
                    name: string;
                  };
                }) => handleInput(EVENT)}
                value={input.message}
                data-status={input.errors.message ? 'error' : undefined}
              />

              <button onClick={() => Request({ method: 'POST' })}>Enviar</button>
            </form>
          </section>
        </>
      </Base>
    </>
  );
}
