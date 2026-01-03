import { Button } from '@/shared/ui/Button'
import socialLinks, { type SocialType } from '@/shared/config/social-links'
import {
	PiEnvelope,
	PiInstagramLogo,
	PiMapPin,
	PiPhone,
	PiTelegramLogo,
	PiWhatsappLogo
} from 'react-icons/pi'

const FOOTER_ICONS: Record<SocialType, React.ElementType> = {
	Telegram: PiTelegramLogo,
	WhatsApp: PiWhatsappLogo,
	Instagram: PiInstagramLogo
}

export const Footer = () => {
	return (
		<footer className="bg-footer text-footer-foreground py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-between gap-10 md:flex-row">
					<section className="space-y-4 md:w-[30%]">
						<h4 className="text-2xl font-bold uppercase">kvadrat.kg</h4>
						<div>
							<h6 className="mb-4 text-sm">Наши социальные сети</h6>
							<ol className="flex gap-2">
								{socialLinks.map((item) => {
									const IconComponent = FOOTER_ICONS[item.social]
									if (!IconComponent) return null
									return (
										<li key={item.id}>
											<Button className="hover:bg-primary-hover h-8 w-8 rounded-full p-0" size="icon" asChild>
												<a href={item.link} target="_blank" rel="noopener noreferrer">
													<IconComponent className="h-5 w-5" />
												</a>
											</Button>
										</li>
									)
								})}
							</ol>
						</div>
					</section>

					<section className="md:w-[40%]">
						<div className="grid grid-cols-2 gap-8 text-sm">
							<ul className="flex flex-col gap-4">
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Квартиры
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Офис продаж
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Ипотека
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Инвестиции
									</a>
								</li>
							</ul>
							<ul className="flex flex-col gap-4">
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Застройщики
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Акции
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Контакты
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-primary transition-colors">
										Жилые комплексы
									</a>
								</li>
							</ul>
						</div>
					</section>

					<section className="space-y-4 md:w-[25%]">
						<h5 className="text-lg font-semibold">Контакты</h5>
						<ul className="flex flex-col gap-3 text-sm">
							<li className="flex items-center gap-2">
								<div className="bg-primary rounded-full p-1.5">
									<PiPhone className="h-5 w-5" />
								</div>
								<span>+996 400 567 455</span>
							</li>
							<li className="flex items-center gap-2">
								<div className="bg-primary rounded-full p-1.5">
									<PiEnvelope className="h-5 w-5" />
								</div>
								<span>apartm_@gmail.com</span>
							</li>
							<li className="flex items-start gap-2">
								<div className="bg-primary shrink-0 rounded-full p-1.5">
									<PiMapPin className="h-5 w-5" />
								</div>
								<span>г.Бишкек ул.45 Мира</span>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</footer>
	)
}
