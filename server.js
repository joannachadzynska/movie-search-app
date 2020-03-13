const express = require("express");
// import { Router } from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server is running on port ${PORT}`);
