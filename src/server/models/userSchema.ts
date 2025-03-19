{
  /* import { Schema } from 'mongoose';

const userSettingsSchema = new Schema({
    theme: { type: String, enum: ['light', 'dark', 'system'], default: 'system' },
    notifications: {
        email: { type: Boolean, default: true },
        push: { type: Boolean, default: true },
        sms: { type: Boolean, default: false }
    },
    alertPreferences: {
        defaultPercentages: {
            buy: { type: Number, default: 5 },
            sell: { type: Number, default: 5 }
        }
    },
    language: { type: String, enum: ['pt-BR', 'en-US'], default: 'pt-BR' }
});

const userPositionSchema = new Schema({
    symbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    averagePrice: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    type: { type: String, enum: ['real', 'simulated'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const userAlertSchema = new Schema({
    symbol: { type: String, required: true },
    targetPrice: { type: Number, required: true },
    type: { type: String, enum: ['above', 'below'], required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date }
});

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Date },
    phone: { type: String },
    cpf: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
    settings: { type: userSettingsSchema, default: () => ({}) },
    positions: [userPositionSchema],
    alerts: [userAlertSchema],
    preferences: {
        defaultDashboard: { type: String, enum: ['visao-economia', 'dashboard'], default: 'visao-economia' },
        defaultPositionType: { type: String, enum: ['real', 'simulated'], default: 'real' }
    }
});

// Indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ cpf: 1 });
userSchema.index({ 'positions.symbol': 1 });
userSchema.index({ 'alerts.symbol': 1 });

*/
}
