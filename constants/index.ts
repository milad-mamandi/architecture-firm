import { getInitials } from "@/lib/utils"

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