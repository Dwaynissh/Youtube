import react from "react";
import { styled } from "styled-components";

interface iCircle {
  text?: string;
  bg?: string;
  col?: string;
}

const ProfileProps: react.FC<iCircle> = ({ text, bg, col}) => {
  return (
    <div>
      <Circle bg={bg!} col={col!}>
        {text}
      </Circle>
    </div>
  );
};

export default ProfileProps;

const Circle = styled.div<{
  text?: string;
  bg?: string;
  col?: string;
}>`
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  border-radius: 50%;
  padding: 15px 20px;
  margin-left: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
