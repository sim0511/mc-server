// scripts/seedUsers.ts

import UserModel from '../models/User.model.js';
import connectToMongoDB from '../utils/connectDB.js';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

const roles = ['employee', 'manager', 'admin'] as const;

const availability = [
  { day: 'Monday', availableFrom: '09:00', availableTo: '17:00' },
  { day: 'Wednesday', availableFrom: '09:00', availableTo: '17:00' },
  { day: 'Friday', availableFrom: '09:00', availableTo: '17:00' }
];

const generateUsers = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    const role = i < 14 ? 'employee' : i < 18 ? 'manager' : 'admin';
    return {
      username: faker.person.firstName(),
      email: faker.internet.email(),
      passwordHash: faker.string.alphanumeric(32),
      role,
      weeklyAvailability: role === 'employee' ? availability : undefined
    };
  });
};

const seed = async () => {
  try {
    await connectToMongoDB();
    await UserModel.deleteMany(); // optional: clean up existing users
    await UserModel.insertMany(generateUsers());
    console.log('✅ 20 users inserted.');
  } catch (err) {
    console.error('❌ Failed to seed users:', err);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
