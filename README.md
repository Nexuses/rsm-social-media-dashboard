# RSM Social Media Dashboard

A dynamic social media dashboard with real-time data updates and interactive charts.

## Features

- **Dynamic Charts**: Charts automatically update when data changes
- **Real-time Updates**: Data refreshes every 30 seconds automatically
- **Admin Panel**: Add, edit, and delete data through admin interface
- **Responsive Design**: Works on all devices

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

## How Dynamic Charts Work

1. **Data Hook**: The `useSocialMediaData` hook fetches data from the API
2. **Real-time Updates**: Data automatically refreshes every 30 seconds
3. **Automatic Chart Updates**: Charts re-render when new data arrives
4. **Fallback Data**: If no database data exists, charts show static fallback data
5. **Admin Controls**: Admins can add/update data through the interface

## API Endpoints

- `GET /api/social-media-data` - Fetch data with filters
- `POST /api/social-media-data` - Add new data
- `PUT /api/social-media-data` - Update existing data
- `DELETE /api/social-media-data` - Delete data

## Data Structure

Each data point includes:
- Platform (LinkedIn, Facebook, Instagram, Twitter, Overall)
- Period (month, week, year)
- Followers count
- Growth metrics
- Engagement, posts, reach, impressions

## Admin Access

Default admin credentials:
- Username: `RSM-Admin`
- Password: `RSMkuwaitNex`

## Technologies Used

- Next.js 15
- React 19
- Recharts for data visualization
- Tailwind CSS for styling
- Shadcn/ui components

