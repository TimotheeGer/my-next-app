import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'My App',
    description: 'My app description',
    keywords: 'my, app',
}

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}

export default MainLayout