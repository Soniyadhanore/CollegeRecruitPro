import { Card, Col, DatePicker, Form, Input, Row, Select, Switch } from "antd";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const PersonalInformation = () => {
  const [phoneNumberInput, setPhoneNumberInput] = useState();

  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">Coach Details</div>
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
                    label="Name"
                    name="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Name.",
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
                    label="Phone no"
                    name="Phone no"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Phone no.",
                      },
                    ]}
                  >
                    <PhoneInput
                      className="border border-[#d9d9d9] rounded-lg	px-[11px] h-[40px]"
                      international
                      defaultCountry="RU"
                      value={phoneNumberInput}
                      onChange={setPhoneNumberInput}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="DOB"
                    name="DOB"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your DOB.",
                      },
                    ]}
                  >
                    <DatePicker className="w-full h-[38px]" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Email ID"
                    name="Email ID"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email ID.",
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
                    label="Gender"
                    name="Gender"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Gender.",
                      },
                    ]}
                  >
                    <Select size="large" options={blogCategory} />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Status"
                    name="Status"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Status.",
                      },
                    ]}
                  >
                    <Switch />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Social Media Links
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
                    label="linkedIn "
                    name="linkedIn "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your linkedIn URL.",
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
                    label="Instagram "
                    name="Instagram "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Instagram URL.",
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
                    label="Twitter"
                    name="Twitter"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Twitter URL.",
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
                    label="Facebook"
                    name="Facebook"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Facebook URL.",
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
export default PersonalInformation;