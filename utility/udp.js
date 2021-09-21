import dgram from "react-native-udp";

function toByteArray(obj) {
  obj = obj.toString();
  var uint = new Uint8Array(obj.length);
  for (var i = 0, l = obj.length; i < l; i++) {
    uint[i] = obj.charCodeAt(i);
  }

  return new Uint8Array(uint);
}

function sendUDP({ data, address, port }) {
  let client = dgram.createSocket({
    type: "udp4",
  });

  client.bind(4000, (err) => {
    if (err) throw err;
    let msg = toByteArray(data);
    client.send(msg, 0, msg.length, port, address, (err) => {
      if (err) throw err;
      console.log("msg sent!");
      client.close();
    });
  });
}

export { sendUDP };
