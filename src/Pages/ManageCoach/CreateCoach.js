// This page is for both add and edit
import { Button, Card, Divider, Tabs, Typography } from "antd";
import {
  LeftOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./CreateCoachTabs/PersonalInformation";
import ProfessionalDetails from "./CreateCoachTabs/ProfessionalDetails";
import AcademicDetails from "./CreateCoachTabs/AcademicDetails";
import { useState } from "react";
const { TabPane } = Tabs;
const CreateCoach = () => {
  const navigate = useNavigate();
  const [activeTabKey, setActiveTabKey] = useState("1");
  const nextTab = () => {
    const nextKey = (parseInt(activeTabKey) + 1).toString();
    setActiveTabKey(nextKey);
  };
  const backTab = () => {
    const backKey = (parseInt(activeTabKey) - 1).toString();
    setActiveTabKey(backKey);
  };
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
              Add/Edit Coach
            </Typography>
          </div>
        </div>
        <Divider />
        <Tabs activeKey={activeTabKey} onChange={(key) => setActiveTabKey(key)}>
          <TabPane tab="Personal Information" key="1">
            <PersonalInformation />
            <div className="flex justify-end my-5">
              <Button
                type="primary"
                size={14}
                className="mx-1.5 cursor-pointer flex items-center justify-between"
                onClick={nextTab}
              >
                Next
                <DoubleRightOutlined suffix />
              </Button>
            </div>
          </TabPane>
          <TabPane tab="Professional Details" key="2">
            <ProfessionalDetails />
            <div className="flex justify-end my-5">
              <Button
                size={14}
                className="mx-1.5 cursor-pointer inline-btn"
                icon={<DoubleLeftOutlined />}
                onClick={backTab}
              >
                Back
              </Button>
              <Button
                type="primary"
                size={14}
                className="mx-1.5 cursor-pointer flex items-center justify-between"
                onClick={nextTab}
              >
                Next
                <DoubleRightOutlined suffix />
              </Button>
            </div>
          </TabPane>
          <TabPane tab="Academic details" key="3">
            <AcademicDetails />
            <div className="flex justify-end my-5">
              <Button
                size={14}
                className="mx-1.5 cursor-pointer inline-btn"
                icon={<DoubleLeftOutlined />}
                onClick={backTab}
              >
                Back
              </Button>
              <Button
                type="primary"
                size={14}
                className="mx-1.5 cursor-pointer flex items-center justify-between"
              >
                Add
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
export default CreateCoach;