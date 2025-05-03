import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/", async (req, res) => {
  console.log("Start timer");
  const startTime = Date.now();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const endTime = Date.now();
  const duration = endTime - startTime;
  console.log(`End timer: ${duration}ms`);
  const randomNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: "Hello!",
    duration: duration,
    randomNumber: randomNumber,
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
