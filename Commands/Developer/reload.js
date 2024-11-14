const { ChatInputApplicationCommandMention, SlashCommandBuilder, PermissionFlagsBits, Client } = require(`discord.js`)

const { loadCommands } = require(`../../Handlers/commandHandler`)
const { loadEvents } = require(`../../Handlers/eventHandler`)
const { execute } = require("../../Events/Client/Interactions/SlashCommands")
const { loadButtons } = require("../../Handlers/buttonHandler")

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName(`reload`)
    .setDescription(`Recargar los comandos`)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) => options.setName(`events`).setDescription(`Recarga tus eventos con este comando!`))
    .addSubcommand((options) => options.setName(`commands`).setDescription(`Recarga tus comandos con este comando!`))
    .addSubcommand((options) => options.setName(`buttons`).setDescription(`Recarga tus "buttons" con este comando!`)),

    /**
     * 
     * @param {ChatInputApplicationCommandMention} interaction 
     * @param {Client} client 
     */

    execute(interaction, client) {
        const subcommand = interaction.options.getSubcommand();

        switch (subcommand) {
            case "events": {
                 for (const [key, value] of client.events)
                 client.removeListener(`${key}`,value, true);
                 loadEvents(client);
                 interaction.reply({content: `**✅ | Tus eventos han sido recargados**`, ephemeral: true})
            }
                
                break;
            case "commands": {
                loadCommands(client);
                interaction.reply({content: `**✅ | Tus comandos han sido recargados**`, ephemeral: true})

            }
                break;
            case "buttons": {
                    loadButtons(client);
                    interaction.reply({content: `**✅ | Tus "buttons" han sido recargados**`, ephemeral: true})
    
            }
                break;
        }
    }
}