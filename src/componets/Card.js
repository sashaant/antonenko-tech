import React from 'react';
import '../styles/Card.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Card = () => {
  // const data ={
  //   "name": "SASHA ANTONENKO",    
  // }

  return(
    <div className="card" >
        {/* <h1>{data.name}</h1> */}
            {/* <p>JS evangelist in development  and testing apps  <br/>Making imposible at JABRA <br/><br/> I take great pride in being a member of a team that continually strives to push the limits of what is possible. Our primary objective is to generate inventive solutions that have a meaningful impact on people's lives.</p> */}
             {/* <br/>
             <br/>
             <br/>
             <br/> */}
              {/* <Box sx={{ typography: 'body1' }}>
             <Link href="https://war.ukraine.ua/support-ukraine/">Find out how you can help.</Link>
             </Box> */}
            
            <h3> I stand with and support the Ukrainian people in light of the Russian invasion. 🇺🇦  </h3> 
            
            <Box sx={{ typography: 'body1' }}>
             <Link href="https://war.ukraine.ua/support-ukraine/">Find out how you can help</Link>
             </Box>
             <br/>
             <Stack direction="row" spacing={2}>
            <br/>
            <br/>
             <br/>
            <Button href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthlyhools.com/" variant="contained" color="success">

              DONATE TO SAVELIFE CHARITY FUND
            </Button>
            </Stack>
            
            {/* <p>Contact me:</p>
        <a href="mailto:oantonenko.dev@gmail.com">oantonenko.dev@gmail.com</a> */}
       
        {/* <Button variant="contained" href="mailto:oantonenko.dev@gmail.com">EMAIL ME</Button> */}
        
    </div>
  )
};

export default Card;