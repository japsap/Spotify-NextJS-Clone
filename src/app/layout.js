import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#1B1B1B]'>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}