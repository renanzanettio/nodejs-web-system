import express from 'express';
const router = express.Router();

router.get('/playlists', (req, res) => {
  res.render('playlists');
})

export default router;