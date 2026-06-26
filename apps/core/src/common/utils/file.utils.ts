import multer from "multer";
import { ApiError } from "../errors/errors";

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
