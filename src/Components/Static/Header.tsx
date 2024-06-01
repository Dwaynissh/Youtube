import styled from "styled-components"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {BiSolidMicrophone} from "react-icons/bi"
import {RiVideoAddLine} from "react-icons/ri"
import {BsBell} from "react-icons/bs"

import logo from "../../Assets/youtubelogo-removebg-preview.png"

const Header = () => {
  return (
    <div>
      <MainHeader>
        <MainHeaderWrapp>
          <IconLogo>
            <AiOutlineMenu/>
            <img src={logo} alt="" />
          </IconLogo>
          <SearchVoice>
            <RoundDiv>
              <input type="search" placeholder="Search" />
              <DivSearchHolder>
                <AiOutlineSearch/>
              </DivSearchHolder>
            </RoundDiv>
            <Voice>
              <BiSolidMicrophone/>
            </Voice>
          </SearchVoice>
          <AllProfile>
              <Camera>
                <RiVideoAddLine/>
              </Camera>
              <Bell>
                <BsBell/>
              </Bell>
              <Profile>
                  D
              </Profile>
          </AllProfile>
        </MainHeaderWrapp>
      </MainHeader>
    </div>
  )
}

export default Header

// const Mainheader = styled.div`
  
// `;
// const Mainheader = styled.div`
  
// `;
// const Mainheader = styled.div`
  
// `;
const Profile = styled.div`
  border-radius: 50%;
  padding: 8px 15px;
  font-size: 18px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Bell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Camera = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AllProfile = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  font-size: 20px;
`;


const Voice = styled.div`
  border-radius: 50%;
  padding: 15px 15px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
`;
const DivSearchHolder = styled.div`
  height: 100%;
  width: 10%;
  font-size: 20px;
  background-color: whitesmoke;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border-left: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RoundDiv = styled.div`
  height: 50%;
  width: 70%;
  border: 1px solid grey;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
  input {
    outline: none;
    border: none;
    font-size: 17px;
    flex: 1;
  }
`;
const SearchVoice = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
const IconLogo = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  font-size: 25px;
  cursor: pointer;
  img{
    height: 63px;
    width: 150px;
  }
`;
const MainHeaderWrapp = styled.div`
  height: 70px;
  width: 97%;
  display: flex;
  justify-content: center;
`;
const MainHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;