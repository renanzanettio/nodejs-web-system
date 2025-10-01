import express from 'express';
const router = express.Router();

router.get('/artists', (req, res) => {
  res.render('artists');
})

export default router;