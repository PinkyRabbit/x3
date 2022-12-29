const monk = require("monk");
const { dbConnectionString, options } = require(".");

const Categories = monk(dbConnectionString, options).get("categories");

module.exports = {
  getAll: () => Categories.find({}),

  createOrUpdate: (category) =>
    Categories.findOneAndUpdate({ name: category.name }, { $set: category }, { upsert: true, returnNewDocument: true }),

  findBySlug: (slug) => Categories.findOne({ slug }),

  findById: (_id) => Categories.findOne({ _id }),

  getAllCategories: () => Categories.find({}),

  pickOtherCategoryWithSameSlug: (_id, slug) =>
    Categories.findOne({
      _id: { $ne: _id },
      slug,
    }),

  update: (_id, update) => Categories.findOneAndUpdate({ _id }, { $set: update }, { returnNewDocument: true }),

  delete: (_id) => Categories.remove({ _id }),
};
