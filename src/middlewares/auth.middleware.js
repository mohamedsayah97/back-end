import jwt from "jsonwebtoken";
import userRepo from "../repositories/user.repo.js";

export const authorizer = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    await userRepo.findById(decodedToken._id);
    next();
  } catch (error) {
    res.status(400).json({ message: "wrong credentials" });
  }
};
