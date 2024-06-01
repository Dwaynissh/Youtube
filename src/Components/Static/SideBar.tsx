import styled from "styled-components"
import {GoHomeFill} from "react-icons/go"
import {SiShortcut} from "react-icons/si"
import {MdOutlineSubscriptions} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"

const SideBar = () => {
  return (
    <div>
      <AllSidebar>
        <AllSideWrap>
          <Home>
            <GoHomeFill style={{fontSize:"35px"}}/>
            Home
          </Home>
          <Home>
            <SiShortcut style={{fontSize:"35px"}}/>
            Shorts
          </Home>
          <Home>
            <MdOutlineSubscriptions style={{fontSize:"35px"}}/>
            Subscriptions
          </Home>
          <Home>
            <MdOutlineVideoLibrary style={{fontSize:"35px"}}/>
            Library
          </Home>
        </AllSideWrap>
      </AllSidebar>
    </div>
  )
}

export default SideBar

const Home = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AllSideWrap = styled.div`
  height: 90%;
  width: 80%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
const AllSidebar = styled.div`
  height: calc(100vh - 80px);
  width: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
/* position: fixed; */
`;
