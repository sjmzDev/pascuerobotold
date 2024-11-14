const { loadCommands } = require("../../Handlers/commandHandler");
const config = require("../../config.json")
const mongoose = require ("mongoose")

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log("El cliente se ha iniciado");

        loadCommands(client);
    },
};
