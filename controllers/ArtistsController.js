import express from "express";
const router = express.Router();

router.get("/artists", (req, res) => {
  const User = {
    name: "RwnanZ",
    img: "profile.png",
  };
  const Artists = [
    {
      id: 1,
      nome: "Djonga",
      img: "djonga.png",
    },
    {
      id: 2,
      nome: "Sid",
      img: "sid.png",
    },
    {
      id: 3,
      nome: "Amy Winehouse",
      img: "amy-winehouse.png",
    },
    {
      id: 4,
      nome: "Foo Fighters",
      img: "foo-fighters.png",
    },
    {
      id: 5,
      nome: "Major RD",
      img: "major-rd.png",
    },
  ];

  res.render("artists", {
    User: User,
    Artists: Artists,
    Page: "Artists",
  });
});

export default router;
