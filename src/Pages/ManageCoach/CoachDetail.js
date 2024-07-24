import { Card, Divider, Tabs, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./CoachDetailTabs/PersonalInformation";
import ProfessionalDetails from "./CoachDetailTabs/ProfessionalDetails";
import AcademicDetails from "./CoachDetailTabs/AcademicDetails";
const { TabPane } = Tabs;
const CoachDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="flex justify-between items-center mb-4 gap-3">
          <div>
            <Typography
              className="text-xl font-semibold"
              align={"left"}
            
            >
              <LeftOutlined
                className="text=lg text-black mr-2 cursor-pointer"
                onClick={() => navigate(-1)}
              />
              Coach Details
            </Typography>
          </div>
        </div>
        <Divider />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Information" key="1">
            <PersonalInformation />
          </TabPane>
          <TabPane tab="Professional Details" key="2">
            <ProfessionalDetails />
          </TabPane>
          <TabPane tab="Academic details" key="3">
            <AcademicDetails />
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
export default CoachDetail;