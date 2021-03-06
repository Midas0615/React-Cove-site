import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import InfoBox from '../../components/infoBox/infobox';
import s from './paymentInfo.scss';

const PaymentInfo = (props) => {
  const { onChangeHandler } = props;
  return (
    <div>
      <div className="customerInfo">
        <Row className="justify-content-between">
          <Col>
            <h3>Payment Selection</h3>
            <h4>Credit Card</h4>
            <p>Safe money transfer using your bank account.
              Visa, Mastercard, Discover, American Express
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Input
              label="Name on card"
              onChangeHandler={
                (changeValue) => { onChangeHandler('orderValue', { name: changeValue }); }
              }
            />
          </Col>
          <Col xs={4}>
            <img src="/static/images/creditcards.png" alt="credit card icon" />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Input
              label="Card number"
              onChangeHandler={
                (changeValue) => { onChangeHandler('orderValue', { number: changeValue }); }
              }
            />
          </Col>
          <Col xs={2}>
            <Input
              label="MM/YY"
              onChangeHandler={
                (changeValue) => { onChangeHandler('orderValue', { expiry: changeValue }); }
              }
            />
          </Col>
          <Col xs={2}>
            <Row>
              <Input
                label="CVV"
                onChangeHandler={
                  (changeValue) => { onChangeHandler('orderValue', { cvv: changeValue }); }
                }
              />
              <InfoBox />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Terms and Conditions</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="acceptanceRow">
              <Checkbox />
              <div className="acceptance">
                I accept the <Link href="#link"><span className="linkTertiary"> Terms and Conditons</span></Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{s}</style>
    </div>
  );
};

PaymentInfo.propTypes = {
  onChangeHandler: PropTypes.func,
};

PaymentInfo.defaultProps = {
  onChangeHandler: () => {},
};

export default PaymentInfo;
