const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, InteractionResponse } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Banearé a un usuario que elijas")
    .addUserOption((option) => option.setName(`target`).setDescription(`Usuario a banear`).setRequired(true))
    .addStringOption((option) => option.setName(`razon`).setDescription(`Razon del ban`))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(interaction, client) {
        const user = interaction.options.getUser(`target`);
        const { guild } = interaction;

        let razon = interaction.options.getString(`razon`);
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

    if (!razon) razon = "**No hay una razon.**";
    if(user.id === interaction.user.id) return interaction.reply({content: `**¡No puedes banearte a ti mismo!**`, ephemeral: true});
    if(user.id === client.user.id) return interaction.reply({content: `**¿Que haces? 🤨 | No puedes banearme a mi.**`, ephemeral: true})
    if(member.roles.highest.position >= interaction.member.roles.highest.position) return interaction.reply({content: `**¡NO puedes banear a alguien con un rol igual o mayor al tuyo**, ***ESTAS A UNA*** ❗`, ephemeral: true});
    if(!member.kickable) return interaction.reply({content: `**No puedo banear a alguien con un rol superior al mio 🤖**`, ephemeral: true});

    const embed = new EmbedBuilder()
    .setAuthor({ name: `${guild.name}`, iconURL: `${guild.iconURL({dynamic: true}) || "https://images-ext-2.discordapp.net/external/V8NTmExAsoeNVFlXTtsdqTUq5sWChtRYhktplhRJ_5s/https/discord.io/content/server/964282797021884456_bGGHtjgu2zTu.png"}` })
    .setTitle(`${user.tag} ha sido baneado del servidor ❗`)
    .setColor(`#940000`)
    .setTimestamp()
    .setThumbnail(`${user.displayAvatarURL({dynamic: true })}`)
    .addFields({ name: `Razon:`, value: `${razon}`})
    .setFooter({ text: 'Pascuero Bot', iconURL: 'https://images-ext-2.discordapp.net/external/V8NTmExAsoeNVFlXTtsdqTUq5sWChtRYhktplhRJ_5s/https/discord.io/content/server/964282797021884456_bGGHtjgu2zTu.png' });

    await member.ban({deleteMessageSeconds: 300, reason: razon,}).catch(console.error);

    interaction.reply({embeds: [embed]});

    },
};