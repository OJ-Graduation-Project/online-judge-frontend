import styled from 'styled-components';

interface INav {
  href?: string;
}

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  width: 100%;
  top: 0;
  justify-content: flex-middle;
  margin-top: 0px;
  align-items: center;
  font-size: 20px;
  height: 70px;
  padding-left:60px;
  background-color:#f3f6f4;
  border-bottom:2px outset #eeeeee;
  
  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #0DADEA;
    }
  }

  li {
    padding: 28px 30px;
  }
`

