import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8d3;
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 60px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 78px;
      width: 78px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;
export const IssuesInfo = styled.div`
  margin-top: 80px;

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
  }
`;
