import react from "react";
import { styled } from "styled-components";

interface iButton {
  text?: string;
  bg?: string;
  col?: string;
  onClick?: any;
}

const ButtonProps: react.FC<iButton> = ({ text, bg, col}) => {
  return (
    <div>
      <NavButtons bg={bg!} col={col!}>
        {text}
      </NavButtons>
    </div>
  );
};

export default ButtonProps;

const NavButtons = styled.button<{
  text?: string;
  bg?: string;
  col?: string;
}>`
  padding: 18px 20px;
  margin: 7px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
