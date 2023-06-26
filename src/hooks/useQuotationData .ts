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

      const accounts = `quotation[accounts]=${totalAccountsCount}`;
      const modules = `quotation[modules]=${moduleString}`;
      const currency = `quotation[currency]=${currencyString}`;
      const addonLimits =
        auditAreasCount !== 0 && checklistsCount !== 0
          ? `&quotation[addon_limits][audit_areas]=${auditAreasCount}&quotation[addon_limits][checklists]=${checklistsCount}`
          : '';

      const url = `https://web.action-plan.app/api/pricing/quotation.json?${accounts}&${modules}&${currency}${addonLimits}`;

      const response = await fetch(url);

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
