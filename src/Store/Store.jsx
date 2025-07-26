import { useState } from "react";
import BestSellers from "./BestSellers/BestSellers"
import NewArrivals from "./NewArrivals/NewArrivals";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts"
import "./Store.css";

function Store() {
  const [activeTab, setActiveTab] = useState("new");

  const renderContent = () => {
    switch (activeTab) {
      case "best":
        return <BestSellers />;
      case "featured":
        return <FeaturedProducts />;
      default:
        return <BestSellers />;
    }
  };

  return (
    <div className="product-navbar-container">
      <nav className="tabs">
        <button
          className={activeTab === "new" ? "tab active" : "tab"}
          onClick={() => setActiveTab("new")}
        >
          New Arrivals
        </button>
        <button
          className={activeTab === "best" ? "tab active" : "tab"}
          onClick={() => setActiveTab("best")}
        >
          Best Sellers
        </button>
        <button
          className={activeTab === "featured" ? "tab active" : "tab"}
          onClick={() => setActiveTab("featured")}
        >
          Featured Products
        </button>
      </nav>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default Store;
