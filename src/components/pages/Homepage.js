import React,{ useState } from 'react'
import iconplay from '../images/play.png';
import iconfoot from '../images/foot.png';
import iconsoc from '../images/soccer.png';
import iconhand from '../images/hand.png';
import icontest from '../images/test.png';
import iconbal from '../images/bal.png';
import iconlatest from '../images/latest.png';
import user from '../images/user.png';
import up from '../images/up.png';



import Not from './not.png'
import Pr from './pr.png'



const Homepage = () => {
    const [btnstate, setbtnStates] = useState(false);
function handleclick(){
  //
  setbtnStates(btnstate => !btnstate);
}
let toggleClasscheck = btnstate ? 'show' : 'hide';

  return (
    <>
  <div className='main-home'>
        <div className='row'>
        <div className='newwrapper-toggle'>

        <div  onClick={handleclick} className='toggle-btn'><i class="fa fa-search" aria-hidden="true"></i>
</div>
            <div className={`input xtra${toggleClasscheck}`}>
                <input type="search" value="search" />
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
    
  <div className='container explorepage-container'>
    <div className='row title-raed'><div className='row-title'><h2>Trending Themes</h2></div></div>
    <div className='row hot-items'>
        <div className='roundcol'>
           <div className='icon'><img src={iconplay} /></div>
           <div className='title'>Playing Today</div>
        </div>
        <div className='roundcol'>
           <div className='icon'><img src={iconfoot} /></div>
           <div className='title'>Top BBall</div>
        </div>
        <div className='roundcol'>
           <div className='icon'><img src={iconsoc} /></div>
           <div className='title'>Top Football</div>
        </div>
        <div className='roundcol'>
           <div className='icon'><img src={iconhand} /></div>
           <div className='title'>Top Baseball</div>
        </div>
        <div className='roundcol'>
           <div className='icon'><img src={icontest} /></div>
           <div className='title'>Top Soccer</div>
        </div>
        <div className='roundcol'>
           <div className='icon'><img src={iconbal} /></div>
           <div className='title'>Top MMA</div>
        </div>
        <div className='roundcol'>
           <div className='icon'><img src={iconlatest} /></div>
           <div className='title'>Buy the dip</div>
        </div>
    </div>
    <div className='row title-raed'><div className='row-title'><h2>Trending Players</h2></div></div>

    <div className='row trending-items'>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
    </div>
    <div className='row title-raed'><div className='row-title'><h2>Top Performers ($$$-$)</h2></div><div className='read'><a href='#' alt='read'>Read More</a></div></div>


    <div className='row trending-items'>
    <div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
    </div>
    <div className='row title-raed'><div className='row-title'><h2>Top Performers ($$$-$)</h2></div><div className='read'><a href='#' alt='read'>Read More</a></div></div>

    <div className='row trending-items'>
    <div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
<div className='user-profile cols'>
  <div className='imguser'><img src={user} /></div>
  <div className='titleuser'>S. Ehlinger</div>
  <div className='userdata'><img src={up} /><span className='updown'>$1.28 (+2.02%)</span></div>
</div>
    </div>

  </div>
 
    
            
        </div>
    </>
  )
}

export default Homepage;