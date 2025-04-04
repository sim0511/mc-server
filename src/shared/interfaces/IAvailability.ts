// import { IDayAvailability } from './IDayAvailability.js';

// export interface IWAvailability {
//   weekStartDate: Date;
//   days: {
//     monday: IDayAvailability;
//     tuesday: IDayAvailability;
//     wednesday: IDayAvailability;
//     thursday: IDayAvailability;
//     friday: IDayAvailability;
//     saturday: IDayAvailability;
//     sunday: IDayAvailability;
//   };
//   submittedAt: Date;
// }

export interface IAvailability {
  day: string; // e.g., "Monday"
  availableFrom: string; // e.g., "09:00"
  availableTo: string; // e.g., "17:00"
}
