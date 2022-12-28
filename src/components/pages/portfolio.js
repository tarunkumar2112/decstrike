import React from 'react'
import Green from '../pages/ray.png'
import Red from '../pages/lowgraph.png'
import Info from './info.png'
import One from './one.png';
import Two from './two.png';



const portfolio = () => {
  return (
    <>
     <div className='main-container portfolio-wraper'>
        <div className='portfolio-row'>
            <div className='columns-flex large'>
              <div className='box-sizes'>
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
  <div className='transaction'>
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
            <div className='columns-flex small'>
              <div className='box-small'>
                <h2>Portfolio name</h2>
                <h4>Portfolio Heathcheck</h4>
                <div className='sm-row'>
                  <div className='colsml green'>
                     <p>Last 30 Days</p>
                     <div className='price-graph'>
                    <h3>+3.6%</h3>
                    <img src={Green} alt='red'></img>
                  </div>
                  <span className='high'>High</span>
                  </div>
                  <div className='colsml red'>
                  <p>Last 30 Days</p>
                  <div className='price-graph'>
                    <h3>-7.6%</h3>
                    <img src={Red} alt='green'></img>
                  </div>
                  <span className='low'>Low</span>
                  </div>

                </div>
                </div>
                <div className='bytype'>
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
                <div className='bychoice'>
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

export default portfolio