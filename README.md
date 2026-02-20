# Airbnb Clone

A modern property rental platform inspired by Airbnb, built with React. Features include property listings, advanced search, detailed views, booking functionality, reviews, and host profiles.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square)

## Features

### Core Functionality
- **Property Listings** - Grid view of available properties with images and key details
- **Advanced Search** - Search by location, dates, and number of guests
- **Category Filters** - Browse by beachfront, cabins, cities, and more
- **Property Details** - Full property information with image gallery
- **Booking System** - Reserve properties with date selection and price calculation
- **Reviews** - Guest reviews with ratings and comments
- **Host Profiles** - Superhost badges and host information
- **Favorites** - Save properties to your wishlist

### UI/UX Features
- **Airbnb Red Branding** - Authentic Airbnb color scheme (#FF385C)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Sticky Header** - Navigation remains accessible while scrolling
- **Image Galleries** - Property photos in grid layout
- **Price Breakdown** - Transparent pricing with service fees
- **Smooth Animations** - Card hover effects and transitions

## Project Structure

```
airbnb-clone/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Main navigation with search
│   │   ├── CategoriesBar.jsx   # Category filters
│   │   ├── PropertyCard.jsx    # Property grid item
│   │   ├── PropertyDetail.jsx  # Full property view
│   │   └── Footer.jsx          # Footer with links
│   ├── data/
│   │   └── propertyData.js     # Mock property listings
│   ├── App.jsx                 # Main application component
│   ├── styles.css              # Global styles
│   └── index.js                # React entry point
├── .gitignore
├── LICENSE                     # Apache 2.0 License
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/airbnb-clone.git
cd airbnb-clone
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `build/` folder.

## Technologies Used

- **React 18** - UI library
- **Create React App** - Build tooling
- **CSS3** - Styling and animations
- **React Hooks** - State management (useState)

## Design System

### Color Palette
```css
--airbnb-red: #FF385C
--bg-primary: #FFFFFF
--bg-secondary: #F7F7F7
--text-primary: #222222
--text-secondary: #717171
--border-color: #DDDDDD
```

### Typography
- **Primary Font**: System font stack (San Francisco, Segoe UI, Roboto)
- Clean, minimal typography following Airbnb's design language

### Key Animations
- Property card hover with elevation
- Favorite button scale animation
- Smooth page transitions
- Category bar horizontal scroll

## Features in Detail

### Property Listings
- 8 sample properties with varied locations and types
- Property types: apartments, lofts, villas, cabins, townhouses, penthouses, cottages
- Pricing from $89 to $450 per night
- Guest capacity from 2 to 8 people

### Search & Filters
- Location-based search
- Date selection for check-in/checkout
- Guest count selector
- Category filters (Beachfront, Cabins, Cities, etc.)

### Property Details
- Large image gallery
- Host information with Superhost badges
- Full amenity list
- Guest reviews with ratings
- Booking card with price breakdown
- Responsive layout

### Booking System
- Interactive date picker
- Guest count adjustment
- Service fee calculation
- Total price display
- Reserve button

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] User authentication
- [ ] Backend API integration
- [ ] Real image uploads
- [ ] Interactive maps
- [ ] Calendar availability
- [ ] Payment processing
- [ ] Host dashboard
- [ ] Messaging system
- [ ] Advanced filters (price range, amenities)
- [ ] Mobile app
