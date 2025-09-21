import { AirVentIcon, LucideIcon, RefrigeratorIcon, ShirtIcon, SofaIcon, ThermometerSunIcon, TvIcon, WashingMachineIcon, WifiIcon } from "lucide-react"

export const AMENITIES = ['TV', 'Air Conditioner', 'Washing Machine', 'Internet', 'Water Heater', 'Refrigerator', 'Sofa', 'Wardrobe'] as const

export const AMENITIES_ICONS: Record<typeof AMENITIES[number], LucideIcon> = {
    'TV': TvIcon,
    'Air Conditioner': AirVentIcon,
    'Washing Machine': WashingMachineIcon,
    'Internet': WifiIcon,
    'Water Heater': ThermometerSunIcon,
    'Refrigerator': RefrigeratorIcon,
    'Sofa': SofaIcon,
    'Wardrobe': ShirtIcon,
} as const

export const PROPERTIES_LIST = [
    {
        id: 1,
        title: 'The One',
        location: 'Los Angeles, CA',
        bedrooms: 6,
        bathrooms: 4,
        area: 2780,
        price: 690000,
        images: ['/p1p1.avif', '/p1p2.avif', '/p1p3.avif'],
        mainTag: 'For Investment',
        amenities: ['TV', 'Washing Machine', 'Water Heater', 'Refrigerator', 'Wardrobe'],
        description: 'Introducing The One, a striking 6-bedroom residence designed for both luxury living and smart investment. Located in the prestigious neighborhood of Bel Air, Los Angeles, this 2,780 sq.ft home features bold modern architecture, open-plan interiors, and refined finishes. With 4 bathrooms, spacious living areas, and curated landscaping, it’s a statement of comfort, style, and long-term value.',
        features: ['6 Bedrooms & 4 Bathrooms', 'Bold Contemporary Design', 'Professionally Landscaped Garden', 'Spacious Driveway & Garage', 'Investment-Ready Property']
    },
    {
        id: 2,
        title: 'Billionaire Mansion',
        location: 'Miami, FL',
        bedrooms: 5,
        bathrooms: 3,
        area: 3800,
        price: 500000,
        images: ['/p2p1.avif', '/p2p2.avif', '/p2p3.avif'],
        mainTag: 'For Sale',
        amenities: ['Air Conditioner', 'Internet', 'Water Heater', 'Refrigerator', 'Sofa'],
        description: 'Experience the epitome of luxury living at the Billionaire Mansion in Miami, FL. This stunning 5-bedroom, 3-bathroom estate spans 3,800 sq.ft and boasts floor-to-ceiling windows that flood the space with natural light. Enjoy the private pool and outdoor lounge area, perfect for entertaining or relaxing in style. Located in the exclusive Bel Air neighborhood, this property offers unparalleled elegance and comfort.',
        features: ['5 Spacious Bedrooms', '3,800 sq.ft of Modern Living Space', 'Floor-to-Ceiling Windows', 'Private Pool & Outdoor Lounge', 'Located in Exclusive Bel Air']
    },
    {
        id: 3,
        title: 'The Beverly House',
        location: 'Beverly Hills, CA',
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        price: 290000,
        images: ['/p3p1.avif', '/p3p2.avif', '/p3p3.avif'],
        mainTag: 'For Rent',
        amenities: ['TV', 'Air Conditioner', 'Washing Machine', 'Internet', 'Refrigerator'],
        description: 'Discover The Beverly House, a beautifully designed 3-bedroom, 2-bathroom home located in the heart of Beverly Hills, CA. This 1,500 sq.ft residence features a spacious layout with natural finishes, floor-to-ceiling glass windows, and a private pool. Perfectly situated in a prime location, it offers both comfort and style for those seeking a luxurious lifestyle.',
        features: ['Spacious 3-Bedroom Layout', 'Private Pool & Courtyard', 'Natural Finishes Throughout', 'Floor-to-Ceiling Glass Windows', 'Prime Beverly Hills Location']
    },
    {
        id: 4,
        title: 'Palazzo di Amore',
        location: 'Beverly Hills, CA',
        bedrooms: 4,
        bathrooms: 2,
        area: 2100,
        price: 490000,
        images: ['/p4p1.avif', '/p4p2.avif', '/p4p3.avif'],
        mainTag: 'For Rent',
        amenities: ['TV', 'Air Conditioner', 'Washing Machine', 'Internet', 'Water Heater', 'Refrigerator', 'Sofa'],
        description: 'Welcome to Palazzo di Amore, a stunning 4-bedroom, 2-bathroom residence located in the prestigious Beverly Hills, CA. This 2,100 sq.ft home features Mediterranean architectural style, expansive outdoor living areas, and a gourmet kitchen with high-end appliances. Enjoy the perfect blend of elegance and comfort in this luxurious property, ideal for those seeking a refined lifestyle.',
        features: ['4 Bedrooms & 2 Bathrooms', 'Mediterranean Architectural Style', 'Expansive Outdoor Living Areas', 'Gourmet Kitchen with High-End Appliances', 'Located in Prestigious Beverly Hills']
    },
    {
        id: 5,
        title: 'The Manor',
        location: 'Holmby Hills, CA',
        bedrooms: 7,
        bathrooms: 5,
        area: 3100,
        price: 482000,
        images: ['/p5p1.avif', '/p5p2.avif', '/p5p3.avif'],
        mainTag: 'For Investment',
        amenities: ['TV', 'Air Conditioner', 'Washing Machine', 'Internet', 'Water Heater', 'Refrigerator', 'Sofa', 'Wardrobe'],
        description: 'Experience unparalleled luxury at The Manor, a magnificent 7-bedroom, 5-bathroom estate located in the exclusive Holmby Hills, CA. This 3,100 sq.ft residence showcases French Chateau architectural style, lavish interiors with crystal chandeliers, and expansive grounds featuring a pool and tennis court. Perfectly positioned in a prime location, this property offers both elegance and investment potential for discerning buyers.',
        features: ['7 Bedrooms & 5 Bathrooms', 'French Chateau Architectural Style', 'Lavish Interiors with Crystal Chandeliers', 'Expansive Grounds with Pool & Tennis Court', 'Prime Holmby Hills Location']
    },
    {
        id: 6,
        title: 'The Penthouse at Central Park Tower',
        location: 'New York, NY',
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        price: 350000,
        images: ['/p6p1.avif', '/p6p2.avif', '/p6p3.avif'],
        mainTag: 'For Sale',
        amenities: ['Air Conditioner', 'Internet', 'Water Heater', 'Refrigerator', 'Sofa', 'Wardrobe'],
        description: 'Introducing The Penthouse at Central Park Tower, a luxurious 4-bedroom, 3-bathroom residence located in the heart of New York, NY. This 2,500 sq.ft home offers stunning views of Central Park, modern open-concept design, and access to world-class amenities including a fitness center, spa, and private dining rooms. Situated in the iconic Central Park Tower, this property epitomizes urban sophistication and elegance.',
        features: ['4 Bedrooms & 3 Bathrooms', 'Stunning Central Park Views', 'Modern Open-Concept Design', 'Access to World-Class Amenities', 'Located in Iconic Central Park Tower']
    }
]

