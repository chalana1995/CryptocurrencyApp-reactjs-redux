import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import Icon from "../images/cryptocurrency.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-controller-container">

                      </Button> */}
      </div>
    </div>
  );
}

export default Navbar;
