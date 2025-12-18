type SocialLink = {
	placeholder: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	link: string
}

import TelegramIcon from '../../../shared/assets/icons-tsx/TelegramIcon'
import WhatsAppIcon from '../../../shared/assets/icons-tsx/WhatsAppIcon'
import InstagramIcon from '../../../shared/assets/icons-tsx/InstagramIcon'

const socialLinks: SocialLink[] = [
	{ placeholder: 'Telegram', icon: TelegramIcon, link: '#telegram' },
	{ placeholder: 'WhatsApp', icon: WhatsAppIcon, link: '#whatsapp' },
	{ placeholder: 'Instagram', icon: InstagramIcon, link: '#instagram' }
]

export default socialLinks
