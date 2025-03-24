export const TASK_NAMES = [
  "Deep Clean Trash Cans",
  "Deck Brush Dumpster Area",
  "Deck Brush (FOH)",
  "Deck Brush (BOH)",
  "Deck Brush (Restrooms)",
  "Clean Walls & Baseboards (BOH)",
  "Clean Walls & Baseboards (Kitchen)",
  "Clean Walls & Baseboards (Dining Room)",
  "Clean Shelving (Dry Storage)",
  "Clean Shelving (Walk-in)",
  "Clean Shelving (Front Line)",
  "Clean Shelving (Grill Area)",
  "Clean Shelving (Chemical Storage)",
  "Clean Shelving (Pan Storage)",
  "Clean Soda Fountain",
  "Drain, Disassemble & Clean Tractor Beverage",
  "Clean Office",
  "Clean Ice Maker",
  "Clean Ice Bin",
  "Clean Wheels & Casters",
  "Clean Water Heater & CO2 Tank",
  "Clean Refrigerator Coils",
  "Clean Bag-in-Box Rack",
  "Empty & Clean Rice Containers",
  "Remove & Clean TurboChef Air Filter",
  "Filter & Clean Fryer Oil",
  "Change Fryer Oil (Bi-Monthly)",
  "Wipe Down Menu Panels",
  "Clean Dining Room Chairs & Tables",
  "Clean Reachable Overhead Pipes, Wood, Vents & Ceilings",
  "Clean Walls (Walk-in)"
] as const;


export const AREAS = [
  "FOH", "BOH", "Kitchen", "Restroom", "Dining Room", "Walk-in", "Storage", "Dumpster", "Office"
] as const;

export const FREQUENCIES = [
  "Daily", "Weekly", "Monthly", "Bi-Monthly"
] as const;

export const ASSIGNED_ROLES = [
  "Common Knowledge", "Cash", "Line", "Grill", "Porter", "Leader"
] as const;

// Types
export type TaskName = typeof TASK_NAMES[number];
export type Area = typeof AREAS[number];
export type Frequency = typeof FREQUENCIES[number];
export type AssignedRole = typeof ASSIGNED_ROLES[number];
