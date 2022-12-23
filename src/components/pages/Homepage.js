import React,{ useState } from 'react'
import Graph from './graph.png'
import Ray from './ray.png'
import Not from './not.png'
import Pr from './pr.png'
import Lowgraph from './lowgraph.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


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
    
    <Tabs>
    <TabList>
      <Tab> <div className='box-item'>
                    <div className='title'>
                        <h3>A. REED</h3>
                        <p>+8.67%</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$1.75</a>
                    </div>

                </div></Tab>
      <Tab><div className='box-item'>
                    <div className='title'>
                        <h3>C.BRADLEY</h3>
                        <p>+7.30%</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$0.7204</a>
                    </div>

                </div></Tab>
                <Tab>
                <div className='box-item'>
                    <div className='title'>
                        <h3>M. WHITE</h3>
                        <p>+6.82%</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$4.63</a>
                    </div>

                </div>
                </Tab>
                <Tab>
                <div className='box-item'>
                    <div className='title'>
                        <h3>R. SHAHEED</h3>
                        <p>+4.83%</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$2.17</a>
                    </div>

                </div>
                </Tab>
                <Tab>
                <div className='box-item'>
                    <div className='title'>
                        <h3>E. ENGRAM </h3>
                        <p>+3.55%</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$9.48</a>
                    </div>

                </div>
                </Tab>
                <Tab>
                <div className='box-item'>
                    <div className='title'>
                        <h3>Z. WILSON</h3>
                        <p className="minus">-27.47%</p>
                    </div>
                    <div className="graphs"><img src={Lowgraph}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$17.50</a>
                    </div>

                </div>
                </Tab>
                <Tab>
                <div className='box-item'>
                    <div className='title'>
                        <h3>Z. KNIGHT</h3>
                        <p className='minus'>-5.49%</p>
                    </div>
                    <div className="graphs"><img src={Lowgraph}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$2.54</a>
                    </div>

                </div>
                </Tab>
                <Tab>
                <div className='box-item'>
                    <div className='title'>
                        <h3>B. SHAPEN</h3>
                        <p className='minus'>-3.51%</p>
                    </div>
                    <div className="graphs"><img src={Lowgraph}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$1.62</a>
                    </div>

                </div> 
                </Tab>
<Tab>
<div className='box-item'>
                    <div className='title'>
                        <h3>G. WILSON</h3>
                        <p className='minus'>-3.30%</p>
                    </div>
                    <div className="graphs"><img src={Lowgraph}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$15.14</a>
                    </div>

                </div>
</Tab>
<Tab>
<div className='box-item'>
                    <div className='title'>
                        <h3>Z. JONES </h3>
                        <p className='minus'>-2.56%</p>
                    </div>
                    <div className="graphs"><img src={Lowgraph}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$8.36</a>
                    </div>

                </div>
</Tab>
    </TabList>
<div className='test'>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    <TabPanel>
    <div className='col2'>
              <div className='stats-img'>
                <img src={Graph}
                alt='graph'
                /
                >
              </div>
              <div className='stats'>
                <div className='titles'><h2>Stats</h2></div>
                <div className='listings'>
                    <ul>
                        <li>Open</li>
                        <li>High</li>
                        <li>low</li>
                        <li>52 wk high</li>
                        <li>52 wk low</li>
                    </ul>
                    <ul>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                        <li>215.77</li>
                    </ul>
                    <ul>
                        <li>Volume</li>
                        <li>avg Volume</li>
                        <li>low</li>
                        <li>mkt cap</li>
                        <li>pye ratio</li>
                        <li>dic/yield</li>
                    </ul>
                    <ul>
                        <li>2.71m</li>
                        <li>5.77m</li>
                        <li>29.258</li>
                        <li>215.77</li>
                        <li>-</li>
                        <li>0.00</li>
                    </ul>
                </div>
              </div>
              <div className='btns'>
                <a href="">Trsade TTCF Options</a>
              </div>
              <div className='about-us'>
                <h2>About Us</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <dic className='butn-flex'>
                <div className='btns'>
                <a href="">Sell</a>
              </div>
              <div className='btns'>
                <a href="">Buy</a>
              </div>
                </dic>
              </div>
            </div>
    </TabPanel>
    </div>
  </Tabs>
 
    
            
        </div>
    </>
  )
}

export default Homepage;