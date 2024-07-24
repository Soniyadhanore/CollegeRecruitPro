import { Card, Col, Row } from "antd";
const AcademicDetails = () => {
  return (
    <>
      <Card>
        <div className="font-semibold text-base mb-[10px]">
          Educational Background
        </div>
          <Row>
          <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Highest Degree</div>
                <div className="text-sm">B.Sc in Sports Science</div>
              </div>
            </Col>  
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Field of Study</div>
                <div className="text-sm">Sports Biomechanics</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">College Name</div>
                <div className="text-sm">St. Stephen Higher Secondary School</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Graduation Year</div>
                <div className="text-sm">1983</div>
              </div>
            </Col>
          </Row>
        <div>
          <div className="font-semibold text-base">
            College Information
          </div>
            <Row>
              <Col span={20}>
              <div className="mr-4 mt-1">
                <div className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
              </div>
            </Col>
            </Row>
        </div>
      </Card>
    </>
  );
};
export default AcademicDetails;