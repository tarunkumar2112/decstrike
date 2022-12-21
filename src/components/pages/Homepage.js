import React from 'react'
import Graph from './graph.png'
import Ray from './ray.png'
import Not from './not.png'
import Pr from './pr.png'

const Homepage = () => {
  return (
    <>
    <div className='main-home'>
        <div className='row'>
            <div className='input'>
                <input type="search" value="search" />
            </div>
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
        <div className='row1'>
            <div className='col1-coins'>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
                <div className='box-item newitemextra'>
                

                </div>
                <div className='box-item newitemextra'>
                

                </div>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
                <div className='box-item'>
                    <div className='title'>
                        <h3>AAPL</h3>
                        <p>120 Shares</p>
                    </div>
                    <div className="graphs"><img src={Ray}
                alt='ray'
                /
                ></div>
                    <div className='url'>
                        <a href='/'>$105.4</a>
                    </div>

                </div>
            </div>
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
        </div>
    </div>
    </>
  )
}

export default Homepage;