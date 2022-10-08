import { DateTime } from "luxon";

export interface IClock {
  color: string;
  now: DateTime;
  time: string;
  date: string;
  zone: string;
}
