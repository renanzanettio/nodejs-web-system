import { name } from "ejs";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
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
  const Artists = [
    {
      id: 1,
      nome: "Djonga",
      img: "djonga.png"
    },
    {
      id: 2,
      nome: "Sid",
      img: "sid.png"
    },
    {
      id: 3,
      nome: "Amy Winehouse",
      img: "amy-winehouse.png"
    },
    {
      id: 4,
      nome: "Foo Fighters",
      img: "foo-fighters.png"
    },
    {
      id: 5,
      nome: "Major RD",
      img: "major-rd.png"
    }
  ];
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
  res.render("index", {
    User : User,
    Playlist : Playlist,
    Artists : Artists,
    TimeMachine : TimeMachine,
    Page : "Home"
  });
});

export default router;
