const { PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'close',
    },
    async execute(interaction) {
        // Verificar permisos del usuario
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.DeafenMembers)) {
            const embed = new EmbedBuilder()
                .setColor("#970003")
                .setTitle("Error")
                .setDescription("🚫 | **No tienes permitido usar este botón**");
            return await interaction.reply({ embeds: [embed], ephemeral: true });
        }

        // Enviar mensaje al canal
        const embed = new EmbedBuilder()
            .setTitle("**Pascuero Bot Official | System Tickets**")
            .setDescription(`***El ticket se cerrará en 5 segundos | Realizado por <@${interaction.user.id}>***`)
            .setColor("#db0000");

        await interaction.reply({ embeds: [embed] });

        // Esperar 5 segundos y luego proceder
        setTimeout(async () => {
            try {
                // Enviar mensaje al usuario que ejecutó el comando
                const userEmbed = new EmbedBuilder()
                    .setTitle(`Su ticket ha sido cerrado ${interaction.user.tag}`)
                    .setDescription("Gracias por usar el sistema de tickets de pascuero bot")
                    .setColor("#10ff00");

                await interaction.user.send({ embeds: [userEmbed] });

                // Eliminar el canal
                await interaction.channel.delete();
            } catch (error) {
                console.error("Hubo un error al enviar el mensaje o eliminar el canal:", error);
            }
        }, 5000);
    },
};