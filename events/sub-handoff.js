// When users have either subscriber role, update and hand them the real role.
module.exports = {
	name: 'ready',
	execute(client) {
		client.on("guildMemberUpdate", function(oldMember, newMember){
		    console.error(`a guild member changes - i.e. new role, removed role, nickname.`);
		});
	},
};


/* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the update
newMember    GuildMember        The member after the update    */
