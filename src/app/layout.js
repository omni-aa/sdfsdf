// app/layout.js
import './globals.css'

export const metadata = {
    title: 'My Next.js PWA',
    description: 'A progressive web app built with Next.js',
    manifest: '/manifest.json', // This links to your manifest file
    themeColor: '#000000', // Sets the theme color for the address bar
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'My Next.js PWA',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}