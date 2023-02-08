import React from 'react';
import ReactGA from 'react-ga';
// import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "./themes/themes.js";


import Card from './componets/Card';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import Foto from './componets/Foto';
import RunningLine from './componets/RunningLine';
import CookiePolicy from './componets/CookiePolicy';


const TRACKING_ID = "G-F8CE2RP8XW";
ReactGA.initialize(TRACKING_ID);

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;


const App = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState(true);

  // const toggleDarkTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };
  // const [theme, setTheme] = useState("light");

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };


  return (
    <div>
        <Navbar/>
        <RunningLine/>
        <Foto/>
        <Card/>
            {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <GlobalStyles />
              <StyledApp>
                {/* Hello World 
                <button onClick={() => themeToggler()}>Change Theme color</button>
              </StyledApp>
            </ThemeProvider> */}
        <CookiePolicy/>
        <Footer/>
    </div>

   
    //   
    //   <Foto/>
    //   <div className={`${isDarkTheme ? 'dark-theme' : ''}`}>
    //         <button onClick={toggleDarkTheme}>
    //             {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    //         </button>
    //   </div>
    //   

 
  );
}

export default App;