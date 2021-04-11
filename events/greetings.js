// Greet any new user
module.exports = {
	name: 'ready',
	execute(client) {
		client.on('guildMemberAdd', member => { // Listens in event of new users
		    const channel = member.guild.channels.cache.find(ch => ch.id === '474179902346625024');
				if (!channel) return;
				channel.send('Welcome to the server, ${member}')
		});
	},
};


/* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the update
newMember    GuildMember        The member after the update    */
