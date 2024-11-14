const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("staffayuda")
    .setDescription("Que deberías hacer si ocurre algo o tienes algun reporte de alguien"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "**CREA UN TICKET**, es urgente que crees un ticket para así que el **STAFF** pueda ver tu consulta/duda o reporte hacia cualquier usuario y/o staff ❗"});
    },
};