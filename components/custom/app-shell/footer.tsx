import formatDate from 'date-fns/format'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { NAVIGATIONAL_ITEMS, HANDLE } from './constants'

interface SocialLink {
  name: string
  href: string
  ariaLabel: string
  icon: React.ReactElement
}
export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: 'Github',
      href: `https://github.com/${HANDLE}`,
      ariaLabel: 'Visit my Github',
      icon: <Github width={24} height={24} />,
    },
    {
      name: 'Discord',
      href: `https://discordapp.com/users/${HANDLE}`,
      ariaLabel: 'Add me on Discord',
      icon: (
        <svg className="icon" fill="currentColor" fillRule="evenodd" width={24} height={24} clipRule="evenodd">
          <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/in/${HANDLE}`,
      ariaLabel: 'Go to my LinkedIn',
      icon: <Linkedin width={24} height={24} />,
    },
  ]

  return (
    <footer className="flex w-screen flex-col justify-between border-t border-border px-10 py-4 sm:grid-cols-1 md:flex-row">
      <div className="my-4 flex flex-col-reverse items-center justify-center gap-6 md:flex-col md:items-start">
        <div className="flex flex-row gap-6">
          {socialLinks.map(({ name, href, ariaLabel, icon }) => (
            <Link key={name} href={href} aria-label={ariaLabel}>
              {icon}
            </Link>
          ))}
        </div>
        <ul className="flex flex-row gap-6">
          {NAVIGATIONAL_ITEMS.map((item) => (
            <li className="w-full" key={item.value}>
              <Link href={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-4 flex flex-row items-center justify-center">
        ©&nbsp;{formatDate(new Date(), 'yyyy')}&nbsp;James Walsh
      </div>
    </footer>
  )
}
