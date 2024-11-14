const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("sanciones")
    .setDescription("Aca se podrán ver razones por las cuales deberías ser sancionado."),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "**Hola comunidad del Pascuero!** Aca se hablarán sobre las sanciones que cada usuario tendrá si hace una de estas faltas ❌! | 1-No aprovecharse de los roles asignados, en consecuencia se le retirará el rol para siempre. | 2- Tener un respeto mutuo entre usuarios No se permite cualquier actitud toxica o xenofobia. | 3- En caso de hacer bromas, hazla con el debido respeto. | 4- No spam y flood. | 5- PROHIBIDO abusar de los BOTS."});
    },
};