import express from 'express';
const router = express.Router();

router.get('/time-machine', (req, res) => {
    const User = {
    name: "RwnanZ",
    img: "profile.png"
  }
  const TimeMachine = [
    {
      id: 1,
      month: "Maio 2025",
      minutes: "5.842",
      musics: "558",
      average: "188"
    },
    {
      id: 2,
      month: "Junho 2025",
      minutes: "9.632",
      musics: "857",
      average: "321"
    },
    {
      id: 3,
      month: "Julho 2025",
      minutes: "6.300",
      musics: "742",
      average: "203"
    },
    {
      id: 4,
      month: "Agosto 2025",
      minutes: "11.254",
      musics: "1.027",
      average: "363"
    },
    {
      id: 5,
      month: "Setembro 2025",
      minutes: "10.258",
      musics: "949",
      average: "342"
    },

  ];

  res.render('time-machine', {
    User : User,
    TimeMachine : TimeMachine,
    Page : "TimeMachine"
  });
})

export default router;