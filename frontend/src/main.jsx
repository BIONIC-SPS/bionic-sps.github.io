import "./main.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Network from "./network/Network.jsx";

const el = document.getElementById("network-root");
if (el) createRoot(el).render(<Network />);