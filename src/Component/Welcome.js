import React, { useState, useMemo } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import cookies from "js-cookie";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import config from "../config";
import { Repeat } from "@material-ui/icons";

export default function Welcome() {
    function UserInfo(props) {
        const [rows, setRows] = useState([]);
        const history = useHistory();
        const [errorMessage, setErrorMessage] = useState(null);
        useMemo(() => {
          if (!cookies.get("token")) {
            history.push({
              pathname: "/login",
            });
          } else {
            axios
              .get(`${config.baseUrl}/admin/users`, {
                headers: {
                  token: cookies.get("token"),
                },
              })
              .then((data) => {
                console.log(data);
                setRows(data.data);
              })
              .catch((error) => {
                const statusCode = error?.response?.status;
                if (statusCode === 401) {
                  setErrorMessage("You are not authorised to view this page");
                } else {
                  setErrorMessage("Something went wrong");
                }
              });
          }
        }, []);
    }
  return (
    <div
    style={{ backgroundColor: "#DCDCDC", height: "100vh", marginTop: "0" }}>
      <Header val="Logout"></Header>
      <paper elevation={10}>
      </paper>
    </div>

  );
}
