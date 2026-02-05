import express, { Request, Response } from "express";
const app = express();

// Testing get api
app.get("/", (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: `Express Server is running on port : ${process.env.PORT}`,
  });
});

// Not Fount Api
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Routes Not Found !",
    path: req.path,
  });
});

// default export
export default app;
