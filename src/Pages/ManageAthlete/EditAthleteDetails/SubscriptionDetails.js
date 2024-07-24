import { Card, Col, DatePicker, Form, Input, Row } from "antd";
const SubscriptionDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Subscription Information
          </div>
          <Form
            layout="vertical"
            style={{
              //   maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Row>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Date "
                    name="Date "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Date.",
                      },
                    ]}
                  >
                    <DatePicker className="w-full h-[39px]" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Subscription status"
                    name="Subscription status"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Subscription status.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Subscription ID"
                    name="Subscription ID"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Subscription ID.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Subscription start date"
                    name="Subscription start date"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Subscription start date.",
                      },
                    ]}
                  >
                    <DatePicker className="w-full h-[39px]" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Subscription Plan Name"
                    name="Subscription Plan Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Subscription Plan Name.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Subscription end date"
                    name="Subscription end date"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Subscription end date.",
                      },
                    ]}
                  >
                    <DatePicker className="w-full h-[39px]" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Payment method"
                    name="Payment method"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Payment method.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Amount"
                    name="Amount"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Amount.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    </>
  );
};
export default SubscriptionDetails;