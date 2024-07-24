import { Card, Col, Form, Image, Row } from "antd";
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
      </Card>
    </>
  );
};
export default SocialMedia;