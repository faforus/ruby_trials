import React, { useState, useEffect, Fragment } from 'react';
import YesNoRadio from '../components/YesNoRadio';
import RangeSlider from '../components/RangeSlider';
import { useQuotationData } from '../hooks/useQuotationData ';
import Pricing from '../components/Pricing';
import Availability from '../components/Availability';
import TotalUsers from '../components/TotalUsers';

const Home = () => {
  const [accountsCount, setAccountCount] = useState(10);
  const [accountsCountAdmin, setAccountCountAdmin] = useState(1);
  const [accountsCountAuditors, setAccountCountAuditors] = useState(1);
  const [accountsCountCorrections, setAccountCountCorrections] = useState(1);
  const [totalAccountsCount, totalSetAccountCount] = useState(0);
  const [auditAreasCount, setAuditAreasCount] = useState(10);
  const [checklistsCount, setChecklistsCount] = useState(1);
  const [currency, setCurrency] = useState(true);
  const [currentCurrency, setCurrentCurrency] = useState(true);
  const [moduleString, setModuleString] = useState('');
  const [getAudits, setGetAudits] = useState(false);

  useEffect(() => {
    totalSetAccountCount(
      accountsCount + accountsCountAdmin + accountsCountAuditors + accountsCountCorrections,
    );
  }, [accountsCount, accountsCountAdmin, accountsCountAuditors, accountsCountCorrections]);

  const { data, fetchData, error, loading, showPricing } = useQuotationData(
    currency,
    moduleString,
    totalAccountsCount,
    auditAreasCount,
    checklistsCount,
  );

  return (
    <div className='flex flex-col items-center justify-center space-y-4 py-10'>
      <Availability
        setModuleString={setModuleString}
        setGetAudits={setGetAudits}
        setAuditAreasCount={setAuditAreasCount}
        setChecklistsCount={setChecklistsCount}
      />
      <div className='md:w-[540px] space-y-4'>
        <div className='space-y-4 bg-gray-200 rounded-xl p-5'>
          <RangeSlider
            min={2}
            max={200}
            step={1}
            label='Liczba użytkowników'
            value={accountsCount}
            func={setAccountCount}
          />
          <RangeSlider
            min={1}
            max={20}
            step={1}
            label='Administratorzy'
            value={accountsCountAdmin}
            func={setAccountCountAdmin}
            small={true}
          />
          <RangeSlider
            min={1}
            max={20}
            step={1}
            label='Audytorzy'
            value={accountsCountAuditors}
            func={setAccountCountAuditors}
            small={true}
          />
          <RangeSlider
            min={1}
            max={20}
            step={1}
            label='Osoby od działań korekcyjnych'
            value={accountsCountCorrections}
            func={setAccountCountCorrections}
            small={true}
          />
          <TotalUsers totalAccountsCount={totalAccountsCount} />
        </div>
        {getAudits && (
          <Fragment>
            {' '}
            <div className='bg-gray-200 rounded-xl p-5'>
              <RangeSlider
                min={10}
                max={250}
                step={1}
                label='Liczba stref audytowych'
                value={auditAreasCount}
                func={setAuditAreasCount}
              />
            </div>
            <div className='bg-gray-200 rounded-xl p-5'>
              <RangeSlider
                min={1}
                max={50}
                step={1}
                label='Liczba list kontrolnych'
                value={checklistsCount}
                func={setChecklistsCount}
              />
            </div>
          </Fragment>
        )}
      </div>
      <div className='flex items-center justify-end md:w-[540px] space-x-6'>
        <YesNoRadio
          yes='PLN'
          no='EUR'
          value={currency}
          setValue={setCurrency}
          noColor='text-[#FFCC00]'
          yesBackgroundColor='bg-[#DC143C]'
          noBackgroundColor='bg-[#001489]'
          htmlFor='currency'
        />
        <button
          onClick={() => {
            fetchData();
            setCurrentCurrency(currency);
          }}
          disabled={loading}
          className={`bg-gray-300 p-4 rounded-2xl shadow-md font-semibold tracking-wider hover:bg-[#002f6c] disabled:bg-yellow-200 ${
            !loading && 'hover:text-white'
          }`}
        >
          Oblicz Abonament
        </button>
      </div>
      {showPricing && !error && (
        <Pricing monthly={data?.monthly} yearly={data?.yearly} currency={currentCurrency} />
      )}
      {error && <p className='bg-red-300 md:w-[540px] p-3 rounded-xl text-center'>{error}</p>}
    </div>
  );
};

export default Home;
