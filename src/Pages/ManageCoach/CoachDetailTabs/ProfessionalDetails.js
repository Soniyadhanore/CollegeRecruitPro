import { Card, Col, Row } from "antd";
const ProfessionalDetails = () => {
  return (
    <>
      <Card>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Current Position
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Title</div>
                <div className="text-sm">Senior Head Coach</div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">Work Address</div>
          <Row>
            <Col span={20}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Street Address</div>
                <div className="text-sm">
                  166-gxjjjk-vggkjmmkslkks,qm,m,mkm, Boston, USA
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Country</div>
                <div className="text-sm">USA</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">State/Province</div>
                <div className="text-sm">Van couver</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">City</div>
                <div className="text-sm">Boston</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Zip code/Postal Code
                </div>
                <div className="text-sm">123456</div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="font-semibold text-base">Professional Biography</div>
          <Row>
            <Col span={20}>
              <div className="mr-4 my-5">
                <div className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Coaching Experience
          </div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Total Years of Experience
                </div>
                <div className="text-sm">22</div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Previous Coaching Positions
          </div>
          <Row>
            <Col span={20}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Title</div>
                <div className="text-sm">Sports Teacher</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Start date</div>
                <div className="text-sm">21-Mar-24</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">End date</div>
                <div className="text-sm">17-Nov-12</div>
              </div>
            </Col>
            <Col span={20}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Key achievements
                </div>
                <div className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default ProfessionalDetails;
