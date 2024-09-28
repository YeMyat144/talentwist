const express = require('express');
const router = express.Router();
const Story = require('../../models/Story');

// POST /api/add
router.post('/', async (req, res) => {
  try {
    const { title, description, author, content, coverImage } = req.body;

    if (!title || !description || !content) {
      return res.status(400).json({ message: 'Title, description, and content are required.' });
    }

    const newStory = new Story({
      title,
      description,
      author: author || 'Unknown', // Default to 'Unknown' if author is not provided
      content,
      coverImage: coverImage || '', // Default to empty if coverImage is not provided
    });

    await newStory.save();
    res.status(201).json({ message: 'Story added successfully!', story: newStory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add story.', error: error.message });
  }
});

module.exports = router;
