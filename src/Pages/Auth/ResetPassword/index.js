import { Typography, Button, Input, Form, Layout, Card, Flex } from "antd";
import SuccessfullyModal from "../../../Modal/SuccessfullyModal";
import { useState } from "react";
import WarningModal from "../../../Modal/WarningModal";
const { Title } = Typography;
const ResetPassword = () => {
  const [isSuccessfullyModalOpen, setIsSuccessfullyModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const showSuccessfullyModal = () => {
    setIsSuccessfullyModalOpen(true);
  };
  const handleSuccessfullyOk = () => {
    setIsSuccessfullyModalOpen(false);
  };
  const handleSuccessfullyCancel = () => {
    setIsSuccessfullyModalOpen(false);
  };
  const showWarningModalModal = () => {
    setIsWarningModalOpen(true);
  };
  const handleWarningModalOk = () => {
    setIsWarningModalOpen(false);
  };
  const handleWarningModalCancel = () => {
    setIsWarningModalOpen(false);
  };
  return (
    <>
      <Layout>
        <Flex
          gap="middle"
          align="center"
          justify="center"
          vertical
          style={{ minHeight: "100vh" }}
        >
          <Card className="relative">
            <img
              width={450}
              src="logo.png"
              alt=""
              className="mx-auto absolute top-[-90px] left-0 right-0"
            />
            <Title level={3} align={"center"}>
              Reset Password
            </Title>
            <Form
              layout="vertical"
              style={{
                maxWidth: 400,
                minWidth: 400,
                marginTop: 24,
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your new password.",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="password2"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your new password.",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Button
                className="w-full mt-4"
                size="large"
                type="primary"
                htmlType="submit"
                onClick={showSuccessfullyModal} //Success
                // onClick={showWarningModalModal} //Warning
              >
                Change Password
              </Button>
            </Form>
          </Card>
        </Flex>
      </Layout>
      <SuccessfullyModal
        isOpen={isSuccessfullyModalOpen}
        onOk={handleSuccessfullyOk}
        onCancel={handleSuccessfullyCancel}
      />
      <WarningModal
        isOpen={isWarningModalOpen}
        onOk={handleWarningModalOk}
        onCancel={handleWarningModalCancel}
      />
    </>
  );
};
export default ResetPassword;