import React, { useState, useEffect } from 'react';
import YesNoRadio from '../components/YesNoRadio';

type Props = {
  setModuleString: React.Dispatch<React.SetStateAction<string>>;
  setGetAudits: React.Dispatch<React.SetStateAction<boolean>>;
  setAuditAreasCount: React.Dispatch<React.SetStateAction<number>>;
  setChecklistsCount: React.Dispatch<React.SetStateAction<number>>;
};

const Availability = (props: Props) => {
  const { setModuleString, setGetAudits, setAuditAreasCount, setChecklistsCount } = props;
  const [ap, setAp] = useState(true);
  const [au, setAu] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [auditTypes, setAuditTypes] = useState(true);

  const moduleString = [`${ap ? 'ap' : ''}`, `${au ? 'au' : ''}`, `${pulse ? 'pulse' : ''}`]
    .filter(Boolean)
    .join(',');

  useEffect(() => {
    setModuleString(moduleString);
  }, [ap, au, pulse]);

  useEffect(() => {
    if (au) {
      setGetAudits(true);
      setAuditAreasCount(10);
      setChecklistsCount(1);
    } else {
      setGetAudits(false);
      setAuditAreasCount(0);
      setChecklistsCount(0);
    }
  }, [au]);

  return (
    <div className='flex flex-col items-center space-y-3 text-xl tracking-wider font-normal w-full px-4 text-center md:text-left'>
      <label htmlFor='availability'>Dostępność</label>
      <div className='text-base'>
        <div className='flex'>
          <label
            htmlFor='availability_www'
            className={`block ${
              auditTypes ? 'bg-gray-200' : 'hover:bg-gray-200'
            } px-4 py-2 rounded-t-xl md:rounded-b-none md:w-[240px] cursor-pointer`}
          >
            <input
              type='radio'
              name='availability'
              id='availability_www'
              checked={auditTypes}
              onChange={() => {
                setAuditTypes(true);
                setPulse(false);
              }}
              className='hidden'
            />
            Audyty tylko przez WWW
          </label>
          <label
            htmlFor='availability_www_phone'
            className={`block ${
              !auditTypes ? 'bg-gray-200' : 'hover:bg-gray-200'
            } px-4 py-2 rounded-t-xl md:rounded-b-none md:w-[300px] cursor-pointer`}
          >
            <input
              type='radio'
              name='availability'
              id='availability_www_phone'
              checked={!auditTypes}
              onChange={() => {
                setAuditTypes(false);
                setPulse(true);
              }}
              className='hidden'
            />
            Audyty przez WWW i w telefonie
          </label>
        </div>

        <div className='bg-gray-200 p-5 flex flex-col rounded-b-xl'>
          {auditTypes ? (
            <div className='bg-gray-100 p-5 flex flex-col rounded-xl space-y-2 md:w-[500px]'>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł główny Action Plan</label>
                <YesNoRadio value={ap} setValue={setAp} disabled={true} htmlFor='ap' />
              </div>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł audytów</label>
                <YesNoRadio value={au} setValue={setAu} htmlFor='au' />
              </div>
            </div>
          ) : (
            <div className='bg-gray-100 p-5 flex flex-col rounded-xl space-y-2 md:w-[500px]'>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł główny Action Plan</label>
                <YesNoRadio value={ap} setValue={setAp} disabled={true} htmlFor='ap' />
              </div>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Aplikacja mobilna Action Plan Pulse</label>
                <YesNoRadio value={pulse} setValue={setPulse} disabled={true} htmlFor='pulse' />
              </div>
              <div className='flex flex-col md:flex-row space-y-2 items-center justify-between'>
                <label>Moduł audytów</label>
                <YesNoRadio value={au} setValue={setAu} htmlFor='au' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
