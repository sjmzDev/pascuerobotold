const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("invitacion")
    .setDescription("Te diré el link de la invitación del pascuero"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "https://discord.io/LaOrdenDelViejoPascuero ahí esta ✅."});
    },
};