import { Timestamp } from "firebase/firestore";

export const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const transformToLink = (str: string) => {
  return removeAccents(str).toLowerCase().replace(/\s/g, '_');
}

export const firebaseTimestampToDate = (timestamp: any) => {
  const date = new Date(timestamp?.seconds * 1000);

  const months = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${day}/${months}/${date.getFullYear()}`;
};

export const shotenStrings = (text: string, maxWith: number) => {
  if (!text) {
    return "";
  }
  return text.length > maxWith ? `${text.substring(0, maxWith)}...` : text;
};