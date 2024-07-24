import { Card, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const AcademicDetails = () => {
  return (
    <>
      <Card>
        <div className="font-semibold text-base mb-[10px]">
          Educational Background
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
                  label="Highest Degree "
                  name="Highest Degree "
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
                  label="Field of Study "
                  name="Field of Study "
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Field of Study.",
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
                  label="College Name "
                  name="College Name "
                  rules={[
                    {
                      required: true,
                      message: "Please enter your College Name.",
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
                  label="Graduation Year "
                  name="Graduation Year "
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Graduation Year.",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            College Information
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
              <Col span={20}>
                <div className="mr-4">
                  <Form.Item>
                    <TextArea size="large" />
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
