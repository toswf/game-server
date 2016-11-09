var pomelo = require('pomelo');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'pomelo');

//连接配置；
app.set('connectorConfig', {
  connector : pomelo.connectors.hybridconnector,
  useProtobuf:true, //
  useDict:true,
  //useCrypto:true, // 实用数字签名
  //encode / decode:
  //transport:
});

//用户的单Session绑定。
app.set('sessionConfig', {singleSession:true});
//消息缓冲的配置。
app.set('pushSchedulerConfig', {scheduler: pomelo.pushSchedulers.buffer, flushInterval: 20});

// 开启rpc调用的日志；
app.enable('rpcDebugLog');
//设置rpc的调用是否缓冲；
app.set("proxyConfig", {cacheMsg:true, interval:10});
//设置remote是否缓存;
app.set("remoteConfig", {cacheMsg:true, interval:10});
//设置route压缩的配置文件的位置。
//配置文件中写入客户端的路由字符串数组。
app.set("dictionaryConfig", {dict:"config/dictionary.json"});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
