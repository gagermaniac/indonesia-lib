import dayjs from "dayjs";

export const convertToRupiah = (amount: number): string => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return formatter.format(amount);
};

export const convertToBilangan = (value: number): string => {
  if (value < 1_000) {
    return `${value}`;
  } else if (value >= 1_000 && value < 1_000_000) {
    return `${value / 1000} Ribu`;
  } else if (value >= 1_000_000 && value < 1_000_000_000) {
    return `${value / 1_000_000} Juta`;
  } else {
    return `${value / 1_000_000} Miliar`;
  }
};

export const convertToIndonesianDate = (date: string | number): string => {
  return dayjs(date).locale("id-ID").format("DD MMMM YYYY HH:mm:ss");
};
