import { Category } from "./category.js";

export const categoryMongoStore = {
//   async getCategoryById(id) {
//     const attractions = await Attraction.find({ listid: id }).lean();
//     return attractions;
//   },

//   async getAllAttractions() {
//     const attractions = await Attraction.find().lean();
//     return attractions;
//   },

//   async deleteAllAttractions() {
//     await Attraction.deleteMany({});
//   },

  async addCategory(category) {
    const newCategory = new Category(category);
    const categoryObj = await newCategory.save();
    return this.getCategoryById(categoryObj._id);
  },

  async getCategoryById(id) {
    if (id) {
      const foundCategory = await Category.findOne({ _id: id }).lean();
      return foundCategory;
    }
    return null;
  },

//   async deleteAttraction(id) {
//     try {
//       await Attraction.deleteOne({ _id: id });
//     } catch (error) {
//       console.log("bad id");
//     }
//   },


//   //Maybe add one for adding a category (array) 
//   // doc.tags.push('web development');
//   // https://masteringjs.io/tutorials/mongoose/array
//   async addCategoryToAttraction(id) {
//     if (id) {
//       const foundAttraction = await Attraction.findOne({ _id: id }).lean();
//       return foundAttraction;
//     }
//     return null;
//   },

};

