import UserModel from '../models/User.model.js';
import bcrypt from 'bcrypt';
import { config } from '../config/config.js';
import connectToMongoDB from '../utils/connectDB.js';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

const roles = ['employee', 'manager', 'admin'] as const;

const availability = [
  { day: 'Monday', availableFrom: '09:00', availableTo: '17:00' },
  { day: 'Wednesday', availableFrom: '09:00', availableTo: '17:00' },
  { day: 'Friday', availableFrom: '09:00', availableTo: '17:00' }
];

// 🔐 Fixed password for all users
const DEFAULT_PASSWORD = 'pass123';

const generateUsers = async () => {
  const passwordHash = await bcrypt.hash(DEFAULT_PASSWORD, config.saltRounds);

  return Array.from({ length: 20 }).map((_, i) => {
    const role = i < 14 ? 'employee' : i < 18 ? 'manager' : 'admin';
    return {
      username: faker.person.firstName(),
      email: faker.internet.email(),
      passwordHash,
      role,
      weeklyAvailability: role === 'employee' ? availability : undefined
    };
  });
};

const seed = async () => {
  try {
    await connectToMongoDB();
    await UserModel.deleteMany(); // clean slate
    const users = await generateUsers();
    await UserModel.insertMany(users);
    console.log(`✅ Inserted ${users.length} users with password: ${DEFAULT_PASSWORD}`);
  } catch (err) {
    console.error('❌ Failed to seed users:', err);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
