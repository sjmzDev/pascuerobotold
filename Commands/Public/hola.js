const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("hola")
    .setDescription("como estas"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "**Bienvenido al servidor del pascuero**, esperamos que te diviertas! 😀 Cualquier duda crea un ticket ❗."});
    },
};