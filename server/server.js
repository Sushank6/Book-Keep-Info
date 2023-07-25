// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const passport = require("passport");
// const authRoute = require("./routes/auth");
// const cookieSession = require("cookie-session");
// const passportStrategy = require("./passport");
// const app = express();

// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["sushank"],
//     maxAge: 24 * 60 * 60 * 100,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// app.use("/auth", authRoute);

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Listenting on port ${port}...`));
require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["sush"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
