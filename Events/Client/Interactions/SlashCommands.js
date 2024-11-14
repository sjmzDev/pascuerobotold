const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {

      const command = client.commands.get(interaction.commandName);
      if (!command)
        return interaction.reply({
          content: "This command is outdated.",
          epheremal: true,
        });

        if (command.developer && !interaction.member.roles.cache.has("1258236882140270613")) {
          return interaction.reply({
            content: "**¡Este comando solo lo puede utilizar los developers!**",
            ephemeral: true,
          });
        }    

      command.execute(interaction, client);
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if(!button) return new Error(`Este boton no tiene codigo`);
  
      try{
        await button.execute(interaction, client);
  
      } catch (err) {
  console.error(err);
      }
    } else {
      return;
    }




  },
};