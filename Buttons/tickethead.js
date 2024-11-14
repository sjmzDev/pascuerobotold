const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ChannelType, PermissionsBitField } = require('discord.js');

module.exports = {
    data: {
        name: `tickethead`,
    },
    async execute(interaction, client) {


      const canal = await interaction.guild.channels.create({
        name: `ticket-head- ${interaction.user.tag}`,
        type: ChannelType.GuildText,
        parent: `1134674531122954260`
      });

      canal.permissionOverwrites.create(interaction.user.id, {
        ViewChannel: true,
        SendMessages: true,
      });

      canal.permissionOverwrites.create(canal.guild.roles.everyone, {
        ViewChannel: false,
        SendMessages: false,
      });
      

      await interaction.reply({
        content: `***| ✅ | El mensaje de tu ticket se ha enviado correctamente***`,
        ephemeral: true,
      });
      
        const embed = new EmbedBuilder()
        .setAuthor({name: ` | ¡Bienvenido a tu ticket, ${interaction.member.user.username}! 🎅 `, iconURL: interaction.member.displayAvatarURL({dynamic: true})})
        .setDescription(`Este es tu ticket en el cual podrás hablar con cualquier <@&1113657914775830568>.

        - **Debes ser respetuoso con la persona que estes hablando.**\n- **No puedes preguntar cosas externas al servidor.**\n- **Si haces algo inapropiado se le borrará el ticket.**

        Te responderá el/la <@&1113657914775830568>
        `)
        .setColor(`#cc0306`)
        .setFooter({ text: 'Pascuero Bot | Ticket System', iconURL: 'https://images-ext-2.discordapp.net/external/V8NTmExAsoeNVFlXTtsdqTUq5sWChtRYhktplhRJ_5s/https/discord.io/content/server/964282797021884456_bGGHtjgu2zTu.png' })

        const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setCustomId("close")
        .setLabel("Cerrar ticket")
        .setEmoji("🛑")
        .setStyle(ButtonStyle.Danger),

        new ButtonBuilder()
        .setCustomId("claim")
        .setLabel("Claim Ticket")
        .setEmoji("📨")
        .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
        .setCustomId("transcript")
        .setLabel("Transcript Ticket")
        .setEmoji("📄")
        .setStyle(ButtonStyle.Success),


      )

    canal.send({ content: `👉 <@&1113657914775830568> ` })
    canal.send({ embeds: [embed], components: [button] });
  }
}