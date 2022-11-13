import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher=new Pusher({
    //YOUR PUSHER CONFIG
    //4 lines
  useTLS: true
})

export const clientPusher=new ClientPusher(
    'Your pusher client key', {
        cluster: 'ap2'
})
