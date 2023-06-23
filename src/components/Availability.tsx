import React, { useState, useEffect } from 'react';
import YesNoRadio from '../components/YesNoRadio';

type Props = {
  setModuleString: React.Dispatch<React.SetStateAction<string>>;
};

const Availability = (props: Props) => {
  const { setModuleString } = props;
  const [ap, setAp] = useState(true);
  const [au, setAu] = useState(true);
  const [pulse, setPulse] = useState(false);
  const [auditTypes, setAuditTypes] = useState(true);

  const moduleString = [`${ap ? 'ap' : ''}`, `${au ? 'au' : ''}`, `${pulse ? 'pulse' : ''}`]
    .filter(Boolean)
    .join(',');

  useEffect(() => {
    setModuleString(moduleString);
  }, [ap, au, pulse]);

  return (
    <div className='flex flex-col items-center space-y-3 text-xl tracking-wider font-normal w-full px-4 text-center md:text-left'>
      <label htmlFor='availability'>Dostępność</label>
      <div className='text-base space-y-2 md:space-y-0'>
        <button
          name='availability'
          onClick={() => {
            setAuditTypes(true);
            setPulse(false);
          }}
          className={`px-4 py-2 hover:bg-gray-200 rounded-xl md:rounded-b-none md:w-[240px] ${
            auditTypes && 'bg-gray-200'
          }`}
        >
          Audyty tylko przez WWW
        </button>
        <button
          name='availability'
          onClick={() => {
            setAuditTypes(false);
            setPulse(true);
          }}
          className={`px-4 py-2 hover:bg-gray-200 rounded-xl md:rounded-b-none md:w-[300px] ${
            !auditTypes && 'bg-gray-200'
          }`}
        >
          Audyty przez WWW i w telefonie
        </button>
        <div className='bg-gray-200 p-5 flex flex-col rounded-xl md:rounded-t-none'>
          {auditTypes ? (
            <div className='bg-gray-100 p-5 flex flex-col rounded-xl space-y-2 md:w-[500px]'>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł główny Action Plan</label>
                <YesNoRadio value={ap} setValue={setAp} disabled={true} htmlFor='ap' />
              </div>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł audytów</label>
                <YesNoRadio value={au} setValue={setAu} disabled={true} htmlFor='au' />
              </div>
            </div>
          ) : (
            <div className='bg-gray-100 p-5 flex flex-col rounded-xl space-y-2 md:w-[500px]'>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł główny Action Plan</label>
                <YesNoRadio value={ap} setValue={setAp} disabled={true} htmlFor='ap' />
              </div>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł audytów</label>
                <YesNoRadio value={au} setValue={setAu} disabled={true} htmlFor='au' />
              </div>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Aplikacja mobilna Action Plan Pulse</label>
                <YesNoRadio value={pulse} setValue={setPulse} disabled={true} htmlFor='pulse' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
