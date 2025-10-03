import express from 'express';
const router = express.Router();

router.get('/playlists', (req, res) => {
  const User = {
    name: "RwnanZ",
    img: "profile.png"
  }
  const Playlist = [
    {
      id: 1,
      link: "https://open.spotify.com/embed/playlist/3EvzO8mc6qo069C46qJs7G?utm_source=oembed",
    },
    {
      id: 2,
      link: "https://open.spotify.com/embed/playlist/6s3MvTV3aEAPLW5791p2Hc?utm_source=oembed",
    },
    {
      id: 3,
      link: "https://open.spotify.com/embed/playlist/6FfztmIt7QCG0QdA0DAyDf?utm_source=oembed",
    },
    {
      id: 4,
      link: "https://open.spotify.com/embed/playlist/1vAT1e7McDsaan9ZS2mlIx?utm_source=oembed",
    },
    {
      id: 5,
      link: "https://open.spotify.com/embed/playlist/5lWYfxlLEEifRtsySN0lUF?utm_source=oembed",
    }
  ];


  res.render('playlists', {
    User : User,
    Playlist : Playlist,
    Page : "Playlists"
  });
})

export default router;