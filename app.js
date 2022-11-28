const cron = require("node-cron");

// cron.schedule("*/2 * * * *", () => {
//   console.log("running a task every two minutes");
// });

// cron.schedule("10 * * * * *", () => {
//   console.log("runs at 10 seconds");
// });

cron.schedule(
  "0 0 12? * 12? 5L",
  () => {
    console.log("dont waste time ,Tikk Tikk Tikk Tikk");
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);
