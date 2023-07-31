
import { createContext, useState, useMemo, useContext } from 'react';

const CustomerReviewsContext = createContext();

export const useCustomerReviewsContext = () => {
  const context = useContext(CustomerReviewsContext);

  if (!context) {
    throw new Error(
      'useCustomerReviewsContext must be used within a CustomerReviewsContextProvider'
    );
  }
  return context;
};

const CustomerReviewsContextProvider = (props) => {
  const [selectedCustomerReview, setSelectedCustomerReview] = useState();

  const values = useMemo(() => {
    return { selectedCustomerReview, setSelectedCustomerReview };
  }, [selectedCustomerReview]);

  return (
    // eslint-disable-next-line react/prop-types
    <CustomerReviewsContext.Provider value={values}>
      {props.children}
    </CustomerReviewsContext.Provider>
  );
};

export default CustomerReviewsContextProvider;
