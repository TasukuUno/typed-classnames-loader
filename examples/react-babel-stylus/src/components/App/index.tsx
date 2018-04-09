import * as React from 'react';
import Button from '../Button';
import { cx, style } from './style.styl';

const App = () => {
  const sectionClassName = cx('section');
  return (
    <>
      <section className={sectionClassName}>
        <Button>button1</Button>
      </section>
      <section className={sectionClassName}>
        <Button primary>button2</Button>
      </section>
      <section className={sectionClassName}>
        <Button primary disabled>button3</Button>
      </section>
      <section className={sectionClassName}>
        <Button className={style.myButton}>button4</Button>
      </section>
    </>
  );
};

export default App;
