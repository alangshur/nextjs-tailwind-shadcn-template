import '@/css/tailwind.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
	title: 'Alex Langshur',
	description: "Alex Langshur's personal website",
	// icons: { icon: "/favicon.ico" },
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body className="h-screen w-screen overflow-hidden overscroll-none font-sans">
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
