import styled from 'styled-components';

const StyledRegister = styled.div`
  position: absolute;
  z-index: 14;
  background: var(--color-black);
  top: 0;
  left: 0;

  .register {
    width: 100vw;
    height: 100vh;
    padding: 40px;
    position: relative;

    h2 {
      margin-bottom: 25px;
      font-size: 1.4rem;
    }

    /* NOTE: fix Register button styles */
    input:last-child {
      background: var(--color-white);
      font-weight: 600;
      border-radius: 30px;
      position: absolute;
      bottom: 40px;
      color: var(--color-black);
      /* left: 0;
      right: 0;
      margin: 0 40px; */
      /* margin: 0 auto; */
      width: 85%;
    }
  }
  @media only screen and (min-width: 768px) {
    .register {
      form,
      h2 {
        width: 450px;
        margin: 0 auto;
      }

      h2 {
      margin-bottom: 25px;
      font-size: 1.4rem;
    }

    input:last-child {
      width: 450px;
    }
    }
  }
`;

export default StyledRegister;
