// result of classnames/bind is set as default import
import cx from './style.css';

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
button1.textContent = 'button1';
button2.textContent = 'button2';
button3.textContent = 'button3';

// get a hashed className
button1.className = cx('button');

// use an object for condition specification
button2.className = cx({
  button: true,
  'button--primary': true,
});

// can also use with pseudo-class
button3.className = cx('button', 'button--primary');
button3.disabled = true;

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
