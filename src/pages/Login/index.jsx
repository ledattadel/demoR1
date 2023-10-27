import React from "react";
import { Form, Input, Button, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import {
    // Form,
    // useLoaderData,
    // redirect,
    useNavigate,
  } from "react-router-dom";
  
import "./index.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const accountInfo = {
        account: values.account,
      };
      
      localStorage.setItem('accountInfo', JSON.stringify(accountInfo));
      localStorage.setItem('isLoggedIn', 'true');
      // if (values) {
        navigate("Root");
      // }

      console.log("check click", localStorage.getItem('isLoggedIn'), navigate("/"));

  };



  return (
    <div className="login-form-container">
      <Form name="login-form" onFinish={onFinish}>
        <Form.Item
        //   label="Account"
          name="account"
          rules={[
            {
              required: true,
              type: "text",
              message: "Please enter a valid account",
            },
          ]}
        >
          <Input
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="custom-button">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
