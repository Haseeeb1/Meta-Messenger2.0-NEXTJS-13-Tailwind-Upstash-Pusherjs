import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher=new Pusher({
    appId: "1505511",
  key: "7856d6be78eb5d4c8086",
  secret: "96a41146d32d18ead30a",
  cluster: "ap2",
  useTLS: true
})

export const clientPusher=new ClientPusher(
    '7856d6be78eb5d4c8086', {
        cluster: 'ap2'
})