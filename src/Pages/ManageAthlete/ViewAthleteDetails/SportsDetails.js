import { Card, Col, Row } from "antd";
const SportsDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Sports Details:
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]"></div>
                <div className="text-sm">Baseball</div>
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
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Please mention Throw
                </div>
                <div className="text-sm">xyz</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Please mention your primary position
                </div>
                <div className="text-sm">XYZ</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Please mention your batting hand
                </div>
                <div className="text-sm">Right Hand</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Please mention your secondary position
                </div>
                <div className="text-sm">XYZ</div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default SportsDetails;
