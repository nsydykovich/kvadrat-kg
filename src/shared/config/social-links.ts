export type SocialType = 'Telegram' | 'WhatsApp' | 'Instagram'

interface SocialLink {
	id: number
	social: SocialType
	link: string
}

const socialLinks: SocialLink[] = [
	{ id: 1, social: 'Instagram', link: '#instagram' },
	{ id: 2, social: 'WhatsApp', link: '#whatsapp' },
	{ id: 3, social: 'Telegram', link: '#telegram' },
]

export default socialLinks
