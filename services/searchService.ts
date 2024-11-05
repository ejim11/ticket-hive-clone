import { events } from "@/axios.config";

export const searchForEvent = async (
  eventName?: string,
  category?: string,
  date?: string,
  price?: string,
  attendance?: string
) => {
  console.log(category);
  return await events.get(
    `?name=${eventName?.toLowerCase()}&category=${category}&date=${date}&price=${price}&attendance=${attendance}`
  );
};
