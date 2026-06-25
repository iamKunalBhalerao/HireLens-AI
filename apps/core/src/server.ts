import "dotenv/config";
import app from "./app";

if (!process.env.PORT) {
  console.error("Error: PORT environment variable is not defined.");
  process.exit(1);
}

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
