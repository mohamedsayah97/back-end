import app from "./app.js";
import connectmongoDB from "./database/mongoose.js";

const PORT = process.env.PORT || 5000;

connectmongoDB();

app.listen(PORT, () => {
  console.log("server is running...");
});
