import { useState } from "react";
import { Card, Col, Form, Row } from "antd";
const AppliedApplications = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="font-semibold text-base mb-[25px]">
        Applied Applications
      </div>
      <Card className="mb-10">
        <div>
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
            <div className="max-w-5xl	">
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
                    Coach Name :{" "}
                  </div>
                  <div className="text-base">Johnny James</div>
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
                    College Details :{" "}
                  </div>
                  <div className="text-base">
                    St. Stephen Higher School, USA
                  </div>
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
                    Mode :{" "}
                  </div>
                  <div className="text-base">Mail, Instagram</div>
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
                    Message Sent :{" "}
                  </div>
                  <div className="text-base w-[70%]">
                    Hi Mr. Johny, Hope you're doing well. This is to acknowledge
                    that I am a student...
                    {!isExpanded && (
                      <span
                        onClick={handleReadMore}
                        className="text-blue-500 cursor-pointer"
                      >
                        Read more
                      </span>
                    )}
                    {isExpanded && (
                      <>
                        <span>
                          I am writing to you in regard to the project we
                          discussed last week. I have made significant progress
                          and would like to share the details with you. Please
                          let me know your availability for a meeting next week.
                        </span>
                        <span
                          onClick={handleReadMore}
                          className="text-blue-500 cursor-pointer"
                        >
                          Show less
                        </span>
                      </>
                    )}
                  </div>
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
                    Applied date & time :{" "}
                  </div>
                  <div className="text-base">22-Jan-24 - 12:00pm</div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Card>
      <Card className="mb-10">
        <div>
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
            <div className="max-w-5xl	">
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
                    Coach Name :{" "}
                  </div>
                  <div className="text-base">Johnny James</div>
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
                    College Details :{" "}
                  </div>
                  <div className="text-base">
                    St. Stephen Higher School, USA
                  </div>
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
                    Mode :{" "}
                  </div>
                  <div className="text-base">Mail, Instagram</div>
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
                    Message Sent :{" "}
                  </div>
                  <div className="text-base w-[70%]">
                    Hi Mr. Johny, Hope you're doing well. This is to acknowledge
                    that I am a student...
                    {!isExpanded && (
                      <span
                        onClick={handleReadMore}
                        className="text-blue-500 cursor-pointer"
                      >
                        Read more
                      </span>
                    )}
                    {isExpanded && (
                      <>
                        <span>
                          I am writing to you in regard to the project we
                          discussed last week. I have made significant progress
                          and would like to share the details with you. Please
                          let me know your availability for a meeting next week.
                        </span>
                        <span
                          onClick={handleReadMore}
                          className="text-blue-500 cursor-pointer"
                        >
                          Show less
                        </span>
                      </>
                    )}
                  </div>
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
                    Applied date & time :{" "}
                  </div>
                  <div className="text-base">22-Jan-24 - 12:00pm</div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Card>
      <Card className="mb-10">
        <div>
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
            <div className="max-w-5xl	">
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
                    Coach Name :{" "}
                  </div>
                  <div className="text-base">Johnny James</div>
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
                    College Details :{" "}
                  </div>
                  <div className="text-base">
                    St. Stephen Higher School, USA
                  </div>
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
                    Mode :{" "}
                  </div>
                  <div className="text-base">Mail, Instagram</div>
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
                    Message Sent :{" "}
                  </div>
                  <div className="text-base w-[70%]">
                    Hi Mr. Johny, Hope you're doing well. This is to acknowledge
                    that I am a student...
                    {!isExpanded && (
                      <span
                        onClick={handleReadMore}
                        className="text-blue-500 cursor-pointer"
                      >
                        Read more
                      </span>
                    )}
                    {isExpanded && (
                      <>
                        <span>
                          I am writing to you in regard to the project we
                          discussed last week. I have made significant progress
                          and would like to share the details with you. Please
                          let me know your availability for a meeting next week.
                        </span>
                        <span
                          onClick={handleReadMore}
                          className="text-blue-500 cursor-pointer"
                        >
                          Show less
                        </span>
                      </>
                    )}
                  </div>
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
                    Applied date & time :{" "}
                  </div>
                  <div className="text-base">22-Jan-24 - 12:00pm</div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Card>
      <Card className="mb-10">
        <div>
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
            <div className="max-w-5xl	">
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
                    Coach Name :{" "}
                  </div>
                  <div className="text-base">Johnny James</div>
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
                    College Details :{" "}
                  </div>
                  <div className="text-base">
                    St. Stephen Higher School, USA
                  </div>
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
                    Mode :{" "}
                  </div>
                  <div className="text-base">Mail, Instagram</div>
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
                    Message Sent :{" "}
                  </div>
                  <div className="text-base w-[70%]">
                    Hi Mr. Johny, Hope you're doing well. This is to acknowledge
                    that I am a student...
                    {!isExpanded && (
                      <span
                        onClick={handleReadMore}
                        className="text-blue-500 cursor-pointer"
                      >
                        Read more
                      </span>
                    )}
                    {isExpanded && (
                      <>
                        <span>
                          I am writing to you in regard to the project we
                          discussed last week. I have made significant progress
                          and would like to share the details with you. Please
                          let me know your availability for a meeting next week.
                        </span>
                        <span
                          onClick={handleReadMore}
                          className="text-blue-500 cursor-pointer"
                        >
                          Show less
                        </span>
                      </>
                    )}
                  </div>
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
                    Applied date & time :{" "}
                  </div>
                  <div className="text-base">22-Jan-24 - 12:00pm</div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};
export default AppliedApplications;