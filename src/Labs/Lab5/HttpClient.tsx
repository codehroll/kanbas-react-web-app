import React, { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
    // const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    // setWelcomeOnClick(response.data);
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);
  // the useEffect hook in this component triggers fetchWelcomeOnLoad to run only once after the component first renders,
  // ensuring that a welcome message is fetched and displayed automatically when the page loads.
  // The[] at the end of useEffect is the dependencies array. When it’s empty, it means that useEffect will only run once—when the component is first mounted.

  return (
    <div>
      <h3>HTTP Client</h3> <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from server: <b>{welcomeOnClick}</b>
      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}
