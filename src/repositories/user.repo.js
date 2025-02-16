import UserModel from "../models/User.js";
import { hashPassword } from "../utils/password.util.js";

const userRepo = {
  async insert(data) {
    const hashedPassword = hashPassword(data.password);
    return await UserModel.create({ ...data, password: hashedPassword });
  },

  async insertMany(data) {
    return await UserModel.insertMany(data);
  },

  async delete(data) {
    return await UserModel.deleteOne(data);
  },

  async deleteById(id) {
    //will delete by id
    return await UserModel.findByIdAndDelete(id);
  },

  async deleteMany(data) {
    return await UserModel.deleteMany(data);
  },

  async update(filter, data) {
    return await UserModel.update(filter, data);
  },

  async updateById(id, data) {
    return await UserModel.findByIdAndUpdate(id, data);
  },

  async find(query) {
    return await UserModel.find(query);
  },

  async findById(id) {
    return await UserModel.findById(id);
  },

  async findOne(query) {
    return await UserModel.findOne(query);
  },
};

export default userRepo;
