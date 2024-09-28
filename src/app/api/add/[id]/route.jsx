const express = require('express');
const router = express.Router();
const Story = require('../../../models/Story');

router.put('/:id', async (req, res) => {
  try {
    const storyId = req.params.id;
    const { title, description, author, content, coverImage } = req.body;

    const story = await Story.findById(storyId);

    if (!story) {
      return res.status(404).json({ message: 'Story not found.' });
    }

    story.title = title || story.title;
    story.description = description || story.description;
    story.author = author || story.author;
    story.content = content || story.content;
    story.coverImage = coverImage || story.coverImage;

    await story.save();
    res.status(200).json({ message: 'Story updated successfully!', story });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update story.', error: error.message });
  }
});

module.exports = router;
