const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Collection, EmbedBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("informacion")
    .setDescription("Es la información con respecto al servidor"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

   async  execute(interaction) {

const button = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId(`test`)
    .setLabel(`Información del servidor | 📔`)
    .setStyle(ButtonStyle.Success),

    new ButtonBuilder()
    .setCustomId(`test2`)
    .setLabel(`Comandos 📖`)
    .setStyle(ButtonStyle.Primary),
    
    new ButtonBuilder()
    .setCustomId(`test3`)
    .setLabel(`Moderación 👮‍♂️`)
    .setStyle(ButtonStyle.Danger),

    new ButtonBuilder()
    .setCustomId(`test4`)
    .setLabel(`Reglas 📝`)
    .setStyle(ButtonStyle.Primary),
);

    const embed =new EmbedBuilder()
    .setTitle(`Información del servidor | 📔`)
    .addFields({
        name: `📖 | **Comandos del servidor**`,
        value: `En **"Comandos"** podrás ver los comandos del servidor`
    })
    .addFields({
        name: `👮‍♂️ | **Comandos de Moderación**`,
        value: `En **"Moderación"** podrás ver los comandos que usa el staff para sancionar`
    })
    .addFields({
        name: `📝 | **REGLAS del server**`,
        value: `En **"Reglas"** podrás ver el link de invitación para el servidor`
    })
    

    const embed2 =new EmbedBuilder()
    .setTitle(`Comandos de utilidad`)
    .addFields({
        name: `**/invitacion**`,
        value: `Podrás tener el link de invitación al server`
    })
    .addFields({
        name: `**/economia**`,
        value: `Podrás ver como se administra la economia del server.`
    })
    .addFields({
        name: `**/reglas**`,
        value: `Podrás ver las reglas del servidor`
    })
    .addFields({
        name: `**/juegoseventos**`,
        value: `Podrás ver que juegos jugamos en los eventos!`
    })
    .addFields({
        name: `**/staffayuda**`,
        value: `Te dirá que hacer si tienes algun reporte de alguna persona`
    })

    const embed3 =new EmbedBuilder()
    .setTitle(`Comandos de Moderación`)
    .addFields({
        name: `/ban`,
        value: `Es el comando con el cual puedes banear a las personas **PERMANENTEMENTE**`
    })
    .addFields({
        name: `/kick`,
        value: `Es el comando con el cual puedes expulsar a las personas del servidor`
    })
    .addFields({
        name: `/timeout`,
        value: `Es el comando con el cual puedes asilar a la persona temporalmente, el tiempo de las sanciones son por minutos`
    })

    const embed4 =new EmbedBuilder()
    .setTitle(`📝 | **REGLAS del server**`)
    .addFields({
        name: `**¡LAS REGLAS DEL SERVIDOR!**`,
        value: `
        -No aprovecharse de los roles asignados, en consecuencia se le retirará el rol para siempre.
        -Tener un respeto mutuo entre usuarios
        -No se permite cualquier actitud toxica o xenofobia.
        -En caso de hacer bromas, hazla con el debido respeto.
        -No spam y flood
        -PROHIBIDO abusar de los BOTS
        ` 
    })


await interaction.reply({embeds: [embed], components: [button]});

const collector = interaction.channel.createMessageComponentCollector();

collector.on(`collect`, async (i) => {

    if(i.customId === `test`) {
        if(i.user.id !== interaction.user.id) {
            return await i.reply({ content: `**¡Solo las persona que ejecuto el comando puede utilizar los botones!**`, ephemeral: true})
        }
        await i.update({embeds: [embed], components: [button]})
    }

    if(i.customId === `test2`) {
        if(i.user.id !== interaction.user.id) {
            return await i.reply({ content: `**¡Solo las persona que ejecuto el comando puede utilizar los botones!**`, ephemeral: true})
        }
        await i.update({embeds: [embed2], components: [button]})
    }

    if(i.customId === `test3`) {
        if(i.user.id !== interaction.user.id) {
            return await i.reply({ content: `**¡Solo las persona que ejecuto el comando puede utilizar los botones!**`, ephemeral: true})
        }
        await i.update({embeds: [embed3], components: [button]})
    }

    if(i.customId === `test4`) {
        if(i.user.id !== interaction.user.id) {
            return await i.reply({ content: `**¡Solo las persona que ejecuto el comando puede utilizar los botones!**`, ephemeral: true})
        }
        await i.update({embeds: [embed4], components: [button]})
    }
});

    },
};