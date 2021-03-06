import React, { Component } from 'react';
import { object } from 'prop-types';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';

import AccountDataField from '../../components/accountDataField';
import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';
import DashboardHeader from '../../components/dashboardHeader';

export default class Info extends Component {
  static propTypes = {
    url: object,
  }

  static defaultProps = {
    url: {},
  }

  render() {
    return (
      <Layout>
        <DashboardHeader />
        <Container>
          <AccountCard className="card">
            <Row>
              <Col>
                <h2 className="mb-md">Account/Alarm Info</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.asPath} />
              </Col>
              <Col>
                <AccountCard>
                  <AccountGroup title="Account Info">
                    <div>
                      <AccountDataField
                        label="Email:"
                        content="jordan.h@covesmart.com"
                        edit="/account/info/email"
                      />
                      <AccountDataField
                        label="Password:"
                        content="**************"
                        edit="/account/info/password"
                      />
                    </div>
                    <div>
                      <AccountDataField
                        label="Phone:"
                        content="385-208-2877"
                        edit="/account/info/phone"
                      />
                      <AccountDataField
                        label="Bill Date:"
                        content="21st of each month"
                        edit="/account/info/bill-date"
                      />
                    </div>
                  </AccountGroup>
                  <AccountGroup title="Alarm Info">
                    <div>
                      <AccountDataField
                        label="Monitored Address:"
                        content={
                          <div>
                            <div>1154 N 190 E</div>
                            <div>Lehi, UT 84043</div>
                          </div>
                        }
                        edit="/account/info/monitored-address"
                      />
                      <div className="label">Emergency Contacts:</div>
                      <AccountDataField
                        edit="/account/info/edit-emergency-contact"
                        content={
                          <div>
                            Emergency Contact 1:<br />
                            Dallin Harmon<br />
                            208-384-9384
                          </div>
                        }
                      />
                      <AccountDataField
                        edit="/account/info/edit-emergency-contact"
                        content={
                          <div>
                            Emergency Contact 2:<br />
                            Dallin Harmon<br />
                            208-384-9384
                          </div>
                        }
                      />
                      <div className="mb-sm">
                        <a href="/account/info/add-emergency-contact">Add Emergency Contact</a>
                      </div>
                      <AccountDataField
                        label="Alarm Permit Number:"
                        content="#3857484"
                        edit={() => Router.push('/account/info/permit-number')}
                      />
                      <AccountDataField
                        label="Alarm Insurance Certificate:"
                        content="#3857484"
                        edit="/account/info/alarm-insurance-certificate"
                      />
                    </div>
                    <div>
                      <AccountDataField
                        label="Primary Phone:"
                        content="385-208-2877"
                        edit="/account/info/primary-phone"
                      />
                      <AccountDataField
                        label="Secondary Phone:"
                        content="385-208-2877"
                        edit="/account/info/secondary-phone"
                      />
                      <AccountDataField
                        label="Mastercode:"
                        content="****"
                        edit={() => this.editAlarm('masterCode')}
                      />
                      <AccountDataField
                        label="User 1:"
                        content="****"
                        edit="/account/info/edit-user"
                      />
                      <AccountDataField
                        label="User 2:"
                        content="****"
                        edit="/account/info/edit-user"
                      />
                      <div className="text-center mb-md">
                        <a href="/account/info/add-user">Add user</a>
                      </div>
                      <div className="text-center">
                        <a href="/account/info/notifications">
                          <div>Manage Cove Notifications and Communications</div>
                        </a>
                      </div>
                    </div>
                  </AccountGroup>
                  <AccountGroup title="Add/Remove Equipment">
                    <Row>
                      <Col>
                        <div>
                          <a href="/account/info/add-equipment">Add Equipment</a>
                        </div>
                      </Col>
                      <Col>
                        <div className="text-center">
                          <a href="/account/info/return-equipment">Return Equipment</a>
                        </div>
                      </Col>
                      <Col>
                        <div className="text-right">
                          <a href="#/">Exchange Equipment</a>
                        </div>
                      </Col>
                    </Row>
                  </AccountGroup>
                  <div className="text-center">
                    <button className="btn btn--primary-inverse btn-block">Add Equipment</button>
                  </div>
                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
      </Layout>
    );
  }
}
