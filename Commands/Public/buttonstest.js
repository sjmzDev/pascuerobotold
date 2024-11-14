const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Te diré el link de la invitación del pascuero"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    execute(interaction) {

const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId(`hola p`)
        .setLabel(`como estas`)
        .setStyle(ButtonStyle.Success)
);
     interaction.reply({ components: [button] });
    },
};