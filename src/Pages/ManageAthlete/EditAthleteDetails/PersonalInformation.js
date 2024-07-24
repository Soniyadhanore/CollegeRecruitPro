import {
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from "antd";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const PersonalInformation = () => {
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  return (
    <>
      <Card>
        <div className="font-semibold text-base">Athlete Info</div>
        <div className="text-sm mb-[22px] mt-[2px] ">
          Registered Date: <span className="ml-[30px]">21-Jan-24</span>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Personal Information:
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
                    label="First Name"
                    name="First Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your First Name.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Space>
                    <Form.Item
                      label="Height"
                      name="Height"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Height.",
                        },
                      ]}
                    >
                      <InputNumber
                        defaultValue={1000}
                        formatter={(value) =>
                          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        className="w-full h-[37px]"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Weight"
                      name="Weight"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Weight.",
                        },
                      ]}
                    >
                      <InputNumber
                        defaultValue={100}
                        min={0}
                        max={100}
                        formatter={(value) => `${value}%`}
                        className="w-full h-[37px]"
                      />
                    </Form.Item>
                  </Space>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Last Name"
                    name="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Last Name.",
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
                    label="Age"
                    name="Age"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Age.",
                      },
                    ]}
                  >
                    <Input size="large"  />
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
                    label="Citizenship"
                    name="Citizenship"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Citizenship.",
                      },
                    ]}
                  >
                    <Select size="large" options={blogCategory} />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">Location:</div>
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
                <Row>
                  <Col span={8}>
                    <div className="mr-4">
                      <Form.Item
                        label="Country"
                        name="Country"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Country.",
                          },
                        ]}
                      >
                        <Select size="large" options={blogCategory} />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="mr-4">
                      <Form.Item
                        label="City"
                        name="City"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your City.",
                          },
                        ]}
                      >
                        <Select size="large" options={blogCategory} />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="mr-4">
                      <Form.Item
                        label="State"
                        name="State"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your State.",
                          },
                        ]}
                      >
                        <Select size="large" options={blogCategory} />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row>
                  <Col span={8}>
                    <div className="mr-4">
                      <Form.Item
                        label="Zip Code"
                        name="Zip Code"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Zip Code.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={16}>
                    <div className="mr-4">
                      <Form.Item
                        label="Address"
                        name="Address"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Address.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    </>
  );
};
export default PersonalInformation;
