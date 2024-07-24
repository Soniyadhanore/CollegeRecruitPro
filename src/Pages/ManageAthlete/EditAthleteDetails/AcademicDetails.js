import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Switch,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const AcademicDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Academic Detail:
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
                    label="Your school Name:"
                    name="Your school Name:"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Your school Name:.",
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
                    label="City:"
                    name="City:"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your City:.",
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
                    label="Your Highest Degree"
                    name="Your Highest Degree"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Highest Degree.",
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
                    label="State"
                    name="State"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Age.",
                      },
                    ]}
                  >
                    <Select size="large" options={blogCategory} />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <Row>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="Your Graduation Year"
                        name="Your Graduation Year"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your First Name.",
                          },
                        ]}
                      >
                        <DatePicker className="w-full h-[38px]" picker="year" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="GPA"
                        name="GPA"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your GPA.",
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
                <div className="mr-4">
                  <Form.Item
                    label="Transcript"
                    name="Transcript"
                    rules={[
                      {
                        required: true,
                        message: "Please upload your transcript.",
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
          <div className="font-semibold text-base mb-[10px]">
            Additional Academic Details:
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
              <Col span={24}>
                <div className="flex my-5 mr-4">
                  <span className="mr-5 font-semibold text-base">
                    Have you appeared for SAT?
                  </span>
                  <Switch
                    checkedChildren="Yes"
                    unCheckedChildren="No"
                    defaultChecked
                  />
                </div>
              </Col>

              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Please provide your SAT result details"
                    name="Please provide your SAT result details"
                    rules={[
                      {
                        required: true,
                        message: "Please provide your SAT result details.",
                      },
                    ]}
                  >
                    <Row>
                      <Col span={6}>
                        <div className="mr-4">
                          <Input size="large" />
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="mr-4">
                          <Input size="large" />
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="mr-4">
                          <Input size="large" />
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="mr-4">
                          <Input size="large" />
                        </div>
                      </Col>
                    </Row>
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Upload SAT Test results*"
                    name="Upload SAT Test results*"
                    rules={[
                      {
                        required: true,
                        message: "Please Upload SAT Test results*.",
                      },
                    ]}
                  >
                    <Upload className="upload-lang">
                      <Button
                        icon={<UploadOutlined />}
                        className="w-full h-[37px]"
                      >
                        Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="flex my-5 mr-4">
                  <span className="mr-5 font-semibold text-base">
                    Have you appeared for SAT?
                  </span>
                  <Switch
                    checkedChildren="Yes"
                    unCheckedChildren="No"
                    defaultChecked
                  />
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Please provide your ACT result details"
                    name="Please provide your ACT result details"
                    rules={[
                      {
                        required: true,
                        message: "Please provide your ACT result details.",
                      },
                    ]}
                  >
                    <Row>
                      <Col span={6}>
                        <div className="mr-4">
                          <Input size="large" />
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="mr-4">
                          <Input size="large" />
                        </div>
                      </Col>
                    </Row>
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Upload ACT Test results*"
                    name="Upload ACT Test results*"
                    rules={[
                      {
                        required: true,
                        message: "Please Upload ACT Test results*.",
                      },
                    ]}
                  >
                    <Upload className="upload-lang">
                      <Button
                        icon={<UploadOutlined />}
                        className="w-full h-[37px]"
                      >
                        Click to Upload
                      </Button>
                    </Upload>
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
export default AcademicDetails;