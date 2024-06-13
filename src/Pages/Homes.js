import React, { useState, useEffect } from 'react';
import '../Style/Home.css';
import { ResponsiveAppBar, Footer } from '../Components/index';
import { Grid } from '@mui/material';


const Homes = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <>


      <ResponsiveAppBar />

      <div className={`mySlides ${slideIndex === 0 ? 'active' : ''}`}>
        <div className="text-overlay">
          <p>
            <i>
              Keeping You Cool, <br />
              Every Breath,<br />
              Every Beat.
            </i>
          </p>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <img
              src="https://www.bowersoxair.com/wp-content/uploads/2019/06/airconditionertrends-1.jpeg"
              style={{ width: '100%', height: 'auto', maxHeight: '71.3vh', objectFit: 'cover' }}
              alt="Slide 2"
            />
          </Grid>
        </Grid>
      </div>

      <div className={`mySlides ${slideIndex === 1 ? 'active' : ''}`}>
        <div className="text-overlay">
          <p>
            <i>
              Chill Out in Every <br />
              Climate.
            </i>
          </p>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <img
              src="https://parkerairconditioning.com.au/wp-content/uploads/2016/06/specials.jpg"
              style={{ width: '100%', height: 'auto', maxHeight: '71.3vh', objectFit: 'cover' }}
              alt="Slide 2"
            />
          </Grid>
        </Grid>
      </div>

      <div className={`mySlides ${slideIndex === 2 ? 'active' : ''}`}>
        <div className="text-overlay">
          <p>
            <i>
              Bringing Comfort,  <br />
              One Degree at a <br />
              Time.
            </i>
          </p>
        </div>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <img
              src="https://th.bing.com/th/id/R.82e6c1f15cf388268662de8e766a3d6b?rik=JKnBZ%2bXBf4Q9Qg&riu=http%3a%2f%2fimg.zhuangxiutp.com%2fupload%2fnews%2f2019%2f0802%2fphotos%2fmiddle%2f20190802131211_8qt_5g2bavbo.jpg&ehk=0Lji%2bh24pKiLBzU5%2fsY2AuJr6ffM7Ye4MeZAc0HCFQc%3d&risl=&pid=ImgRaw&r=0"
              style={{ width: '100%', height: 'auto', maxHeight: '71.3vh', objectFit: 'cover' }}
              alt="Slide 2"
            />
          </Grid>
        </Grid>
      </div>

      <Grid container>
        <Grid item lg={5.5} md={5.5} sm={5.5} xs={5.5}></Grid>
        <Grid sx={{ margin: '7px' }}>
          <span className={`dot ${slideIndex === 0 ? 'active' : ''}`}></span>
          <span className={`dot ${slideIndex === 1 ? 'active' : ''}`}></span>
          <span className={`dot ${slideIndex === 2 ? 'active' : ''}`}></span>
        </Grid>
      </Grid>


      <Footer />
    </>
  );
};

export default Homes;
