import { useState } from 'react';
import styles from './info.module.scss';
import local from './local.json';

const Info = () => {
  const [lang, setLang] = useState('en');

  const setEnLang = e => {
    const { name } = e.target;
    if (lang === name) {
      return;
    }
    setLang(name);
  };
  const title1 = local.title1[lang];
  const title2 = local.title2[lang];
  const title3 = local.title3[lang];
  const title4 = local.title4[lang];

  return (
    <div className={styles.box}>
      <div className={styles.lang_wrapper}>
        <button
          className={lang === 'en' ? styles.current : styles.lang}
          name="en"
          onClick={setEnLang}
        >
          EN
        </button>
        <button
          className={lang === 'ua' ? styles.current : styles.lang}
          name="ua"
          onClick={setEnLang}
        >
          UA
        </button>
      </div>
      <div>
        <h2 className={styles.title}>Phone Book</h2>
        <p className={styles.text}>{title1}</p>
        <p className={styles.text}>{title2}</p>
        <p className={styles.text}>{title3}</p>
        <p className={styles.text}>{title4}</p>
      </div>
    </div>
  );
};
export default Info;
