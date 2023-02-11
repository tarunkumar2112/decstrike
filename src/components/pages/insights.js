import React,{ useState } from 'react'
import Main from '../images/marketmnain.png'
import Not from './not.png'
import Pr from './pr.png'
import Date from '../images/date.png'
import Us from '../images/us.png'
import Tag from '../images/tag.png'
import Arrow from '../images/arrowss.png'
import Pro from '../images/proplayer.png'
import Gs from '../images/Maskgroup.png'





const Insights = () => {
  const [btnstate, setbtnStates] = useState(false);
function handleclick(){
  //
  setbtnStates(btnstate => !btnstate);
}
let toggleClasscheck = btnstate ? 'show' : 'hide';
  return (
    <>
<div className='main-container insight-page-main-class'>
<div className='row'>
        <div className='newwrapper-toggle'>

        <div  onClick={handleclick} className='toggle-btn'><i class="fa fa-search" aria-hidden="true"></i>
</div>
            <div className={`input xtra${toggleClasscheck}`}>
               <from> <input type="text" placeholder="search" /></from>
            </div></div>
            <div className='icon-pic'>
                <div className='icon'><img src={Not}
                alt='ray'
                /
                ></div>
                <div className='profile'><img src={Pr}
                alt='ray'
                /
                ></div>
            </div>
        </div>
   <div className='row'>
<div className='col imgsection'>
<div className='image-box-col'>
  <img src={Main}
  alt='main-marketplace' 
  /
  > 
  </div>
  <div className='text-box-col'>
  <p>
  Dig into insights, updates, and tricksof the trade from our team of expert analysts.
  </p>
  </div>
</div>
   </div>
   <div className='row top-section-box'>
<div className='col left-sec'>
  <img src={Gs} alt="gamer" />
</div>
<div className='col right-sec'>
  <div className='main-date-section'>
    <span><img src={Date} /><p>2/6/2023</p></span>
    <span><img src={Us} /><p className='green'>Akash Patel</p></span>
    <span><img src={Tag} /><p className='green'>Football</p></span>


  </div>
  <div className='cionnetn-title'>
    <h3>Preparing for the Offseason on Dexstrike</h3>
    <p>Mojo is a sports stock market that allows you to bet on the careers of athletes. The share price is like a traditional "line" in Vegas, but instead of a stat like total touchdowns, you're betting on career stats!</p>
    <a href='#' className='greene'>Read More</a>
  </div>
</div>
   </div>
  </div> 
  <div className='main-container second-section'>
<div className='row section-two'>
  <div className='bagckround'><div className='col left same'>
<h4>Dexstrike Case Study</h4>
<p>Miami Dolphins QBs: 2022</p>
<div className='group-people'>
  <span><img src={Pro} alt='users' /><p>+28%</p></span>
  <span><img src={Pro} alt='users' /><p>+8%</p></span>
  <span><img src={Pro} alt='users' /><p>+51%</p></span>

</div>
<div className='more-info'>
  <div className='leftinfo'><h5>Miami Dolphins QBS</h5></div>
  <div className='rightinfo'>
    <div className='group-flex'>
      <span>Week 1</span>
      <span><img src={Arrow} /></span>
      <span>Week 8</span>
    </div>
  </div>
</div>
  </div>
  <div className='texts'><p>Numerous opportunities to profit over short periods of time</p><a href="#">Read More</a></div>

  </div>
  <div className='bagckround'>
  <div className='col right same'>
  <h4>Dexstrike Case Study</h4>
<p>Miami Dolphins QBs: 2022</p>
<div className='group-people'>
  <span><img src={Pro} alt='users' /><p>+28%</p></span>
  <span><img src={Pro} alt='users' /><p>+8%</p></span>
  <span><img src={Pro} alt='users' /><p>+51%</p></span>

</div>
<div className='more-info'>
  <div className='leftinfo'><h5>Miami Dolphins QBS</h5></div>
  <div className='rightinfo'>
    <div className='group-flex'>
      <span>Week 1</span>
      <span><img src={Arrow} /></span>
      <span>Week 8</span>
    </div>
  </div>
</div>

    </div>
    <div className='texts'><p>The QB battle between Matt Ryan and Sam Ehlinger has led to some CRAZY price movement</p><a href="#">Read More</a></div>

    </div>
</div>
  </div>
  <div className='main-container latest-news'>
    <h3>LATEST NEWS</h3>
    <div className='noflex'>
      <div className='col news-col'>
        <div className='lefty'><img src={Gs} /></div>
        <div className='righty'><div className='listing'>
          <ul>
            <li>2/6/2023</li>
            <li>Football</li>
            <li>Akash</li>
          </ul>
          </div>
          <div className='contents'>
            <h4>Preparing for the Offseason on Mojo</h4>
            <p>Three buys as we set our sights towards the offseason!</p>
            <a href="#" className='reads'>Read More</a>
          </div>
          </div>
      </div>
      <div className='col news-col'>
        <div className='lefty'><img src={Gs} /></div>
        <div className='righty'><div className='listing'>
          <ul>
            <li>2/6/2023</li>
            <li>Football</li>
            <li>Akash</li>
          </ul>
          </div>
          <div className='contents'>
            <h4>Preparing for the Offseason on Mojo</h4>
            <p>Three buys as we set our sights towards the offseason!</p>
            <a href="#" className='reads'>Read More</a>
          </div>
          </div>
      </div>
      <div className='col news-col'>
        <div className='lefty'><img src={Gs} /></div>
        <div className='righty'><div className='listing'>
          <ul>
            <li>2/6/2023</li>
            <li>Football</li>
            <li>Akash</li>
          </ul>
          </div>
          <div className='contents'>
            <h4>Preparing for the Offseason on Mojo</h4>
            <p>Three buys as we set our sights towards the offseason!</p>
            <a href="#" className='reads'>Read More</a>
          </div>
          </div>
      </div>
      <div className='col news-col'>
        <div className='lefty'><img src={Gs} /></div>
        <div className='righty'><div className='listing'>
          <ul>
            <li>2/6/2023</li>
            <li>Football</li>
            <li>Akash</li>
          </ul>
          </div>
          <div className='contents'>
            <h4>Preparing for the Offseason on Mojo</h4>
            <p>Three buys as we set our sights towards the offseason!</p>
            <a href="#" className='reads'>Read More</a>
          </div>
          </div>
      </div>
      <div className='col news-col'>
        <div className='lefty'><img src={Gs} /></div>
        <div className='righty'><div className='listing'>
          <ul>
            <li>2/6/2023</li>
            <li>Football</li>
            <li>Akash</li>
          </ul>
          </div>
          <div className='contents'>
            <h4>Preparing for the Offseason on Mojo</h4>
            <p>Three buys as we set our sights towards the offseason!</p>
            <a href="#" className='reads'>Read More</a>
          </div>
          </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Insights