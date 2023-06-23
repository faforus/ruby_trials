import { useState } from 'react';

type QuotationData = {
  yearly: number;
  monthly: number;
};

export const useQuotationData = (
  currency: boolean,
  moduleString: string,
  totalAccountsCount: number,
  auditAreasCount: number,
  checklistsCount: number,
) => {
  const [data, setData] = useState<QuotationData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const currencyString = currency ? 'pln' : 'eur';

  const fetchData = async () => {
    setError('');
    setData(null);
    try {
      setLoading(true);

      const response = await fetch(
        `https://web.action-plan.app/api/pricing/quotation.json?quotation[accounts]=${totalAccountsCount}&quotation[modules]=${moduleString}&quotation[currency]=${currencyString}&quotation[addon_limits][audit_areas]=${auditAreasCount}&quotation[addon_limits][checklistsCount]=${checklistsCount}`,
      );
      const jsonData = await response.json();

      if (response.ok) {
        setShowPricing(true);
        setData(jsonData);
      } else {
        console.log(response.statusText);
        throw new Error('Problem z odczytem danych.');
      }
    } catch (err) {
      setError('Problem z odczytem danych');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData, showPricing };
};
