import { ApiPromise, WsProvider } from '@polkadot/api';
import { useEffect, useRef, useState } from 'react';
import schema from './schema';

function App() {
  const [connectionStatus, setConnectionStatus] = useState('');
  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textInput.current) textInput.current.focus();

    const { types, rpc } = schema;

    setConnectionStatus('ApiPromise is connecting...');

    ApiPromise.create({
      provider: new WsProvider('wss://pme.polymath.network'),
      types,
      rpc,
    }).then(() => {
      setConnectionStatus('ApiPromise is connected.');
    });
  }, []);

  return (
    <div className="App">
      <input type="text" autoFocus ref={textInput} />
      <button>test</button>
      <div>{connectionStatus}</div>
      <p style={{ width: '720px' }}>
        Notice the focused text-input; the blinking cursor become frozen while
        the ApiProimse is connecting. During this time buttons are not clickable
        either.
      </p>
      <p>Refresh this page if necessary.</p>
    </div>
  );
}

export default App;
