import styled from "styled-components"
import CardProps from "../Components/Props/CardProps"
import ProfileProps from "../Components/Props/ProfileProps"
import {searchVideo} from "../API/Api"
import {useState, useEffect} from "react"
// import vid from "../Assets/Videos/Abstractvid.mp4"
// import { NavLink } from "react-router-dom"


const MainScreen = () => {
  const [state, setState] = useState<Array<{}>>([]);
  // useEffect(() => {
  //   searchVideo().then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  searchVideo()
  console.log("reading: ", state);
  return (
    <div >
      <MainScreenn>
        <MainScreenWrapp>
          <NavButtonHolder>
            <CardProps text="All" bg="#030303" col="#fff"/>
            <CardProps text="Manchester United F.C."/>
            <CardProps text="Music"/>
            <CardProps text="Apple"/>
            <CardProps text="Premier League"/>
            <CardProps text="Live"/>
            <CardProps text="AfroBeat"/>
            <CardProps text="Drag Racing"/>
            <CardProps text="Skills"/>
            <CardProps text="Arsenal F.C."/>
            <CardProps text="Hollywood"/>
            <CardProps text="MrBeast"/>
            <h1>Hello</h1>

          </NavButtonHolder>
          <AllCards>
            <YoutubeCard>
              {/* <NavLink to="/videodetail" style={{textDecoration: "none"}}> */}
                <Video>
                  {/* <video src={vid} autoPlay loop muted></video> */}
                  <VideoTime>
                    <Timer> 12.15</Timer>
                  </VideoTime>
                </Video>
              {/* </NavLink> */}
              <ProfileTextHold>
                <Left>
                  <ProfileProps bg="black" text="D" col="white"/>
                </Left>
                <Right>
                  <Hold>
                    <span>Most ENTERTAINING Man United Games In <br /> Old Trafford 2023</span>
                  </Hold>
                  <Hold>
                    Score TV
                  </Hold>
                  <Hold>
                    1.6M views • 4 days ago
                  </Hold>
                </Right>
              </ProfileTextHold>
            </YoutubeCard>
          </AllCards>
        </MainScreenWrapp>
      </MainScreenn>
      
    </div>
  )
}

export default MainScreen

const Hold = styled.div`
height: 40%;
width: 100%;
margin-bottom: 15px;
`;

const Right = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  span{
    font-weight: bold;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ProfileTextHold = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Timer = styled.div`
  height: 100%;
  width: 12%;
  background-color: black;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoTime = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Video = styled.div`
  height: 70%;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: lawngreen;
  /* video{
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  } */
`;

const YoutubeCard = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;
const AllCards = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const NavButtonHolder = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;
const MainScreenWrapp = styled.div`
  height: 100%;
  width: 98%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const MainScreenn = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;