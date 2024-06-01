import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Static/Header";
import SideBar from "../Static/SideBar";


const Layout = () => {
  return (
    <div>
        
          <Header/>
        <Wrap>
          <SideBar/>
          <Outlet/>
        </Wrap>
    </div>
  )
}

export default Layout

const Wrap = styled.div`
display: flex;
`;