const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    default: 'Unknown', // Optional field, could be provided when adding stories
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  coverImage: {
    type: String, // URL to the cover image
    default: '', // Optional field, can be added to store the image link
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
