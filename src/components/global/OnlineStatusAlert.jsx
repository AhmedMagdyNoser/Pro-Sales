import { useEffect, useState } from 'react';
import useOnlineStatus from '../../hooks/useOnlineStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

function OnlineStatueAlert() {
  const online = useOnlineStatus();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!online) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 2500); // Online status alert duration
    }
  }, [online]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 z-40 w-full animate-fade-in-fast p-5 sm:w-[450px]">
      <div
        className="flex flex-wrap items-center justify-between gap-3 bg-white p-5"
        style={{ boxShadow: '0px 0px 5px 0px #0001, 0 1px 3px 0 #0002, 0 1px 2px -1px #0002' }}
      >
        <div className="flex-center flex-wrap gap-3">
          <FontAwesomeIcon icon={faWifi} className={'sm:text-xl ' + (online ? 'text-green-600' : 'text-progray-200')} />
          <p className="text-center">{online ? 'Internet connection restored' : 'Oops! It seems you are offline'}</p>
        </div>
        <button onClick={() => setShow(false)} className="text-sm">
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default OnlineStatueAlert;
