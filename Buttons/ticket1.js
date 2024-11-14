const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ChannelType, PermissionsBitField } = require('discord.js');

module.exports = {
    data: {
        name: `ticket1`,
    },
    async execute(interaction, client) {


      const canal = await interaction.guild.channels.create({
        name: `ticket- ${interaction.user.tag}`,
        type: ChannelType.GuildText,
        parent: `1120020212528447488`
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
        .setDescription(`Este es tu ticket en el cual podrás decir cualquier duda o pregunta con respecto al servidor. Tambien puedes hacer reportes a diferentes usuarios o STAFF's que abusan de su rol. 
        Aparte de las sugerencias por privado.

        - **Debes ser respetuoso con la persona que estes hablando.**\n- **No puedes preguntar cosas externas al servidor.**\n- **Si haces algo inapropiado se le borrará el ticket.**

        Te responderán los roles <@&1113657612039364618> y <@&1113657748740124723>
        `)
        .setColor(`#00ff0e`)
        .setImage(`https://staffchile.cl/wp-content/uploads/2022/08/cropped-logo_staff_favicon.png`)

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

    await canal.send({ content: `👉 **NO PINGEAR A LOS STAFF** | <@&1113657612039364618> y <@&1113657748740124723> ` })
    const mensaje = await canal.send({ embeds: [embed], components: [button] });

          
  }
}