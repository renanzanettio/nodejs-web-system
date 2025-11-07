import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const TimeMachine = connection.define("timemachine", {
    month: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    minutes: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    musics: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    average: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

//Cliente.sync({ force: false });

export default Cliente;
