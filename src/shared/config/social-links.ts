type SocialLink = {
	placeholder: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	link: string
}

import TelegramIcon from '../assets/icons-tsx/TelegramIcon.tsx'
import WhatsAppIcon from '../assets/icons-tsx/WhatsAppIcon.tsx'
import InstagramIcon from '../assets/icons-tsx/InstagramIcon.tsx'

const socialLinks: SocialLink[] = [
	{ placeholder: 'Telegram', icon: TelegramIcon, link: '#telegram' },
	{ placeholder: 'WhatsApp', icon: WhatsAppIcon, link: '#whatsapp' },
	{ placeholder: 'Instagram', icon: InstagramIcon, link: '#instagram' }
]

export default socialLinks
