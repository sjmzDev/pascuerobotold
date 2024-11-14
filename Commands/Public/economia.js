const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("economia")
    .setDescription("¡Cosas que debes saber sobre la economia del servidor!"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {
     interaction.reply({ content: "**La moneda del servidor serán las estrellas (⭐) y las podras conseguir con los siguientes comandos!** | $slut = puedes ganar dinero como tambien perderlo ❗ | $work = puedes ganar dinero sin perder nada ❗ | $crime = puedes ganar mucho dinero o tambien perderlo ❗ | $rob = para robar el dinero del banco de otras personas ❗ . ✅"});
    },
};