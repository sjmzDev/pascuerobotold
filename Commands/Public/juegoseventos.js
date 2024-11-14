const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("juegoseventos")
    .setDescription("Se te dirán los juegos que jugamos para los eventos."),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "**Minecraft**: En un servidor alterno hosteado en Minecraft podemos jugar cantidades de minijuegos ahí y llevaras premios. (Hide and Seek, **PURGA**, Bedwars, etc. | **Left 4 Dead 2**: Consistirán en equipos cuales tu podrás crear tú con tus amigos para así competir en quien se llevará el premio entre ustedes. | **JUEGOS WEB**: Cualquier juego web que seá competitivo y que sea por equipos o un FFA. | **CRAB GAME**: Es un juego de steam que es gratis y es muy divertido, el quien gane las rondas necesarias para el premio se lleva la recompensa."});
    },
};