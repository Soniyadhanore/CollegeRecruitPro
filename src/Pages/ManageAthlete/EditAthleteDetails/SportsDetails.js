import { Card, Col, Form, Row, Select } from "antd";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const SportsDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Sports Details:
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
              <Col span={24}>
                <div className="my-5 mr-4">
                  <div className="mr-5 font-semibold text-base">
                    Please provide your physical stats detail:
                  </div>
                  <div className="mr-5 font-semibold text-sm">
                    Physical stats detail:
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Throw-XYZ"
                    name="Throw-XYZ"
                    rules={[
                      {
                        required: true,
                        message: "Please mention Throw-XYZ.",
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
                    label="Primary Position"
                    name="Primary Position"
                    rules={[
                      {
                        required: true,
                        message: "Please mention your primary position.",
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
                    label="Batting Hand"
                    name="Your school Name:"
                    rules={[
                      {
                        required: true,
                        message: "Please mention your batting hand.",
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
                    label="Secondary Position"
                    name="Secondary Position:"
                    rules={[
                      {
                        required: true,
                        message: "Please mention your secondary position.",
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
      </Card>
    </>
  );
};
export default SportsDetails;