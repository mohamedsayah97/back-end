import CategoryModel from "../models/Category.js";

const categoryRepo = {
  async insert(data) {
    return await CategoryModel.create(data);
  },

  async insertMany(data) {
    return await CategoryModel.insertMany(data);
  },

  async delete(data) {
    // will delete by given filter {name: "category_name"}
    return await CategoryModel.findOneAndDelete(data);
  },

  async deleteById(id) {
    //will delete by id
    return await CategoryModel.findByIdAndDelete(id);
  },

  async deleteMany(data) {
    return await CategoryModel.deleteMany(data);
  },

  async update(filter, data) {
    return await CategoryModel.update(filter, data);
  },

  async update(filter, data) {
    return await CategoryModel.updateMany(filter, data);
  },

  async find(query) {
    return await CategoryModel.find(query);
  },

  async findById(id) {
    return await CategoryModel.findById(id);
  },

  async findOne(query) {
    return await CategoryModel.findOne(query);
  },
};

export default categoryRepo;
