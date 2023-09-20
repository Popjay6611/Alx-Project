import React from "react";
import { Banner } from "../Components/Page/Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <Banner />
      <a
        
      >
        <div className="btn btn-danger form-control text-center text-white h4">
          This is Alx Acedemy Project
          <span className="text-warning"> By Popoola Joseph</span>
          
        </div>
      </a>
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
