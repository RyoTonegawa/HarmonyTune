import { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("chord");
  return (
    <nav className="flex justify-center items-center p-4">
      <button
        onClick={() => setSelectedTab("home")}
        className={`px-4 py-2 ${
          selectedTab === "home"
            ? "border-b-2 border-green-500"
            : "text-gray-500"
        }`}
      ></button>
    </nav>
  );
};

export default Tabs;
