import { Avatar, Button, Card, Col, Divider, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const ViewCollege = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="flex justify-between items-center mb-4 gap-3">
          <Typography
            className="text-xl font-semibold"
            align={"left"}
          
          >
            <LeftOutlined
              className="text=lg text-black mr-2 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            View College Details
          </Typography>
        </div>
        <Divider />
        <div className="">
          <img
            src="images/banners.jpg"
            alt="college-banner"
            className="w-full h-[300px] object-cover mb-[20px]"
          />
          <div>
            <div className="my-4">
              <div className="text-base font-medium text-black">
                College Name :{" "}
              </div>
              <div className="text-base">Johnny James</div>
            </div>
            <div className="my-4">
              <div className="text-base font-medium text-black">
                College Address :{" "}
              </div>
              <div className="text-base">
                Mr XXXXXXX, H No 153, Sector 15-A, Chandigarh-160015, INDIA.{" "}
              </div>
            </div>
            <div className="my-4">
              <div className="text-base font-medium text-black mb-2">
                Sports :{" "}
              </div>
              <Row>
                <Col span={6}>
                  <div className="mb-5">
                    <span className="text-base bg-[#bdd2f1] border border-black py-[5px] px-[20px] rounded">
                      Baseball
                    </span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="mb-5">
                    <span className="text-base bg-[#bdd2f1] border border-black py-[5px] px-[20px] rounded">
                      Basketball
                    </span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="mb-5">
                    <span className="text-base bg-[#bdd2f1] border border-black py-[5px] px-[20px] rounded">
                      Football
                    </span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="mb-5">
                    <span className="text-base bg-[#bdd2f1] border border-black py-[5px] px-[20px] rounded">
                      Boxing
                    </span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="mb-5">
                    <span className="text-base bg-[#bdd2f1] border border-black py-[5px] px-[20px] rounded">
                      Handball
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="my-4">
              <div className="text-base font-medium text-black">
                Contacts Info :{" "}
              </div>
              <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[<p>Instagram</p>, <p>Facebook</p>]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" />
                  }
                  title="Marley Johns"
                  description={
                    <>
                      <p>95894711228</p>
                      <p>abc@gmail.com</p>
                    </>
                  }
                />
              </Card>
            </div>
            <div className="my-4">
              <div className="flex justify-between">
                <div className="text-base font-medium text-black">
                  Associate coaches Details :{" "}
                </div>
                <div className="mr-5">
                  {" "}
                  <Button type="primary"  onClick={() => navigate("/create-coach")}>Add Coach</Button>
                </div>
              </div>
              <Row>
                <Col span={8}>
                  <div className="card-full">
                    <Card
                      style={{ width: 300, marginTop: 16 }}
                      actions={[<p>Instagram</p>, <p>Facebook</p>]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" />
                        }
                        title="Marley Johns"
                        description={
                          <>
                            <p>95894711228</p>
                            <p>abc@gmail.com</p>
                          </>
                        }
                      />
                    </Card>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="card-full">
                    <Card
                      style={{ width: 300, marginTop: 16 }}
                      actions={[<p>Instagram</p>, <p>Facebook</p>]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" />
                        }
                        title="Marley Johns"
                        description={
                          <>
                            <p>95894711228</p>
                            <p>abc@gmail.com</p>
                          </>
                        }
                      />
                    </Card>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="card-full">
                    <Card
                      style={{ width: 300, marginTop: 16 }}
                      actions={[<p>Instagram</p>, <p>Facebook</p>]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" />
                        }
                        title="Marley Johns"
                        description={
                          <>
                            <p>95894711228</p>
                            <p>abc@gmail.com</p>
                          </>
                        }
                      />
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="my-4">
              <div className="text-base font-medium text-black mb-4">
                Eligibility criteria :{" "}
              </div>
              <Row gutter={[40, 16]}>
                <Col
                  className="gutter-row flex items-start justify-start"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={24}
                >
                  <div className="text-base font-medium text-black w-[250px]">
                    College Type :{" "}
                  </div>
                  <div className="text-base">College Type</div>
                </Col>
                <Col
                  className="gutter-row flex items-start justify-start"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={24}
                >
                  <div className="text-base font-medium text-black w-[250px]">
                    No. of Under Graduates :{" "}
                  </div>
                  <div className="text-base">3</div>
                </Col>
                <Col
                  className="gutter-row flex items-start justify-start"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={24}
                >
                  <div className="text-base font-medium text-black w-[250px]">
                    Majors offered (with expenses) :{" "}
                  </div>
                  <div className="text-base"></div>
                </Col>
                <Col
                  className="gutter-row flex items-start justify-start"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={24}
                >
                  <div className="text-base font-medium text-black w-[250px]">
                    Average GPA :{" "}
                  </div>
                  <div className="text-base">322</div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default ViewCollege;
