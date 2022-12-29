const monk = require("monk");
const { dbConnectionString, options } = require(".");

const Tags = monk(dbConnectionString, options).get("tags");

module.exports = {
  getAll: (options = {}) => Tags.find({}, options),

  findById: (_id) => Tags.findOne({ _id }),

  findBySlug: (slug) => Tags.findOne({ slug }),

  create: (newTag) => Tags.insert(newTag),

  getAllTags: () => Tags.find({}),

  findExisting: (_id, slug) =>
    Tags.findOne({
      _id: { $ne: _id },
      slug,
    }),

  update: (_id, update) => Tags.update({ _id }, { $set: update }),

  delete: (_id) => Tags.remove({ _id }),

  getFiveRandom: () => Tags.aggregate([{ $sample: { size: 5 } }]),
};
