import { Card, Divider, Tabs, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./ViewAthleteDetails/PersonalInformation";
import SocialMedia from "./ViewAthleteDetails/SocialMedia";
import AcademicDetails from "./ViewAthleteDetails/AcademicDetails";
import SportsDetails from "./ViewAthleteDetails/SportsDetails";
import SubscriptionDetails from "./ViewAthleteDetails/SubscriptionDetails";
import AppliedApplications from "./ViewAthleteDetails/AppliedApplications";
const { TabPane } = Tabs;
const ViewAthlete = () => {
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
              View Athlete Details
            </Typography>
          </div>
        </div>
        <Divider />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Information" key="1">
            <PersonalInformation />
          </TabPane>
          <TabPane tab="Social " key="2">
            <SocialMedia />
          </TabPane>
          <TabPane tab="Academic Details" key="3">
            <AcademicDetails />
          </TabPane>
          <TabPane tab="Sports Details" key="4">
            <SportsDetails />
          </TabPane>
          <TabPane tab="Subscription Details" key="5">
            <SubscriptionDetails />
          </TabPane>
          <TabPane tab="Applied Applications" key="6">
            <AppliedApplications />
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
export default ViewAthlete;