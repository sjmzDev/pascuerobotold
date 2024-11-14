const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tickets")
    .setDescription("Con este comando creas el mensaje del ticket! 📑")
    .addChannelOption(option =>
      option.setName('canal')
        .setDescription('Menciona un canal para enviar el sistema')
        .setRequired(true))
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */

  async execute(interaction, client) {
    const user = interaction.options.getUser(`target`);
    const { guild } = interaction;

    const canal = interaction.options.getChannel("canal")
    const descripcion = interaction.options.getString("descripcion");

    const embed = new EmbedBuilder()
    .setColor(`#5398ff`)
    .setAuthor({ name: `${guild.name}`, iconURL: `${guild.iconURL({dynamic: true}) || "https://images-ext-2.discordapp.net/external/V8NTmExAsoeNVFlXTtsdqTUq5sWChtRYhktplhRJ_5s/https/discord.io/content/server/964282797021884456_bGGHtjgu2zTu.png"}` })
    .setTitle(" `🎅` | **Pascuero Bot | Ticket System**")
    .addFields({
        name: ` ¡Clickea el boton de "📩 Crear Ticket" !`,  
        value: `
        ══════════════════\nBienvenido al sistema de tickets, aca crearas tu ticket dependiendo cual sea la razon del ticket.\n══════════════════\n***¡REACCIONA AL ICONO DE ABAJO PARA ABRIR UN TICKET!***`
    })
    .setThumbnail(`https://images-ext-2.discordapp.net/external/V8NTmExAsoeNVFlXTtsdqTUq5sWChtRYhktplhRJ_5s/https/discord.io/content/server/964282797021884456_bGGHtjgu2zTu.png`)
    .setFooter({ text: 'Pascuero Bot | Ticket System', iconURL: 'https://images-ext-2.discordapp.net/external/V8NTmExAsoeNVFlXTtsdqTUq5sWChtRYhktplhRJ_5s/https/discord.io/content/server/964282797021884456_bGGHtjgu2zTu.png' })

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ticket1")
        .setLabel("Crear Ticket")
        .setEmoji("📩")
        .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
        .setCustomId("tickethead")
        .setLabel("Head Staff")
        .setEmoji("👮‍♂️")
        .setStyle(ButtonStyle.Danger),

        new ButtonBuilder()
        .setCustomId("ticketsugerencia")
        .setLabel("Sugerencias")
        .setEmoji("✨")
        .setStyle(ButtonStyle.Primary),

    )

    const embed1 = new EmbedBuilder()
      .setColor('#0bff00')
      .setTitle('**Pascuero Bot Official | System Tickets** ')
      .setDescription('***| ✅ | El mensaje de tu ticket se ha enviado correctamente***')
      .setTimestamp();

    interaction.reply({ embeds: [embed1], ephemeral: true });

    canal.send({ embeds: [embed], components: [button] })

  },
};