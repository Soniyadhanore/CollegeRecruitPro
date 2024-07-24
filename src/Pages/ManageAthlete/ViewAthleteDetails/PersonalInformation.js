import { Card, Col, Row } from "antd";
const PersonalInformation = () => {
  return (
    <>
      <Card>
        <div className="font-semibold text-base">Athlete Info</div>
        <div className="text-sm mb-[22px] mt-[2px] ">
          Registered Date: <span className="ml-[30px]">21-Jan-24</span>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Personal Information:
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">First Name</div>
                <div className="text-sm">Astha</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">height</div>
                <div className="text-sm">5'4 inches</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Weight</div>
                <div className="text-sm">60 Kgs</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Last Name</div>
                <div className="text-sm">Jha</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">DOB</div>
                <div className="text-sm">27-Sep-1999</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Phone no</div>
                <div className="text-sm">+1 983456789</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Age</div>
                <div className="text-sm">28</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Gender</div>
                <div className="text-sm">Female</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Citizenship</div>
                <div className="text-sm">USA</div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">Location:</div>
          <Row>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Country</div>
                <div className="text-sm">USA</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">City</div>
                <div className="text-sm">Van Couver</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">State</div>
                <div className="text-sm">Boston</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Zip Code</div>
                <div className="text-sm">12345</div>
              </div>
            </Col>
            <Col span={5}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Address</div>
                <div className="text-sm">166-A-ABC, TULSJWJS, Boston, US</div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default PersonalInformation;
