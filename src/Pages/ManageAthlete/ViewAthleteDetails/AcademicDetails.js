import { Button, Card, Col, Form, Row, Switch, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const AcademicDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Academic Detail:
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Your school Name
                </div>
                <div className="text-sm">
                  The Bhavans' Prominent International
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">City</div>
                <div className="text-sm">Boston</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Your Highest Degree
                </div>
                <div className="text-sm">MBA</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">State</div>
                <div className="text-sm">Van Couver</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Your Graduation Year
                </div>
                <div className="text-sm">2022</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">GPA</div>
                <div className="text-sm">9.2</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Please upload your transcript
                </div>
                <div className="text-sm">transcript</div>
              </div>
            </Col>
          </Row>
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
                  <span className="mr-5 text-base">
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
                  <div className="font-semibold text-base mb-[10px]">
                    Please provide your SAT result details
                  </div>
                  <Row>
                    <Col span={6}>
                      <div className="mr-4">Reading*: 56</div>
                    </Col>
                    <Col span={6}>
                      <div className="mr-4">Writing*: 98</div>
                    </Col>
                    <Col span={6}>
                      <div className="mr-4">Maths*: 78</div>
                    </Col>
                    <Col span={6}>
                      <div className="mr-4">Total*: 127</div>
                    </Col>
                  </Row>
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
                  <span className="mr-5 text-base">
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
                  <div className="font-semibold text-base mb-[10px]">
                    Please provide your ACT result details
                  </div>
                  <Row>
                    <Col span={10}>
                      <div className="mr-4">ACT scores*: 120</div>
                    </Col>
                    <Col span={10}>
                      <div className="mr-4">Notes: ABCDEFGHUI</div>
                    </Col>
                  </Row>
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
