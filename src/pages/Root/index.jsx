import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  ConfigProvider,
  Avatar,
  Badge,
} from "antd";
import { useState, useEffect } from "react";
import { Login } from "../index";
import { NotFound } from "../../components/global";
import { TodoList } from "../../components";
import {
  // Form,
  // useLoaderData,
  // redirect,
  useNavigate,
  Link
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const items1 = [
  { key: "1", label: "Home" },
  { key: "2", label:   <Link to='/pictureforfun'>Picture</Link>},
  { key: "3", label: "nav 3" },
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    const fetchUserInfo = JSON.parse(localStorage.getItem("accountInfo"));
    if (fetchUserInfo) {
      setUserInfo(fetchUserInfo);
    }
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#192655",
          color: "#86A789",
          justifyContent: "space-between",
        }}
      >
        {/* <div className="demo-logo" /> */}
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                //   darkItemColor: '#86A789',
                darkItemBg: "#3876BF",
                //   darkSubMenuItemBg: '#86A789',
                darkItemSelectedColor: "#86A789",
                darkItemSelectedBg: "#86A789",
              },
            },
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items1}
          />
        </ConfigProvider>

        <div>
          <span style={{ color: "white", marginRight: "20px" }}>
            {" "}
            Welcome {`${userInfo?.account}`}{" "}
          </span>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
          <Button
            style={{
              width: "100px",
              height: "100%",
              border: "none",
              background: "transparent",
              color: "white",
              padding: "0",
            }}
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        ></Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: "#DADDB1",
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 800,
            }}
          >
            <TodoList></TodoList>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  ) : (
    <NotFound />
  );
};
export default Root;
