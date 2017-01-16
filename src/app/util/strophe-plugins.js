/* globals strophe */
import 'strophe.js/src/bosh';
import 'strophe.js/src/websocket';
import 'strophejs-plugins/roster/strophe.roster';
import 'strophejs-plugins/disco/strophe.disco';
import 'strophejs-plugins/vcard/strophe.vcard';
import 'strophejs-plugins/rsm/strophe.rsm';
import 'strophejs-plugins/pubsub/strophe.pubsub';
import 'strophejs-plugins/caps/strophe.CAPS';
import 'strophejs-plugins/pep/strophe.pep';

const { Strophe } = strophe;

Strophe.addNamespace('CARBONS',       'urn:xmpp:carbons:2');
Strophe.addNamespace('CHATSTATES',    'http://jabber.org/protocol/chatstates');
Strophe.addNamespace('VCARD_UPDATES', 'vcard-temp:x:update');
Strophe.addNamespace('REGISTRATION',  'jabber:iq:register');
Strophe.addNamespace('LAST_ACTIVITY', 'jabber:iq:last');
Strophe.addNamespace('CHAT_MARKERS',  'urn:xmpp:chat-markers:0');
Strophe.addNamespace('RECEIPTS',      'urn:xmpp:receipts');
