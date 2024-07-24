import { Typography, Button, Input, Form, Layout, Card, Flex } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const Login = () => {
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
              Admin Login
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
                label="Email address"
                name="Email address"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Email address.",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password.",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
              <div className="text-right">
                <Link to="/forgot-password">
                  <Button className="p-0 font-semibold" type="link">
                    Forgot Password
                  </Button>
                </Link>
              </div>
              <Button
                className="w-full mt-4"
                size="large"
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form>
          </Card>
        </Flex>
      </Layout>
    </>
  );
};
export default Login;