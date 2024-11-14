const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    async execute(member, interaction, client) {
      const embed = new EmbedBuilder()
        .setTitle(`Hola, ${member.user.tag}`)
        .setDescription(`Bienvenido a **${member.guild.name}**, esperemos que disfrutes tu estadia! 🤗`)
        .setColor(0x00FF00); // un embed trucho asi para dar la bienvenida
  
      await member.send({embeds: [embed]}); // aqui mandamos el embed al usuario / tambien se puedfe utilizar ahi interaction.user(CREO)
    }
  }