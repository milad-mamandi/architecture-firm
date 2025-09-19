import { getInitials } from "@/lib/utils"
import { ChartLineIcon, HandshakeIcon, HouseIcon, KeyIcon, LeafIcon, ReceiptIcon, ScaleIcon, SettingsIcon, TreePineIcon } from "lucide-react"
import { title } from "process"

export const NAV_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Agents', href: '#agents' },
]

export const AGENTS = [
    {
        name: 'John Doe',
        image: '/images/agents/agent-1.avif',
        fallback: 'JD',
    },
    {
        name: 'Michael Johnson',
        image: '/images/agents/agent-2.avif',
        fallback: 'MJ',
    },
    {
        name: 'Jane Smith',
        image: '/images/agents/agent-3.avif',
        fallback: 'JS',
    },
    {
        name: 'Alex Brown',
        image: '/images/agents/agent-4.avif',
        fallback: 'AB',
    },
] as const

export const PROPERTIES = [
    {
        image: '/images/properties/p1.avif',
        title: 'Luxury Residences',
        description: 'Experience unparalleled elegance in our luxury residences, featuring exquisite design, premium amenities, and prime locations for the most discerning tastes.',
        icon: HouseIcon,
    },
    {
        image: '/images/properties/p2.avif',
        title: 'Eco Green Buildings',
        description: 'Discover sustainable living in our eco-friendly properties, designed to minimize environmental impact while offering modern comforts and energy efficiency.',
        icon: LeafIcon,
    },
    {
        image: '/images/properties/p3.avif',
        title: 'Unique Vacation Homes',
        description: 'Explore our curated collection of unique vacation homes, offering distinctive architecture and exceptional locations for unforgettable stays.',
        icon: TreePineIcon
    }
]

export const SERVICES = [
    {
        title: 'Property Sales',
        description: 'Expertly promoting and selling your property to attract qualified buyers.',
        icon: ReceiptIcon
    },
    {
        title: 'Buyer Representation',
        description: 'Guiding you through the home-buying process, prioritizing your interests.',
        icon: HandshakeIcon
    },
    {
        title: 'Rental Management',
        description: 'Managing tenant relations, maintenance, and finances to maximize rental returns.',
        icon: KeyIcon
    },
    {
        title: 'Investment Consulting',
        description: 'Providing strategic advice to help you capitalize on real estate opportunities.',
        icon: ChartLineIcon
    },
    {
        title: 'Property Valuation',
        description: "Accurately assessing your property's value for sales, purchases, or investments.",
        icon: ScaleIcon
    },
    {
        title: 'Tailored Solutions',
        description: 'Delivering customized real estate services aligned with your specific goals.',
        icon: SettingsIcon
    }
]