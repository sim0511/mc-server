import CleaningTaskModel from "../models/CleaningTask.model.js";
import connectToMongoDB from "../utils/connectDB.js";

const cleaningTasks = [
  { taskName: "Deep Clean Trash Cans", area: "Dumpster", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Deck Brush Dumpster Area", area: "Dumpster", frequency: "Weekly", assignedTo: "Porter" },
  { taskName: "Deck Brush (FOH)", area: "FOH", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Deck Brush (BOH)", area: "BOH", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Deck Brush (Restrooms)", area: "Restroom", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Walls & Baseboards (BOH)", area: "BOH", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Walls & Baseboards (Kitchen)", area: "Kitchen", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Walls & Baseboards (Dining Room)", area: "Dining Room", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Shelving (Dry Storage)", area: "Storage", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Shelving (Walk-in)", area: "Walk-in", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Shelving (Front Line)", area: "FOH", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Shelving (Grill Area)", area: "Kitchen", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Shelving (Pan Storage)", area: "Storage", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Shelving (Chemical Storage)", area: "Storage", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Soda Fountain", area: "FOH", frequency: "Weekly", assignedTo: "Cash" },
  { taskName: "Drain, Disassemble & Clean Tractor Beverage", area: "FOH", frequency: "Weekly", assignedTo: "Porter" },
  { taskName: "Clean Office", area: "Office", frequency: "Weekly", assignedTo: "Leader" },
  { taskName: "Clean Ice Maker", area: "BOH", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Ice Bin", area: "BOH", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Wheels & Casters", area: "Kitchen", frequency: "Weekly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Water Heater & CO2 Tank", area: "Kitchen", frequency: "Weekly", assignedTo: "Cash" },
  { taskName: "Clean Refrigerator Coils", area: "Kitchen", frequency: "Monthly", assignedTo: "Common Knowledge" },
  { taskName: "Clean Bag-in-Box Rack", area: "FOH", frequency: "Weekly", assignedTo: "Cash" },
  { taskName: "Empty & Clean Rice Containers", area: "Kitchen", frequency: "Weekly", assignedTo: "Grill" },
  { taskName: "Remove & Clean TurboChef Air Filter", area: "Kitchen", frequency: "Weekly", assignedTo: "Line" },
  { taskName: "Filter & Clean Fryer Oil", area: "Kitchen", frequency: "Weekly", assignedTo: "Line" },
  { taskName: "Change Fryer Oil (Bi-Monthly)", area: "Kitchen", frequency: "Bi-Monthly", assignedTo: "Line" },
  { taskName: "Wipe Down Menu Panels", area: "FOH", frequency: "Weekly", assignedTo: "Line" },
  { taskName: "Clean Dining Room Chairs & Tables", area: "Dining Room", frequency: "Weekly", assignedTo: "Porter" },
  { taskName: "Clean Reachable Overhead Pipes, Wood, Vents & Ceilings", area: "Kitchen", frequency: "Monthly", assignedTo: "Porter" },
  { taskName: "Clean Walls (Walk-in)", area: "Walk-in", frequency: "Weekly", assignedTo: "Common Knowledge" }
];

const seedCleaningTasks = async () => {
  try {
    await connectToMongoDB();
    await CleaningTaskModel.deleteMany(); // optional cleanup
    const result = await CleaningTaskModel.insertMany(cleaningTasks);
    console.log(`✅ Seeded ${result.length} cleaning tasks.`);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    process.exit();
  }
};

seedCleaningTasks();
