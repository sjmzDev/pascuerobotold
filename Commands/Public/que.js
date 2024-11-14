const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("que")
    .setDescription("......"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "**SOOOOOOOOOOOOOOOOOOOO**"});
    },
};