const { prefix, token, guildId } = require('./config.json');
const Discord = require('discord.js-commando');
const fs = require('fs'); // filesystem used to pull folders/files.
// const { vc, member, sub1, sub2, sub, mod } = require('./roles.json');


const client = new Discord.Client({
	owner: '166292306045960192'
});




const path = require('path');

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['fun', 'Fun commands.'],
        ['oni', 'Oni or moderation commands.'],
        ['economy', 'money based commands.']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));




		const sqlite = require('sqlite');
		const sqlite3 = require('sqlite3');

		client.setProvider(
		    sqlite.open({ filename: 'database.db', driver: sqlite3.Database }).then(db => new Discord.SQLiteProvider(db))
		).catch(console.error);









// load event
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}



/* =============================================================================
// collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();


// load commands
const commandFolders = fs.readdirSync('./commands/');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

============================================================================= */

// initiation

client.once('ready', () => {

//  client.setInterval(subhandoff(), 600000) // Runs every 10 minutes
});
client.on('ready', async () => {


//  client.setInterval(subhandoff(), 600000) // Runs every 10 minutes
});










/* disable commands for rn======================================================================



// bot is online, now load commands with requirements

client.on('message', message => {


	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();


  const command = client.commands.get(commandName)
  || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;



// notify users that a command is only available for the server.
  if (command.guildOnly && message.channel.type === 'dm') {
  	return message.reply("try running this command in <#477130653138419722> :)");
  }



// need to figure out USER ID's and ROLE ID'switch

// check if user has permissions for commands
  if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('lol good 1 buddy, try again.');
		}
	}


// check arguments of commands
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;
    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name}\` \`${command.usage}\``;
    }
    return message.channel.send(reply);
  }



// command cooldown check
const { cooldowns } = client;

if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}
}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);



// state if there was an error running a command.
  try {
  	command.execute(message, args);
  }
  catch (error) {
  	console.error(error);
  	message.reply('there was an error trying to execute the command.');
  }
});


====================================================================================== */




client.login(token);
// uses token from config to boot(required) and states that bot is running in console.
