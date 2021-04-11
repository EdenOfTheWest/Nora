// debug
/* Emitted for general debugging information.
PARAMETER    TYPE         DESCRIPTION
info         string       The debug information    */
module.exports = {
	name: 'ready',
	execute(client) {
		client.on("debug", function(info){
		    console.log(`debug -> ${info}`);
		});
	},
};
