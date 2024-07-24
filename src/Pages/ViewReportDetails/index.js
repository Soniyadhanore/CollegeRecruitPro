import { Card, Typography, Button, Row, Col, Tooltip } from "antd";
import {
  FilterOutlined,
  VideoCameraOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
const ViewReportDetails = () => {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Card>
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              View Report Details
            </Typography>
          </div>
          <div className="flex justify-end flex-wrap gap-3">
            <Search
              placeholder="Search by athlete name...   "
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              size={14}
              className="mx-1.5 cursor-pointer inline-btn"
              icon={<FilterOutlined />}
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <Card className="mb-5">
            <Row gutter={[40, 16]}>
              <Col span={12}>
                <Row>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Date :{" "}
                    </div>
                    <div className="text-base">12-Jun-24</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Athlete Name :{" "}
                    </div>
                    <div className="text-base">Joseph James</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Plan :{" "}
                    </div>
                    <div className="text-base">Free Plan</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Payment Amount :{" "}
                    </div>
                    <div className="text-base">$0</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Transaction ID :{" "}
                    </div>
                    <div className="text-base">CBNRT12345</div>
                  </Col>
                </Row>
              </Col>
              <Col span={12} className="text-right">
                <Button
                  size={14}
                  className="mx-1.5 cursor-pointer inline-btn"
                  icon={<VideoCameraOutlined />}
                >
                  Video File
                </Button>
                <Button
                  size={14}
                  className="mx-1.5 cursor-pointer inline-btn"
                  icon={
                    <Tooltip title="Download Report">
                      <DownloadOutlined />
                    </Tooltip>
                  }
                ></Button>
              </Col>
            </Row>
          </Card>
          <Card className="my-5">
            <Row gutter={[40, 16]}>
              <Col span={12}>
                <Row>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Date :{" "}
                    </div>
                    <div className="text-base">12-Jun-24</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Athlete Name :{" "}
                    </div>
                    <div className="text-base">Joseph James</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Plan :{" "}
                    </div>
                    <div className="text-base">Premium Plan</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Payment Amount :{" "}
                    </div>
                    <div className="text-base">$0</div>
                  </Col>
                  <Col
                    className="gutter-row flex items-start justify-start mb-4"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={24}
                  >
                    <div className="text-base font-medium text-black w-[250px]">
                      Transaction ID :{" "}
                    </div>
                    <div className="text-base">CBNRT12345</div>
                  </Col>
                </Row>
              </Col>
              <Col span={12} className="text-right">
                <Button
                  size={14}
                  className="mx-1.5 cursor-pointer inline-btn"
                  icon={<VideoCameraOutlined />}
                >
                  Video File
                </Button>
                <Button
                  size={14}
                  className="mx-1.5 cursor-pointer inline-btn"
                  icon={
                    <Tooltip title="Download Report">
                      <DownloadOutlined />
                    </Tooltip>
                  }
                ></Button>
              </Col>
            </Row>
          </Card>
        </div>
      </Card>
    </>
  );
};
export default ViewReportDetails;