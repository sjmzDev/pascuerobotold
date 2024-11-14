const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

  
  module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
      .setName("verificación-sistema")
      .setDescription("**Sistema de Verificación**")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {

const button = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId("ver")
    .setLabel("Verificate")
    .setStyle(ButtonStyle.Success),
);

    const embed = new EmbedBuilder()
    .setTitle("Verify System | Pascuero Bot")
    .setDescription(`Clickea el boton y verificate en el servidor para poder tenes acceso al resto de canales`)
    .setColor("White")

    await interaction.channel.send({ embeds: [embed], components: [button] });
    await interaction.reply({
      content: `El mensaje de verificacion se envio correctamente`,
      ephemeral: true,
    });
    },
  };