import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Divider, Form, Input, Row, Typography } from "antd";
const EditSubscriptionDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="flex justify-between items-center mb-4 gap-3">
          <div>
            <Typography
              className="text-xl font-semibold"
              align={"left"}
            
            >
              <LeftOutlined
                className="text=lg text-black mr-2 cursor-pointer"
                onClick={() => navigate(-1)}
              />
              Edit Subscription Plan Details
            </Typography>
          </div>
        </div>
        <Divider />
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Manage Free Plan Details:
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
                    label="Plan Name"
                    name="Plan Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Plan Name.",
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
                    label="Upload video limit"
                    name="Upload video limit"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Upload video limit.",
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
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Upload Image limit"
                    name="Upload Image limit"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Upload Image limit.",
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
                    label="Search College Limit"
                    name="Search College Limit"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Search College Limit.",
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
                    label="Benefits"
                    name="Benefits"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Benefits.",
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
        <div>
          <div className="font-semibold text-base mb-[10px]">
            View Premium Plan Subscriber Details:
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
                    label="Plan Name"
                    name="Plan Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Plan Name.",
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
                    label="Upload video limit"
                    name="Upload video limit"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Upload video limit.",
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
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Upload Image limit"
                    name="Upload Image limit"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Upload Image limit.",
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
                    label="Search College Limit"
                    name="Search College Limit"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Search College Limit.",
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
                    label="Benefits"
                    name="Benefits"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Benefits.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
          <Divider />
          <div className="text-right">
          <Button type="primary">Save</Button>
        </div>
        </div>
      </Card>
    </>
  );
};
export default EditSubscriptionDetails;