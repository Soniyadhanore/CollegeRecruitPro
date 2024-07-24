import { Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const ProfessionalDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Current Position
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
                    label="Title "
                    name="Title "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Title.",
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
          <div className="font-semibold text-base mb-[10px]">Work Address</div>
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
                  <Form.Item
                    label="Street Address "
                    name="Street Address "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Street Address.",
                      },
                    ]}
                  >
                    <TextArea size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Country "
                    name="Country "
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
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="State/Province "
                    name="State/Province "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your State/Province.",
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
                    label="City "
                    name="City "
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
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="zip code/Postal Code "
                    name="zip code/Postal Code "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your zip code/Postal Code.",
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
            Professional Biography
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
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Coaching Experience
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
                    label="Total Years of Experience "
                    name="Total Years of Experience "
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Total Years of Experience.",
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
            Previous Coaching Positions
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
                  <Form.Item
                    label="Title"
                    name="Title"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Title.",
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
                    label="Start date"
                    name="Start date"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Start date.",
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
                    label="End date"
                    name="End date"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your End date.",
                      },
                    ]}
                  >
                    <DatePicker className="w-full h-[38px]" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={20}>
                <div className="mr-4">
                  <Form.Item
                    label="Key achievements"
                    name="Key achievements"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Key achievements.",
                      },
                    ]}
                  >
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
export default ProfessionalDetails;