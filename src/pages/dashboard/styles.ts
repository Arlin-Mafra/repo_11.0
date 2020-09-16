import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;

  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
export const Repository = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    border-radius: 5px;
    background: #fff;
    display: block;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 20px;
    align-items: center;
    flex: 1;
  }

  strong {
    color: #3d3d4d;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    color: #a8a8b3;
    margin-top: 10px;
  }

  svg {
    margin-left: auto;
  }
`;
