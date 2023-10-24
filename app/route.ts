import Worker from 'web-worker';

export async function GET(request: Request) {
  const worker = new Worker(`data:application/javascript,postMessage(42)`, {type:'module'});
  worker.addEventListener('message', e => {
      console.log("HAAAAAALLLLLOOOOOO! " + e.data)  // "200 OK"
  });
  worker.postMessage('hello');    

  return new Response('yada');
}
