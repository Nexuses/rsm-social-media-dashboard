# Quick Setup for Dynamic Charts

## 1. Create Environment File

Create `.env.local` in the root directory:

```bash
MONGODB_URI=mongodb://localhost:27017/rsm-social-dashboard
```

## 2. Install Dependencies

```bash
pnpm install
```

## 3. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

## 4. Seed Database

```bash
pnpm seed
```

## 5. Start Development Server

```bash
pnpm dev
```

## What This Gives You

✅ **Automatic Chart Updates**: Charts refresh every 30 seconds  
✅ **Real-time Data**: Changes in database immediately reflect in charts  
✅ **Admin Controls**: Add/edit data through the interface  
✅ **Fallback Data**: Charts work even without database connection  
✅ **Persistent Storage**: All data is saved to MongoDB  

## How It Works

1. **Data Hook** fetches data from API every 30 seconds
2. **Charts automatically re-render** when new data arrives
3. **Admin can add/update data** through the interface
4. **Charts show real-time updates** without page refresh

The charts will now automatically update whenever your data changes!

