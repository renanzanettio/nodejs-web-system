import express from 'express';
import TimeMachine from '../models/TimeMachine.js';
const router = express.Router();

// ROTA TIME MACHINE
router.get("/time-machine", (req, res) => {
  TimeMachine.findAll().then((month) => {
    const User = {
      name: "RwnanZ",
      img: "profile.png"
    }
    res.render("time-machine", {
      TimeMachine: month,
      Page: "TimeMachine",
      User: User,
    });
  }).catch((err) => {
    console.log(err);
  });
});

//Rota de criação de novo mês na Time Machine
router.post("/time-machine/new", (req, res) => {
  const month = req.body.month;
  const minutes = req.body.minutes;
  const musics = req.body.musics;
  const average = req.body.average;
  TimeMachine.create({
    month: month,
    minutes: minutes,
    musics: musics,
    average: average
  }).then(() => {
    res.redirect("/time-machine");
  }).catch((err) => {
    console.log(err);
  });
});

//Rota de exclusão de mês na Time Machine
router.get("/time-machine/delete/:id", (req, res) => {
  const id = req.params.id;
  TimeMachine.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect("/time-machine");
  }).catch((err) => {
    console.log(err);
  });
})

// ROTA DE EDIÇÃO DE TIME MACHINE
router.get("/time-machine/edit/:id", (req, res) => {
  const id = req.params.id;
  TimeMachine.findByPk(id).then((timeMachine) => {
    const User = {
      name: "RwnanZ",
      img: "profile.png"
    }
    res.render("time-machine-edit", {
      timeMachine: timeMachine,
      Page: "TimeMachine",
      User: User,
    });
  }).catch((err) => {
    console.log(err);
  });
});

// ROTA DE ATUALIZAÇÃO DE TIME MACHINE
router.post("/time-machine/update/:id", (req, res) => {
  const id = req.params.id;
  const month = req.body.month;
  const minutes = req.body.minutes;
  const musics = req.body.musics;
  const average = req.body.average;
  TimeMachine.update({
    month: month,
    minutes: minutes,
    musics: musics,
    average: average
  }, {
    where: {
      id: id
    }
  }).then(() => {
    res.redirect("/time-machine");
  }).catch((err) => {
    console.log(err);
  });
});

// Implementação sem banco de dados
// router.get('/time-machine', (req, res) => {
//     const User = {
//     name: "RwnanZ",
//     img: "profile.png"
//   }
//   const TimeMachine = [
//     {
//       id: 1,
//       month: "Maio 2025",
//       minutes: "5.842",
//       musics: "558",
//       average: "188"
//     },
//     {
//       id: 2,
//       month: "Junho 2025",
//       minutes: "9.632",
//       musics: "857",
//       average: "321"
//     },
//     {
//       id: 3,
//       month: "Julho 2025",
//       minutes: "6.300",
//       musics: "742",
//       average: "203"
//     },
//     {
//       id: 4,
//       month: "Agosto 2025",
//       minutes: "11.254",
//       musics: "1.027",
//       average: "363"
//     },
//     {
//       id: 5,
//       month: "Setembro 2025",
//       minutes: "10.258",
//       musics: "949",
//       average: "342"
//     },

//   ];

//   res.render('time-machine', {
//     User : User,
//     TimeMachine : TimeMachine,
//     Page : "TimeMachine"
//   });
// })

export default router;