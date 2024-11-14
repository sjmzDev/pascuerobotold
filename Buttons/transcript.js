const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const Transcript = require('discord-html-transcripts');

module.exports = {
    data: {
        name: `transcript`,
    },
    async execute(interaction, client) {
      
        const rol_staff = interaction.member.roles.cache.get("1113657748740124723"); // <<<<<<<<<< ROL[ID] DE STAFF

        if (!rol_staff) return interaction.reply({ content: `🚫 | **No tienes permitido usar este botón**`, ephemeral: true });

        if (rol_staff) {

            await interaction.channel.edit({
                name: `ticket-transcribido-por-${interaction.user.tag}`,
            });

            const transcriptFile = await Transcript.createTranscript(interaction.channel);
            const channelID = '1123401724414140537'; // ID del canal al que quieres enviar el transcript

            const transcriptChannel = client.channels.cache.get(channelID);
            if (!transcriptChannel) return interaction.reply({ content: 'No se pudo encontrar el canal de destino.', ephemeral: true });

            const messages = await interaction.channel.messages.fetch({ limit: 100 }); // Obtener los últimos 100 mensajes del canal
            const usersPresent = Array.from(new Set(messages.map(message => `<@${message.author.id}>`)));

            const embed = new EmbedBuilder()
                .setTitle(' `📩` **Pascuero Bot | Ticket System**')
                .setDescription(`Usuarios en el transcript:\n${usersPresent.join('\n ')}`)
                .setColor(`#8600ff`)
                

            transcriptChannel.send({ embeds: [embed], files: [transcriptFile] });
            return interaction.reply({ content: ' ` | ✅ | El transcript ha sido enviado al canal de destino.`', ephemeral: true });
        }
    },
};