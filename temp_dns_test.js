const dns = require('dns').promises;

dns.resolveSrv('_mongodb._tcp.lms.jlfgj66.mongodb.net')
  .then((r) => {
    console.log('SRV', r);
  })
  .catch((e) => {
    console.error('ERR', e);
    process.exit(1);
  });
