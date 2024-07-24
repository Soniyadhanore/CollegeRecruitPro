import { Card, Col, Row, Typography } from "antd";
import CanvasJSReact from "@canvasjs/react-charts";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Dashboard = () => {
  const FreePlan_PremiumPlan = {
    exportEnabled: false,
    animationEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 135,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: false,
        legendText: false,
        indexLabelFontSize: 14,
        indexLabel: false,
        dataPoints: [
          { y: 38, label: "Free Plan" },
          { y: 62, label: "Premium Plan" },
        ],
      },
    ],
  };
  const GanderGraph = {
    animationEnabled: true,
    data: [
      {
        dataPoints: [
          { y: 22, label: "Male" },
          { y: 20, label: "Female" },
          { y: 21, label: "Other" },
        ],
      },
    ],
  };
  const ApplicationReceived_PerDay = {
    animationEnabled: true,
    data: [
      {
        dataPoints: [
          { y: 22, label: "Mon" },
          { y: 20, label: "Tus" },
          { y: 21, label: "Wed" },
          { y: 20, label: "Thu" },
          { y: 21, label: "Fry" },
        ],
      },
    ],
  };
  const ApplicationReceived_PerWeek = {
    animationEnabled: true,
    data: [
      {
        type: "bar",
        dataPoints: [
          { y: 22, label: "Week1" },
          { y: 20, label: "Week2" },
          { y: 21, label: "Week3" },
          { y: 20, label: "Week4" },
          { y: 21, label: "Week5" },
          { y: 23, label: "Week6" },
        ],
      },
    ],
  };
  return (
    <>
      <Card>
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Dashboard
            </Typography>
          </div>
        </div>
        <div className="relative p-1">
          <Row>
            <Col span={10} className="text-center m-auto">
              <div className="mt-0">
                <div className="text-base font-semibold mb-2">
                  Free Plan vs Premium Plan Users
                </div>
                <CanvasJSChart options={FreePlan_PremiumPlan} />
              </div>
            </Col>
            <Col span={10} className="text-center m-auto">
              <div className="mt-0">
                <div className="text-base font-semibold mb-2">
                  Athlete (By Gender Graph)
                </div>
                <CanvasJSChart options={GanderGraph} />
              </div>
            </Col>
            <Col span={10} className="text-center m-auto">
              <div className="mt-10">
                <div className="text-base font-semibold mb-2">
                  Application received (per day)
                </div>
                <CanvasJSChart options={ApplicationReceived_PerDay} />
              </div>
            </Col>
            <Col span={10} className="text-center m-auto">
              <div className="mt-10">
                <div className="text-base font-semibold mb-2">
                  Application received (per week)
                </div>
                <CanvasJSChart options={ApplicationReceived_PerWeek} />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default Dashboard;