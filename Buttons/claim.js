const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ButtonInteraction, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: {
        name: `claim`,
    },
    async execute(interaction, client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.DeafenMembers)) {
            const embed = new EmbedBuilder()
            .setColor("#970003")
            .setTitle("Error")
            .setDescription("🚫 | **No tienes permitido usar este botón**")
            return await interaction.reply({ embeds: [embed], ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setTitle(" `📩` **Pascuero Bot | Ticket System**")
            .setDescription(`**El ticket le pertenece a: <@${interaction.user.id}>**`)
            .setColor("#00c0ff")

    

        interaction.reply({ embeds: [embed] })

    },
};