import styled from "styled-components";
import { useEffect, useState } from "react";
import { searchVideo } from "../../API/Api";

const LandingPage = () => {
  const [state, setState] = useState<Array<{}>>([]);

  useEffect(() => {
    searchVideo().then((res: any) => {
      setState(res);
      console.log(res);
    });
    console.log("state: ", state);
  }, []);

  return <div>LandingPage</div>;
};

export default LandingPage;
