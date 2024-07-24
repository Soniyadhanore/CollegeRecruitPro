import { Card, Col, Form, Image, Input, Row } from "antd";
const SocialMedia = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Video & Images:
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
              <Col span={5}>
                <div className="mr-4">
                  <div className="font-semibold text-base mb-2">Video</div>
                  <Image
                    width={200}
                    preview={{
                      destroyOnClose: true,
                      imageRender: () => (
                        <video
                          muted
                          width="100%"
                          controls
                          src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
                        />
                      ),
                      toolbarRender: () => null,
                    }}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
              </Col>
              <Col span={5}>
                <div className="mr-4">
                  <div className="font-semibold text-base mb-2">Image</div>
                  <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
              </Col>
              <Col span={5}>
                <div className="mr-4">
                  <div className="font-semibold text-base mb-2">Image</div>
                  <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
              </Col>
              <Col span={5}>
                <div className="mr-4">
                  <div className="font-semibold text-base mb-2">Image</div>
                  <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <div className="font-semibold text-base mt-[30px] mb-[10px]">
            Social Media Links:
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
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Youtube"
                    name="Youtube"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Youtube URL.",
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
export default SocialMedia;