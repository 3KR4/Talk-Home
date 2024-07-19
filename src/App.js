import "./App.css";
import { useState, useEffect } from "react";
import logo1 from "../src/img/logo-black.png";
import logo2 from "../src/img/logo-white.png";
import mission from "../src/img/mission.jpg";
import success from "../src/img/success.jpg";
import about from "../src/img/about.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import { InlineWidget } from "react-calendly";
// ICONS
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack, faSquareFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaChevronDown, FaWhatsapp} from "react-icons/fa";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {
  faUserTie,
  faWandMagicSparkles,
  faBarsProgress,
  faEnvelopeOpenText,
  faHouseChimney,
  faUserGroup,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

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

  const whatsappNumber = "01212078797";
  const whatsappLink = `https://wa.me/20${whatsappNumber}`;

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <a className="main-logo" href="">
            <img src={mode == 'dark' ? logo2 : logo1} />
          </a>
          <div className={`links ${openMenu ? "active" : ""}`}>
            <a href="#services">services</a>
            <a href="#about">about</a>
            <a href="#mission">our mission</a>
            <a className="main-button" href="#bockCall">
              Book a Call
            </a>
          </div>
          <div
            className="darkLight"
            style={{ marginRight: openMenu ? "-5px" : "0px" }}
          >
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
          <div className="bar-holder">
            {openMenu ? (
              <IoCloseOutline
                className="bar close"
                onClick={() => {
                  setOpenMenu(false);
                }}
              />
            ) : (
              <HiBars3
                className="bar"
                onClick={() => {
                  setOpenMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </header>
      <div className="landing">
        <div data-aos="zoom-in-left" className="main-holder container">
          <p>TalkToHomes</p>
          <h3>Turning Conversations <br/> into Cash Flow</h3>
          <p>Unlocking the door to lucrative real estate deals, one conversation at a time. At Talk to Homes, we are the cold calling experts dedicated to helping investors like you find hidden opportunities and maximize your returns.</p>
        </div>
      </div>
      <section className="services container" id="services">
        <h2 className="section-title">
          Talk to Homes <br />
          Turning Conversations into Cash Flow
        </h2>
        <div className="head">
          <h4>services we provide</h4>
          <a className="main-button" href="#">
            Get Started
          </a>
        </div>
        <div className="cards">
          <div data-aos="zoom-in-right" className="card">
            <button>
              <div>
                <FontAwesomeIcon icon={faUserTie} />
                <h3>Cold Calling Excellence</h3>
              </div>
              <FaChevronDown />
            </button>
            <div className="hideHight">
              <p>
                We don't just make calls; we create connections. Our skilled
                team knows how to break the ice and turn cold leads into hot
                opportunities. We handle objections with finesse, build genuine
                rapport, and uncover deals others might miss.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-left" className="card">
            <button>
              <div>
                <FontAwesomeIcon icon={faBarsProgress} />
                <h3>Strategic Lead Generation</h3>
              </div>
              <FaChevronDown />
            </button>
            <div className="hideHight">
              <p>
                Our proactive and targeted approach ensures a steady stream of
                high-quality leads. We identify motivated sellers, distressed
                properties, and off-market gems to provide you with the best
                investment opportunities.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="card">
            <button>
              <div>
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                <h3>End-to-End Deal Facilitation</h3>
              </div>
              <FaChevronDown />
            </button>
            <div className="hideHight">
              <p>
                From the first call to the final handshake, we're with you every
                step of the way. Our comprehensive support ensures seamless
                transactions, allowing you to focus on what you do best –
                investing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="success">
        <h2 className="section-title">Why Choose Talk to Homes?</h2>
        <div className="container">
          <img src={success} />
          <article className="text">
            <div className="card">
              <h4>Proven Success:</h4>{" "}
              <p>
                Our results-driven approach has helped countless investors close
                deals that they never thought possible. We bring expertise,
                strategy, and a relentless drive to every call.
              </p>
            </div>
            <div className="card">
              <h4>Personalized Strategies:</h4>{" "}
              <p>
                We understand that no two investors are alike. That's why we
                tailor our services to match your unique goals and investment
                criteria, ensuring you get the best possible outcomes.
              </p>
            </div>
            <div className="card">
              <h4>Dedicated Partnership:</h4>{" "}
              <p>
                When you work with Talk to Homes, you get more than just a service
                – you get a dedicated partner. We're committed to your success and
                provide ongoing support to help you navigate the ever-changing
                real estate landscape.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="mission" id="mission">
        <div className="container">
          <article className="text">
            <h2>Who We Are:</h2>
            <p>
            Talk to Homes is your premier partner in real estate investing. Our team of seasoned professionals is passionate about connecting investors with their next big deal. With a sharp focus on cold calling, we excel in turning potential leads into profitable investments. 
            </p>
          </article>
          <img src={mission} />
        </div>
      </section>
      <section className="booking container" id="bockCall">
        <h2 className="section-title">Let's Discuss Your Needs More</h2>
        <div data-aos="zoom-in" className="holder">
          <InlineWidget url="https://calendly.com/johnedwards-talktohomes/30min" />
        </div>
      </section>
      <section className="whyChooseUs container">
        <h2 className="section-title">Best Reasone For Choose Our Service</h2>
        <div className="cards">
          <div data-aos="zoom-in-right" className="card">
            <FontAwesomeIcon data-aos="zoom-in" icon={faUserTie} />
            <h4>Cost-Effectiveness</h4>
          </div>
          <div data-aos="zoom-in" className="card">
            <FontAwesomeIcon data-aos="zoom-in" icon={faBarsProgress} />
            <h4>Efficiency</h4>
          </div>
          <div data-aos="zoom-in" className="card">
            <FontAwesomeIcon data-aos="zoom-in" icon={faWandMagicSparkles} />
            <h4>Quality control</h4>
          </div>
          <div data-aos="zoom-in-left" className="card">
            <FontAwesomeIcon data-aos="zoom-in" icon={faSlack} />
            <h4>Matching Client Expectations</h4>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <img src={about} />
          <article className="info">
            <h2>Let's Get Started</h2>
            <p>
              Ready to turn conversations into cash flow? Let Talk to Homes be
              your secret weapon in the competitive world of real estate
              investing. Contact us today and discover how we can help you
              unlock new opportunities and achieve your investment dreams.
            </p>
          </article>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="top">
            <div className="text">
              <h3>what are you waiting for</h3>
              <p>Schedule an online call with us now</p>
            </div>
            <a className="main-button" href="#bockCall">
              Book a Call
            </a>
          </div>
          <div className="middle">
            <a data-aos="zoom-in-right" className="main-logo" href="">
              <img src={mode == 'dark' ? logo2 : logo1} />

            </a>
            <div className="links">
              <h3>Links</h3>
              <div>
                <a href="#services">
                  <FontAwesomeIcon icon={faHouseChimney} /> services
                </a>
                <a href="#about">
                  <FontAwesomeIcon icon={faUserGroup} /> about
                </a>
                <a href="#mission">
                  <FontAwesomeIcon icon={faLayerGroup} /> our mission
                </a>
              </div>
            </div>

            <div className="contact">
              <h3>contact us</h3>
              <div className="email">
                <a href="mailto:mouhamedmahmoud820@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} /> Email</a>
                <a href="https://www.facebook.com/profile.php?id=61556653045857"><FontAwesomeIcon icon={faSquareFacebook} /> FaceBook</a>
                <a href="https://www.linkedin.com/in/muhammad-fathi-a60942234/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
              </div>
            </div>
            <div className="phone">
              <h3>Phone</h3>
              <div className="holder">
                <p>+1(713)701-5398</p>
                <a
                  className="main-button"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;