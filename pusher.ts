import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher=new Pusher({
    //YOUR PUSHER CONFIG
  useTLS: true
})

export const clientPusher=new ClientPusher(
    'Your pusher client key', {
        cluster: 'ap2'
})
