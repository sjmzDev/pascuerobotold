const { Client, GatewayIntentBits, Partials, Collection, Events, AuditLogEvent, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, Guild, ActivityType, messageLink} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
    intents: 3276799,
    partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadButtons } = require("./Handlers/buttonHandler");

client.config = require("./config.json");
client.events = new Collection;
client.commands = new Collection();
client.buttons = new Collection;
client.ticketMembers = new Collection();

loadEvents(client);
loadButtons(client);

require (`./Handlers/anti-crash`)(client)

client.login(client.config.token).then(() => {

    const time = (250*5);

    let status = [
        [{
            name: "La Orden Del Viejo Pascuero" ,
            type: ActivityType.Playing

    }],
    [{
            name: "discord.io/LaOrdenDelViejoPascuero" ,
            type: ActivityType.Watching
    }],
        [{
            name: "la chamba" ,
            type: ActivityType.Competing
    }],
    ];
    setInterval(() => {
        function randomStatus() {
            let astatus = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ activities: astatus, status: "idle"});
        }
        randomStatus();
    }, time)
    
})

const prefix = `p!`;

client.on('messageCreate', message => {
    // Evitar que el bot responda a sus propios mensajes
    if (message.author.bot) return;

    // Verifica si el mensaje menciona al bot
    if (message.mentions.has(client.user)) {
        message.channel.send('que quieres mongol');
    }
});

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    if(command === `hola`) { 
        message.channel.send("habla p causa")
    }

    if(command === `help`) { 
        message.channel.send({content: `**Hola!** si necesitas ayuda, puedes ir al canal de <#1114638844738945084> ` })
    }

    if(command === `chau`) { 
        message.channel.send("jatea mongol :v")
    }

    if(command === `comoestas`) { 
        message.channel.send("no sé, tu dime <@667878174478172179>")
    }

    if(command === `raid`) { 
        message.channel.send("Activando secuencia de modo raid..")
    }

    if(command === `ojo`) { 
        message.channel.send("p!ojo")
    }
});

client.on(Events.ChannelDelete, async (channel) => {
    channel.guild.fetchAuditLogs({
        type: AuditLogEvent.ChannelDelete
    })
    .then(async (audit) => {
        const { executor } = audit.entries.first();

        const name = channel.name;
        const id = channel.id;
        let type = channel.type;

        if(type == 0) type = `Texto`
        if(type == 2) type = `Voz`
        if(type == 13) type = `Stage`
        if(type == 15) type = `Foro`
        if(type == 5) type = `Anuncios`
        if(type == 4) type = `Categoría`

        const channelID = `1121968566212767854`;
        const Channel = await channel.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setTitle(`❌ | Canal Eliminado`)
        .addFields({name: `Nombre del canal`, value: `${name}`})
        .addFields({name: `Tipo de canal`, value: `${type}`})
        .addFields({name: `Id del canal`, value: `${id}`})
        .addFields({name: `Eliminado por`, value: `${executor.tag}`})
        .setTimestamp()
        .setColor(`#ff0036`)

        Channel.send({embeds: [embed]});

    });
});

client.on(Events.ChannelCreate, async (channel) => {
    channel.guild.fetchAuditLogs({
        type: AuditLogEvent.ChannelCreate
    })
    .then(async (audit) => {
        const { executor } = audit.entries.first();

        const name = channel.name;
        const id = channel.id;
        let type = channel.type;

        if(type == 0) type = `Texto`
        if(type == 2) type = `Voz`
        if(type == 13) type = `Stage`
        if(type == 15) type = `Foro`
        if(type == 5) type = `Anuncios`
        if(type == 4) type = `Categoría`

        const channelID = `1121968566212767854`;
        const Channel = await channel.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setTitle(`✅ | Canal creado`)
        .addFields({name: `Nombre del canal`, value: `${name} (<#${id}>)` })
        .addFields({name: `Tipo de canal`, value: `${type}`})
        .addFields({name: `Id del canal`, value: `${id}`})
        .addFields({name: `Creado por`, value: `${executor.tag}`})
        .setColor(`#4be726`)
        .setTimestamp()

        Channel.send({embeds: [embed]});
        
    });
});

client.on(Events.GuildBanAdd, async (member) => {
    member.guild.fetchAuditLogs({
        type: AuditLogEvent.GuildBanAdd
    })
    .then(async (audit) => {
        const { executor } = audit.entries.first();

        const name = member.user.username;
        const id = member.user.id;

        const channelID = `1121968566212767854`;
        const Channel = await member.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setTitle(`🚫 | Usuario baneado`)
        .addFields({name: `Nombre del usuario`, value: `${name} (<#${name}>)` })
        .addFields({name: `Id del usuario`, value: `${id}`})
        .addFields({name: `Baneado por`, value: `${executor.tag}`})
        .setColor(`#a80000`)
        .setTimestamp()

        Channel.send({embeds: [embed]});
        
    });
});

client.on(Events.GuildBanRemove, async (member) => {
    member.guild.fetchAuditLogs({
        type: AuditLogEvent.GuildBanRemove
    })
    .then(async (audit) => {
        const { executor } = audit.entries.first();

        const name = member.user.username;
        const id = member.user.id;

        const channelID = `1121968566212767854`;
        const Channel = await member.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setTitle(`👮‍♂️ | Usuario desbaneado`)
        .addFields({name: `Nombre del usuario`, value: `${name} (<#${name}>)` })
        .addFields({name: `Id del usuario`, value: `${id}`})
        .addFields({name: `Desbaneado por`, value: `${executor.tag}`})
        .setColor(`#fa4348`)
        .setTimestamp();

        Channel.send({embeds: [embed]});
        
    });
});

client.on(Events.MessageUpdate, async (message, newMessage) => {
    message.guild
    .fetchAuditLogs({
        type: AuditLogEvent.MessageUpdate,
    })
    .then(async (audit) => {
        const autor = message.author;

        const msg = message.content;

        if(!msg) return;

        const channelID = `1121968566212767854`;
        const Channel = await message.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setTitle(`💬 | Mensaje editado`)
        .addFields({name: `**Mensaje original**`, value: `${msg}`  })
        .addFields({name: `**Mensaje editado**`, value: `${newMessage}`})
        .addFields({name: `**Autor del mensaje**`, value: `${autor}`})
        .setTimestamp()
        .setColor(`#bb70ff`);

        Channel.send({embeds: [embed]});
        
    });
});

client.on(Events.MessageDelete, async (message) => {
    message.guild
      .fetchAuditLogs({
        type: AuditLogEvent.MessageDelete,
      })
      .then(async (audit) => {
        const autor = message.author;
  
        const msg = message.content;
  
        if (!msg) return;
  
        const channelID = `1121968566212767854`; 
        const Channel = await message.guild.channels.cache.get(channelID);
  
        const embed = new EmbedBuilder()
          .setTitle(`⛔ | Mensaje eliminado`)
          .addFields({ name: `Contenido del mensaje`, value: `${msg}` })
          .addFields({ name: `Canal del mensaje`, value: `${message.channel}` })
          .addFields({ name: `Autor del mensaje`, value: `${autor}` })
          .setTimestamp()
          .setColor(`#c90000`);
  
        Channel.send({ embeds: [embed] });
      });
});