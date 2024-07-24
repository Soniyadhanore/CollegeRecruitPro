import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ConfigProvider, Layout } from "antd";
import HeaderComponent from "../Layout/HeaderComponent";
import LeftSidebar from "../Layout/LeftSidebar";
import Login from "../Pages/Auth/Login";
import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import ResetPassword from "../Pages/Auth/ResetPassword";
import ManageCategory from "../Pages/ManageCategory";
import PrivacyPolicy from "../Pages/CMS/PrivacyPolicy";
import TermsAndConditions from "../Pages/CMS/TermsAndConditions";
import ManageMediaBlog from "../Pages/ManageMediaBlog";
import CreateBlog from "../Pages/ManageMediaBlog/CreateBlog";
import ManageAthlete from "../Pages/ManageAthlete";
import ViewAthlete from "../Pages/ManageAthlete/ViewAthlete";
import EditAthlete from "../Pages/ManageAthlete/EditAthlete";
import ManageCollege from "../Pages/ManageColleges";
import ViewCollege from "../Pages/ManageColleges/ViewCollege";
import CreateCollege from "../Pages/ManageColleges/CreateCollege";
import ManageCoach from "../Pages/ManageCoach";
import CoachDetail from "../Pages/ManageCoach/CoachDetail";
import CreateCoach from "../Pages/ManageCoach/CreateCoach";
import ManageSubscriptionPlan from "../Pages/ManageSubscriptionPlan";
import ViewReportDetails from "../Pages/ViewReportDetails";
import ViewTransactionDetails from "../Pages/ManageSubscriptionPlan/ViewTransactionDetails";
import ViewSubscriptionDetails from "../Pages/ManageSubscriptionPlan/ViewSubscriptionDetails";
import EditSubscriptionDetails from "../Pages/ManageSubscriptionPlan/EditSubscriptionDetails";
import ManageProfile from "../Pages/ManageProfile";
const { Content } = Layout;
const Routing = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = (collapsedState) => {
    setCollapsed(collapsedState);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0071F1",
        },
      }}
    >
      <Router>
        <Routes>
          {/* auth Route */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Layout with Sidebar and Header */}
          <Route
            path="/*"
            element={
              <Layout style={{ minHeight: "100vh" }}>
                <LeftSidebar
                  collapsed={collapsed}
                  toggleCollapsed={toggleSidebar}
                />
                <Layout>
                  <HeaderComponent toggleCollapsed={toggleSidebar} />
                  <Content style={{ margin: "16px 16px" }}>
                    <Routes>
                      {/* Dashboard Route */}
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route
                        path="/manage-category"
                        element={<ManageCategory />}
                      />
                      <Route
                        path="/manage-media-blog"
                        element={<ManageMediaBlog />}
                      />
                      <Route path="/create-blog" element={<CreateBlog />} />
                      <Route
                        path="/manage-athlete"
                        element={<ManageAthlete />}
                      />
                      <Route path="/view-athlete" element={<ViewAthlete />} />
                      <Route path="/edit-athlete" element={<EditAthlete />} />
                      <Route
                        path="/manage-college"
                        element={<ManageCollege />}
                      />
                      <Route path="/view-college" element={<ViewCollege />} />
                      <Route
                        path="/create-college"
                        element={<CreateCollege />}
                      />
                      <Route path="/manage-coach" element={<ManageCoach />} />
                      <Route path="/coach-detail" element={<CoachDetail />} />
                      <Route path="/create-coach" element={<CreateCoach />} />
                      <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                      />
                      <Route
                        path="/terms-and-conditions"
                        element={<TermsAndConditions />}
                      />
                      <Route
                        path="/manage-subscription-plan"
                        element={<ManageSubscriptionPlan />}
                      />
                      <Route
                        path="/view-transaction-details"
                        element={<ViewTransactionDetails />}
                      />
                      <Route
                        path="/view-subscription-details"
                        element={<ViewSubscriptionDetails />}
                      />
                      <Route
                        path="/edit-subscription-details"
                        element={<EditSubscriptionDetails />}
                      />
                      <Route
                        path="/view-report-details"
                        element={<ViewReportDetails />}
                      />
                      <Route
                        path="/manage-profile"
                        element={<ManageProfile />}
                      />
                    </Routes>
                  </Content>
                </Layout>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};
export default Routing;
