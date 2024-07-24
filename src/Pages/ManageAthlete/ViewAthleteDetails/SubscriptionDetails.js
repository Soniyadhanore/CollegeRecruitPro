import { Card, Col, Row } from "antd";
const SubscriptionDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Subscription Information
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Date</div>
                <div className="text-sm">21-Jan-24</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Subscription status
                </div>
                <div className="text-sm">Active</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Subscription ID</div>
                <div className="text-sm">ABCDEF123</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Subscription start date
                </div>
                <div className="text-sm">21-Jan-24</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Subscription Plan Name
                </div>
                <div className="text-sm">Premium</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Subscription end date
                </div>
                <div className="text-sm">21-Jan-25</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Payment method</div>
                <div className="text-sm">PayU</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Amount</div>
                <div className="text-sm">$4200</div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default SubscriptionDetails;
