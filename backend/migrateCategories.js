const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const Category = require('./models/Category');
require('dotenv').config();

async function migrateCategories() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // First, let's create some default categories
    const defaultCategories = [
      { name: 'HR Technology', color: '#3B82F6' },
      { name: 'Employee Engagement', color: '#10B981' },
      { name: 'Leadership', color: '#F59E0B' },
      { name: 'Recruitment', color: '#EF4444' },
      { name: 'Workplace Culture', color: '#8B5CF6' },
      { name: 'HR Strategy', color: '#06B6D4' },
      { name: 'Diversity & Inclusion', color: '#EC4899' },
      { name: 'Performance Management', color: '#84CC16' }
    ];

    console.log('Creating default categories...');
    const createdCategories = {};
    
    for (const cat of defaultCategories) {
      const existingCategory = await Category.findOne({ name: cat.name });
      if (!existingCategory) {
        // Generate slug manually
        const slug = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const newCategory = new Category({
          ...cat,
          slug: slug
        });
        await newCategory.save();
        createdCategories[cat.name] = newCategory._id;
        console.log(`Created category: ${cat.name}`);
      } else {
        createdCategories[cat.name] = existingCategory._id;
        console.log(`Category already exists: ${cat.name}`);
      }
    }

    // Now update all blog posts to use ObjectId references
    console.log('Updating blog posts...');
    const posts = await BlogPost.find({});
    
    for (const post of posts) {
      // Check if the post has a string category
      if (post.category && typeof post.category === 'string') {
        const categoryName = post.category;
        const categoryId = createdCategories[categoryName];
        
        if (categoryId) {
          post.category = categoryId;
          await post.save();
          console.log(`Updated post "${post.title}" to use category: ${categoryName}`);
        } else {
          // If category doesn't exist, assign to "HR Strategy" as default
          post.category = createdCategories['HR Strategy'];
          await post.save();
          console.log(`Updated post "${post.title}" to default category: HR Strategy`);
        }
      }
    }

    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

migrateCategories(); 