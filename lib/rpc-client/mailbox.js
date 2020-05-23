/**
 * Default mailbox factory
 */
const MqttMailbox = require('./mailboxes/mqtt-mailbox');
const Ws2Mailbox = require('./mailboxes/ws2-mailbox');
const WsMailbox = require('./mailboxes/ws-mailbox');

/**
 * default mailbox factory
 *
 * @param {Object} serverInfo single server instance info, {id, host, port, ...}
 * @param {Object} opts construct parameters
 * @return {Object} mailbox instancef
 */
module.exports.create = function(serverInfo, opts) {
	var mailbox = opts.mailbox || 'mqtt';
	var Mailbox = null;
	if (mailbox === 'ws') {
		Mailbox = WsMailbox;
	} else if (mailbox === 'ws2') {
		Mailbox = Ws2Mailbox;
	} else if (mailbox === 'mqtt') {
		Mailbox = MqttMailbox;
	}
	return Mailbox.create(serverInfo, opts);
};