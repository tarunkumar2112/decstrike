import React,{ useState } from 'react'
import Green from '../pages/ray.png'
import Red from '../pages/lowgraph.png'
import Info from './info.png'
import One from './one.png';
import Two from './two.png';
import Not from './not.png'
import Pr from './pr.png'



const Portfolio = () => {
  const [btnstate, setbtnStates] = useState(false);
function handleclick(){
  //
  setbtnStates(btnstate => !btnstate);
}
let toggleClasscheck = btnstate ? 'show' : 'hide';
  return (
    <>
     <div className='main-container portfolio-wraper'>
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
        <div className='portfolio-row react-tabs'>
            <div className='columns-flex large react-tabs__tab-list'>
              <div className='box-sizes stats'>
                <h1>Portfolio Value</h1>
                <h1 className='price'>$2,223.74</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat diam nec quam molestie vulputate. Nullam ac maximus tortor, eget lobortis elit.
                </p>
               <div className='graphone'>
                <img  
                src={One}
                alt='graph'
                description='graph values'
                />
               </div>
<div className='buying'>
  <h3>Buying Power</h3>
  <h2>$0.37</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat diam nec quam molestie vulputate. Nullam ac maximus tortor, eget lobortis elit.</p>
  <a className='learn-more'>Learn More</a>
</div>
  </div>
  <div className='transaction stats'>
  <ul>
    <li><span className='text'>WithDrawable Cash</span><span className='price-amt'>$0.37</span></li>
    <li><span className='text'>WithDrawable Cash</span><span className='price-amt'>$0.37</span></li>
    <li><span className='text'>WithDrawable Cash</span><span className='price-amt'>$0.37</span></li>
    <li><span className='text'>WithDrawable Cash</span><span className='price-amt'>$0.37</span></li>
    <li><span className='text'>WithDrawable Cash</span><span className='price-amt'>$0.37</span></li>
    <li><span className='text'>WithDrawable Cash</span><span className='price-amt'>$0.37</span></li>

  </ul>
</div>
            </div>
            <div className='columns-flex small react-tabs__tab-list'>
              <div className='box-small stats'>
                <div className='heading-top'>
                <h2>Portfolio name</h2>
                <h4>Portfolio Heathcheck</h4>
                </div>
                
                <div className='sm-row'>
                  <div className='colsml green'>
                    <div className='title'>
                     <h3>Last 30 Days</h3>
                     <p>+3.6%</p>
                     <p className='high'>High</p>
                      </div>
                     
                     <div className='graphs'>
                    
                    <img src={Green} alt='red'></img>
                  </div>
                 
                  </div>
                  <div className='colsml red'>
                  <div className='title'>
                     <h3>Last 30 Days</h3>
                     <p className='minus'>-7.6%</p>
                     <p className='low minus'>Low</p>
                      </div>
                  <div className='price-graph graphs'>
                    <img src={Red} alt='green'></img>
                  </div>
                
                  </div>

                </div>
                </div>
                <div className='bytype stats'>
                  <div className='heading'>
                    <h2>By Type</h2>
                    <img src={Info} alt="info"></img>
                  </div>
                  <div className='graph'>
                  <img  
                src={Two}
                alt='graph'
                description='graph values'
                />
                  </div>
                </div>
                <div className='bychoice stats'>
                <div className='heading'>
                    <h2>By Cource</h2>
                    <img src={Info} alt="info"></img>
                </div>
                <div className='graph'>
                <img  
                src={Two}
                alt='graph'
                description='graph values'
                />
                </div>
            </div>
        </div>
     </div>
     </div>
    </>
  );
}

export default Portfolio