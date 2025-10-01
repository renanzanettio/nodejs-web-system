import express from 'express';
const router = express.Router();

router.get('/stats', (req, res) => {
  res.render('stats');
})

export default router;