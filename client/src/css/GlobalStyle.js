import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

/* Project- colors */
:root {
  --color-blue: #1D9BF0;
  --color-lightBlue: #1D9BF0;
  --color-black: #000;
  --color-grey: #6E767D;
  --color-lightGrey: #2F3336;
  --color-white: #ffffff;
  --color-silver: #eee;
  --color-warning: #ffd200;
  --color-danger: rgb(250, 7, 7);
  --color-success: rgb(118, 170, 14);
}

/* font- Roboto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-family: 'Roboto', sans-serif;  
  color: var(--color-white);
  background-color: var(--color-black);
}



/* section max-width 1280px */
.section-max-1380px {
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 80px;
}

/* paragraph default font size, color */
p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
}

.txt-white {
  color: var(--color-white);
}

/* button default size */
button {
  padding: 15px 25px;
  font-size: 1.3rem;
  border: none;
}

.btn-warning {
  background: var(--color-warning);
}

.btn-orange {
  background: var(--color-orange);
}

/* box-shadow */
.box-shadow {
  box-shadow: -1px 3px 8px 5px rgba(0, 0, 0, 0.16);
}

/* margin 20px all around */
.margin-20px {
  margin: 20px;
}

/* alerts */
.alert{
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: whitesmoke;
  color: #333;
}

.alert-danger{
  background: var(--color-danger);
  color: #fff
}

.alert-success{
  background: var(--color-success);
  color: #fff
}


/* margins */
.mb-3{
  margin-bottom: 420px;
}


label {
    display: block;
    font-size: 1rem;
    /* font-weight: 500; */
  }


`;
export default GlobalStyle;
