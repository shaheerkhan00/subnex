import * as React from "react";
import styled from "styled-components";

// Import your components
import PendingJobs from "../pages/PendingJobs";
import PostJobComponent from "../components/PostJob";
import ShopDashboardCompnent from "./ShopDashboard";
import VendorDashboardComponent from "./VendorDashboard";

const options = [
  { id: 1, label: "Pending Jobs", component: PendingJobs },
  { id: 2, label: "Notifications", component: VendorDashboardComponent },
  { id: 3, label: "Post Jobs", component: PostJobComponent },
  { id: 4, label: "Post New Jobs", component: ShopDashboardCompnent },
];

function SlidingTabs() {
  const [activeOption, setActiveOption] = React.useState(options[0].id);

  const handleOptionClick = (optionId) => {
    setActiveOption(optionId);
  };

  return (
    <Container>
      <TabsContainer>
        {options.map((option) => (
          <Tab
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            isActive={activeOption === option.id}
          >
            {option.label}
          </Tab>
        ))}
      </TabsContainer>
      <TabContent isActive={activeOption}>
        {options.map((option) =>
          activeOption === option.id ? (
            <option.component key={option.id} />
          ) : null
        )}
      </TabContent>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 16px;
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  padding: 29px 44px 0 16px;
  margin: 20px; /* Adjust this value for margin */
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px; /* Adjust this value for margin */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Tab = styled.div`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#e7b31a" : "#000")};
  white-space: nowrap;
  font: ${({ isActive }) => (isActive ? "400 28px Poppins, sans-serif" : "400 28px Poppins, sans-serif")};
  margin-bottom: 8px;
  position: relative;

  &:hover {
    color: #e7b31a;
  }

  &:not(:last-child) {
    margin-right: 20px; /* Adjust this value for margin */
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
  }
  padding: 20px; /* Adjust this value for padding */
`;

export default SlidingTabs;
