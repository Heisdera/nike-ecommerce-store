import _ from "lodash";

export function handleTruncateProductName(productName: string, length: number) {
  return _.truncate(productName, { length: length });
}

export function currentYear(): number {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

export function pathVariant(customDelay: number) {
  return {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: customDelay,
      },
    },
  };
}

export function convertPrice(
  price: number,
  // rates: {
  //   conversion_rates: {
  //     [key: string]: number;
  //   };
  // },
  rates: {
    rates: {
      [key: string]: number;
    };
  },
  selectedCurrency: string,
) {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: selectedCurrency,
    maximumFractionDigits: 0,
  });

  const conversionRate = rates.rates[selectedCurrency];

  if (rates && conversionRate) {
    return currency.format(price * conversionRate);
  }

  return currency.format(price);
}
