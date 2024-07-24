import { useState } from "react";
import { Button, Card, Form, Typography, Upload, Col, Row, Input } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
const ManageProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const handleChange = (info) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(info.file.originFileObj);
    }
  };
  return (
    <>
      <Card>
        <div className="flex items-center justify-between relative mb-4">
          <Typography className="text-xl font-semibold mb-0" align={"left"}>
            Profile
          </Typography>
        </div>
        <div className="relative overflow-x-auto">
          <Form
            layout="vertical"
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            className=""
          >
            <Form.Item>
              <div className="flex">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="relative"
                  showUploadList={false}
                  onChange={handleChange}
                >
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                    className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                  >
                    <UserOutlined className="text-2xl" />
                    <div className="mt-2">Upload</div>
                  </button>
                  <EditOutlined className="cursor-pointer absolute right-[-8px] top-0 p-[5px] rounded-full bg-red-600 text-white" />
                </Upload>
                {/* this code for developer for preview */}
                {/* <div>
                  <Image
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    className="!w-[140px] rounded-md flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                  />
                  <CloseOutlined
                    className="cursor-pointer absolute right-[84px] top-0 p-[5px] rounded-full bg-red-600 text-white"
                  />
                </div> */}
              </div>
            </Form.Item>
            <Row>
              <Col span={24}>
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
              <Col span={24}>
                <div className="mr-4">
                  <Form.Item
                    label="Email Address"
                    name="Email Address"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email Address.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
          <div className="flex justify-end gap-3">
            <Button type="primary">Save</Button>
          </div>
        </div>
      </Card>
    </>
  );
};
export default ManageProfile;