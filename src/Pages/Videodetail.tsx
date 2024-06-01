import styled from "styled-components"
import axios from "axios"
import {useState, useEffect} from "react"

const Videodetail = () => {
    let ourUrl = "https://api.quotable.io/random"
    const [setQuote, viewSetQuote] = useState([]);

    const getQuote = () => {
       axios.get(ourUrl).then(res =>{
        console.log(res.data.content);
        viewSetQuote(res.data.content)
       }).catch(error =>{
        console.log(error)
       })
    }
    // useEffect (()=>{
    //     async function getData() {
    //         const res = await fetch (ourUrl)
    //         const data = await res.json();
    //         viewSetQuote(data)
    //     }
    //     getData();
    //     console.log(setQuote, "All");

    // }, [])
  return (
    <div style={{width: "100%", height:"100%", display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
        <AllScreen>
            <VideoTextSection>
                <MainVideo>
                    <Button onClick={getQuote}>
                        {setQuote}
                    </Button>
                </MainVideo>
                <MaintextContents>

                </MaintextContents>
            </VideoTextSection>
            <CardAndPropsSection>

            </CardAndPropsSection>
        </AllScreen>
    </div>
  )
}

export default Videodetail

const Button = styled.button`
padding: 20px 25px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
cursor: pointer;
`;
const MaintextContents = styled.div`
height: 100vh;
width: 100%;
`;
const MainVideo = styled.div`
height: 100vh;
width: 100%;
`;
const CardAndPropsSection = styled.div`
height: 100vh;
width: 100%;
`;
const VideoTextSection = styled.div`
height: 100vh;
width: 100%;
`;
const AllScreen = styled.div`
height: 100vh;
width: 95%;
background-color: white;
`;