import './App.css';
import { useState, useEffect } from 'react';
import logo1 from '../src/img/logo4.png';
import logo2 from '../src/img/logo5.png';

import mission from '../src/img/mission.jpg';
import success from '../src/img/success.jpg';
import about from '../src/img/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { InlineWidget } from "react-calendly";
// ICONS
import { IoClose } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { faUserTie, faWandMagicSparkles, faBarsProgress, faPhoneVolume, faEnvelopeOpenText, faHouseChimney, faUserGroup, faLayerGroup, faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");
  const [openMenu, setOpenMenu] = useState(false);
  
  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  useEffect(() => {
    AOS.init({
      duration: 1500, // You can set your desired animation duration here
    });
  }, []);
  


  return (
    <div className="App">
      <div className='header'>
        <div className='container'>
          <a href=''><img src={mode == 'light' ? logo2 : logo1}/></a>
          <div className={`links ${openMenu ? 'active' : ''}`}>
            <a href='#services'>services</a>
            <a href='#about'>about</a>
            <a href='#mission'>our mission</a>
            <a className='main-button' href='#bockCall'>bock a call</a>
          </div>
          <div className='darkLight' style={{marginRight: openMenu ? '-5px' : '0px'}}>
            {mode === "light" ? (
              <DarkModeOutlinedIcon
                onClick={() => {
                  setMode("dark");
                  localStorage.setItem("theme", "dark");
                }}
              />
            ) : (
              <LightModeOutlinedIcon
                onClick={() => {
                  setMode("light");
                  localStorage.setItem("theme", "light");
                }}
              />
            )}
          </div>

          {openMenu ? (
            <IoClose className='bar close' style={{fontSize: '37px'}}  onClick={() => {
              setOpenMenu(false);
            }}/>
            ) : (
            <FontAwesomeIcon icon={faBars} className='bar' onClick={() => {
              setOpenMenu(true);
            }}/>
          )}
        </div>
      </div>
      <div className='landing'>
          <div className='image'></div>
        <div data-aos="zoom-in-left" className='main-holder container'>
          <p>Talk Homes</p>
          <h3>Investors Business Solutions</h3>
          <p>Welcome to Investors’ Business Solutions, your trusted partner in generating leads and driving success in the real estate industry. We specialize in providing top-notch cold calling services to real estate investors, realtors and brokers connecting them with motivated sellers of properties.</p>
          <div className='bottomSide'>
            <a className='main-button' href=''>get started now</a>
            <div className='holder'>
              <h4>Call us if you</h4>
              <p>had any question or concern</p>
            </div>
          </div>
        </div>
      </div>
      <div className='services container' id='services'>
      <h2 className='section-title'>We are skilled in identifying and engaging with motivated sellers who are eager to sell their properties quickly and at favorable terms</h2>
      <div className='head'>
        <h4 data-aos="zoom-in-right">services we provide</h4>
        <a className='main-button' href='#'>Get Started</a>
      </div>
      <div className='cards'>
        <div data-aos="zoom-in-right" className='card'>
          <button>
            <div>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>lead generation & cold calling</h3>
            </div> 
            <FaChevronDown />
          </button>
          <div className='hideHight'>
          <ul>
            <li>Top notch exper
              ienced Telemarketers provided with daily training to make sure they are up to date with anything real estate related</li>
            <li>9 Hours of cold calling per agent per day.</li>
            <li>25 or 44 Qualified Leads per agent per month based on your qualifications.</li>
            <li>We provide Xencall dialer for best performance.</li>
            <li>We provide Spanish speakers telemarketers if needed.</li>
          </ul>
          </div>
        </div>
        <div data-aos="zoom-in-left" className='card'>
          <button>
            <div>
            <FontAwesomeIcon icon={faBarsProgress} />
            <h3>skip tracing & data managment</h3>
            </div> 
            <FaChevronDown />
          </button>
          <div className='hideHight'>
            <p>In the real estate industry, skip tracing and data management are crucial. Data managers are responsible for efficiently organizing, analyzing, and retrieving data, including skip tracing and list-stacking. They ensure the accuracy and accessibility of data.We use this to dial in on whichever area you are targeting .</p>
          </div>
        </div>
        <div data-aos="zoom-in-right" className='card'>
          <button>
            <div>
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <h3>Quality assurance</h3>
            </div> 
            <FaChevronDown />
          </button>
          <div className='hideHight'>
          <p>auditors to check the leads before sending them to your crm. This step ensures that you receive high-quality leads that matches your specific criteria .</p>
          </div>
        </div>
        <div data-aos="zoom-in-left" className='card'>
          <button>
            <div>
            <FontAwesomeIcon icon={faSlack} />
            <h3>lead  managment</h3>
            </div> 
            <FaChevronDown />
          </button>
          <div className='hideHight'>
            <p>Our acquisition team includes professionals who specialize in acquisitions, negotiating deals with property owners on your behalf. Additionally, we have closers who excel at finalizing and closing deals with the owners . With their expertise, you can rely on us to handle the negotiation and closing processes seamlessly.</p>
          </div>
        </div>
      </div>
      </div>
      <div className='success container'>
        <img src={success}/>
        <div className='text'>
          <h2>let us drive your success in the real estate market.</h2>
          <p className='card'>Our mission is to help you seize the best investment prospects or serve your clients more effectively as real estate professional by leveraging our expertise in cold calling.</p>
          <p className='card'>Our team of skilled professionals is committed to identifying and engaging with homeowners who are actively looking to sell their homes, ensuring a constant flow of promising leads for your consideration.</p>
          <p className='card'>What sets us apart is our commitment to cost-effectiveness and efficiency. We strive to provide our clients, including real estate investors, realtors, and brokers, with the most competitive prices in the industry without compromising on the quality of our services.</p>
        </div>
      </div>
      <div className='mission' id='mission'>
        <div className='container'>
          <div className='text'>
            <h2>Our Mission</h2>
            <p>To  empower real estate investors to capitalize on lucrative investment opportunities, while also help real estate professionals, including realtors and brokers, to serve their clients more effectively, gain access to a diverse pool of sellers, and expand their client base.</p>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
          </div>
          <img src={mission}/>
        </div>
      </div>
      <div className="booking container">
        <h2 className='section-title'>Let's Discuss Your Needs More</h2>
        <div className='holder'><InlineWidget url="https://calendly.com/your-calendly-link" /></div>
      </div>
      <div className='whyChooseUs container'>
        <h2 className='section-title'>Best Reasone For Choose Our Service</h2>
        <div className='cards'>
          <div className='card'>
            <FontAwesomeIcon data-aos="zoom-in" icon={faUserTie} />
            <h4>Cost-Effectiveness</h4>
          </div>
          <div className='card'>
            <FontAwesomeIcon data-aos="zoom-in" icon={faBarsProgress} />
            <h4>Efficiency</h4>
          </div>
          <div className='card'>
            <FontAwesomeIcon data-aos="zoom-in" icon={faWandMagicSparkles} />
            <h4>Quality control</h4>
          </div>
          <div className='card'>
            <FontAwesomeIcon data-aos="zoom-in" icon={faSlack} />  
            <h4>Matching Client Expectations</h4>
          </div>
        </div>
      </div>
      <div className='about' id='about'>
        <div className='container'>
          <img src={about}/>
          <div className='info'>
            <h2>about us</h2>
            <p>At Investors’ Business Solutions, we are dedicated to empowering real estate investors and professionals alike. We provide exceptional cold calling services that generate high-quality leads of motivated homeowners looking to sell their properties. With our deep experience in lead generation, we specialize in connecting investors and real estate professionals (realtors, brokers, Agents) with lucrative opportunities.</p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='container'>
          <div className='top'>
            <div className='text'>
              <h3>what are you waiting for</h3>
              <p>Schedule an online call with us now</p>
            </div>
            <a className='main-button' href='#bockCall'>bock a call</a>
          </div>
          <div className='middle'>

              <a href=''><img src={mode == 'light' ? logo2 : logo1}/></a>
              <div className='links'>
                <h3>Links</h3>
                <a href='#services'><FontAwesomeIcon icon={faHouseChimney} /> services</a>
                <a href='#about'><FontAwesomeIcon icon={faUserGroup} /> about</a>
                <a href='#mission'><FontAwesomeIcon icon={faLayerGroup} /> our mission</a>
              </div>
              
              <div className='contact'>
                <h3>contact us</h3>
                <div className='links'>
                  <div className='title'><FontAwesomeIcon icon={faEnvelopeOpenText}/> Email</div>
                  <div className='holder'>
                    <p>Mouhamedmahmoud820@gmail.com</p>
                    <p>Mouhamedmahmoud820@gmail.com</p>
                  </div>
                </div>

              </div>
              <div className='phone'>
                <h3>Phone</h3>
                <div className='holder'>
                  <p>01150865211</p>
                  <p>01006218444</p>
                  <a className='main-button'>Click Here <FaWhatsapp/></a>
                </div>
              </div>
          </div>
          <h3 className='bottom'>Designed and Developed by "3KR4"</h3>
        </div>
      </div>
    </div>
  );
}

export default App;