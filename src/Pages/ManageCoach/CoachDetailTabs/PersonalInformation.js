import { Card, Col, Row, Switch } from "antd";
const PersonalInformation = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">Coach Details</div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Name</div>
                <div className="text-sm">Johny James</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Phone number</div>
                <div className="text-sm">123456789</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">DOB</div>
                <div className="text-sm">19-Oct-24</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Email ID</div>
                <div className="text-sm">johny.james@gmail.com</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Gender</div>
                <div className="text-sm">Male </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Status</div>
                <div className="text-sm">
                  <Switch defaultChecked />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Social Media Links
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">linkedIn</div>
                <div className="text-sm">url//https//rfwgdjkwjk</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Instagram</div>
                <div className="text-sm">url//https//rfwgdjkwjk</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Twitter</div>
                <div className="text-sm">url//https//rfwgdjkwjk</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Facebook</div>
                <div className="text-sm">url//https//rfwgdjkwjk</div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default PersonalInformation;
