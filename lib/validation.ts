import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(120),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().max(50).optional().or(z.literal('')).default(''),
  company: z.string().trim().max(200).optional().or(z.literal('')).default(''),
  specialty: z.string().trim().max(200).optional().or(z.literal('')).default(''),
  message: z.string().trim().min(10, 'Please include a few more details').max(2000),
});

export const assessmentSchema = z.object({
  firstName: z.string().trim().min(2, 'First name is required').max(80),
  lastName: z.string().trim().min(2, 'Last name is required').max(80),
  practiceName: z.string().trim().max(200).optional().or(z.literal('')).default(''),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().max(50).optional().or(z.literal('')).default(''),
  specialty: z.string().trim().max(200).optional().or(z.literal('')).default(''),
  providerCount: z.string().trim().max(50).optional().or(z.literal('')).default(''),
  ehr: z.string().trim().max(200).optional().or(z.literal('')).default(''),
  challenge: z.string().trim().max(500).optional().or(z.literal('')).default(''),
  message: z.string().trim().max(2000).optional().or(z.literal('')).default(''),
});
