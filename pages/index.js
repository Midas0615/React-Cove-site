import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import PriceComparisonTable from '../components/priceComparisonTable';
import Footer from '../components/footer/footer';
import WatchVideoLink from '../components/watchVideoLink/watchVideoLink';
import CustomizedRange from '../components/estimateSlider';
import RiskFreeSection from '../components/riskFreeSection/riskFreeSection';
import s from './index.scss';

const coverSectionTitle = 'If it\'s Cove, it\'s covered.';
const setupSectionTitle = 'A whole new simple setup process';
const setupDescriptionText = 'Most security systems are designed for technicians to install, but you\’re not a technician. Cove Protect was designed for you. It\'s easy on you while still being tough on the bad guys.';

const Index = () => (
  <Layout>
    <Header color="secondary" />
    <div className="homeContainer">
      <div className="coverSection">
        <img src="/static/images/coverBackground.png" alt="background" className="backImg" />
        <div className="titleRow">
          <Row>
            <Col xs={0} sm={0} md={6} lg={6}>
              <div className="coverLeftArea">
                <img src="/static/images/downArrow.png" alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="coverRightArea">
                <h1>
                  {coverSectionTitle}
                </h1>
                <WatchVideoLink link="/" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <div className="setupProcessSection">
          <h2 className="squeeze">{setupSectionTitle}</h2>
          <p className="squeeze">{setupDescriptionText}</p>
          <div className="products">
            <Row>
              <Col xs={12} sm={12} md={3}>
                <div>
                  <div className="imageArea">
                    <img src="/static/images/coverTouch.png" alt="" />
                  </div>
                  <h3>Cove Touch</h3>
                  <p>With the guided installation process on the touchscreen,
                    Cove has an install process that even grandma can handle.
                  </p>
                  <WatchVideoLink link="/" title="Watch install video" size="small" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <div>
                  <div className="imageArea">
                    <img className="imageArea__image" src="/static/images/motionSensor.png" alt="" />
                  </div>
                  <h3>Sensors For Everything</h3>
                  <p>Entry point sensors, motion sensors, and much more.
                    Cove Covers all areas of the home.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <div>
                  <div className="imageArea">
                    <img className="imageArea__image" src="/static/images/smokeAlarm.png" alt="" />
                  </div>
                  <h3>Protect People</h3>
                  <p>Don&apos;t just protect your things, protect those you love.
                    Smoke, carbon monoxide, flood/freeze sensors cover it.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <div>
                  <div className="imageArea">
                    <img className="coveAppImg imageArea__image" src="/static/images/coveApp.png" alt="" />
                  </div>
                  <h3>Cove app</h3>
                  <p>Know what&apos;s happening anywhere you go.
                    You deserve to be the first to know.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
      <Row>
        <div className="builtProductsSection">
          <div className="descriptionArea">
            <h2>Arming and disarming built around you.</h2>
            <p>Arm and disarm your system in a way that makes sense.
              We feel that security should be easy and effortless to use.
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <div className="liveAssistSection">
          <img src="/static/images/assistOperator.png" alt="" className="leftArea" />
          <div className="liveAssistRow">
            <div className="rightArea">
              <h2>Cove LiveAssist</h2>
              <h3>24/7 professional monitoring with Cove LiveAssist gives you real protection
                all the time, not when you&apos;re just looking.
              </h3>
              <ol>
                <li>Never worry again with Cove LiveAssist coming through the two-way
                  intercom built right into the 7th touchscreen. <br/><span className="italicize">(No landline necessary)</span>
                </li>
                <li>If we can’t communicate with you directly through your two-way intercom on your panel, we
                  will get a hold of you on your cellphone, text message, mobile app, and more.
                </li>
                <li>In a real emergency, we will contact your local authorities. You can customize notifications
                  you receive so that you aren’t bothered with unnecessary alerts.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="paySecuritySection">
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className="descriptionArea">
                <div className="contentTextArea">
                  <h2>Less Markup.</h2>
                  <h2 className="greenTitle">More Security.</h2>
                  <p>When you pay more for home security, you&apos;re paying for more middlemen
                    and more mark-up. We cut out the middlemen and sell direct to you. You get
                    exceptional security at a fraction of the price.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="center">
                <img src="/static/images/cutOutMiddleMan.png" alt="" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="center">
                <img src="/static/images/cashFlow.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="eleganceSection">
          <Row>
            <Col xs={12} sm={12} md={8} lg={6}>
              <div className="descriptionArea">
                <div className="contentTextArea">
                  <h2>New elegance and beauty. Same incredible protection.</h2>
                  <p>Security systems shouldn&apos;t be made to be an eye sore for your home.
                    We designed every element to be beautiful and seamless to fit perfectly
                    into your home.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="priceComparisonTableRow">
          <PriceComparisonTable />
        </div>
      </Row>
      <Row>
        <div className="jordanSayingSection d-flex justify-content-center">
          <div className="sayingTextArea">
            <hr />
            <p className="sayingText">“Cove was so much less than competitors and
            still maintains the quality I was used to.”
            </p>
            <p className="authorName">- Jordan H.</p>
            <hr />
          </div>
        </div>
      </Row>
      <Row>
        <div className="processSection">
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className="leftArea">
                <h2>The most simple setup process ever.</h2>
                <p>Our unprecedented setup process makes it easy for everyone.</p>
                <ol>
                  <li>Plug in your panel.</li>
                  <li>Follow on screen instructions.</li>
                  <li>There is not step 3.</li>
                </ol>
                <WatchVideoLink link="/" size="small" title="Watch install video" />
              </div>
            </Col>
            <Col xs={0} sm={0} md={4}>
              <div className="rightArea">
                <img src="/static/images/packageBox2.png" alt="Cove Product Box" />
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="savingsSection d-flex align-items-center">
          <h2>Savings so big, you can&apos;t help but love it!</h2>
          <p className="wideText">The average consumer saves every year by choosing Cove over other alarm companies.</p>
          <p className="shortText">Every year with Cove is more money in your pocket</p>
          <div className="rangeRow">
            <CustomizedRange />
          </div>
        </div>
      </Row>
      <RiskFreeSection />
    </div>
    <Footer />
    <style jsx>{s}</style>
  </Layout>
);

export default Index;
