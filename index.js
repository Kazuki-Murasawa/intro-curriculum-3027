'use strict';
const http = require('http');
//const cp = require('child_process');
const server = http.createServer((req, res) => {
  const path = req.url;
  //res.end(cp.execSync('echo ' + path));
  res.end(path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
//execSync のような OS コマンドを実行する関数はなるべく使わないことが望ましいです。
//どうしても必要で使用する場合には、細心の注意が必要です。