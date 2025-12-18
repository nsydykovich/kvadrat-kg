import headerBg from '../../../../shared/assets/background/header.png'
import InstagramIcon from '../../../../shared/assets/icons-tsx/InstagramIcon'
import TelegramIcon from '../../../../shared/assets/icons-tsx/TelegramIcon'
import WhatsAppIcon from '../../../../shared/assets/icons-tsx/WhatsAppIcon'
import CheckCircleIcon from '../../../../shared/assets/icons-tsx/CheckCircleIcon'

function Heading() {
	return (
		<section>
			<div
				className="absolute top-0 left-0 -z-50 h-full w-full bg-black/20 mask-b-from-0% mask-b-to-90% bg-cover bg-center bg-blend-overlay"
				style={{ backgroundImage: `url(${headerBg})` }}
			/>
			<div className="z-auto flex min-h-svh flex-col items-end justify-center py-8 md:items-center">
				<div className="container mx-auto flex flex-col gap-8 px-2 pt-[calc(40vh-30vh)] md:px-4 md:pt-[calc(45vh-25vh)] xl:pt-[calc(50vh-20vh)]">
					<h2 className="text-2xl leading-tight font-semibold wrap-normal md:text-4xl lg:w-3/4 xl:text-5xl xl:lg:w-2/4">
						Агенство недвижимости в Бишкеке полного цикла
					</h2>
					<ul className="flex flex-wrap items-center gap-2 px-3 py-12 md:gap-4">
						<li className="text-md flex flex-auto items-center gap-2">
							<CheckCircleIcon className="h-6 w-6 md:h-8 md:w-8" />
							<span className="text-[16px] md:text-[20px]">Юридические чистые обьекты</span>
						</li>
						<li className="text-md flex flex-auto items-center gap-2">
							<CheckCircleIcon className="h-6 w-6 md:h-8 md:w-8" />
							<span className="text-[16px] md:text-[20px]">Вся ответственность на нас по договору</span>
						</li>
						<li className="text-md flex flex-auto items-center gap-2">
							<CheckCircleIcon className="h-6 w-6 md:h-8 md:w-8" />
							<span className="text-[16px] md:text-[20px]">Поиск, подбор, продажа - все под ключ</span>
						</li>
					</ul>
					<div className="flex justify-center md:justify-between">
						<button className="bg-background-alt rounded-full px-6 py-3 md:px-8 md:py-4 md:text-[20px]">
							Получить консультацию от риэлтора
						</button>
						<ol className="bg-background-alt hidden gap-4 divide-x divide-white/80 rounded-full px-9 py-3 md:flex md:items-center">
							<li className="not-last:pr-4">
								<a href="#">
									<TelegramIcon className="h-6 w-6 md:h-8 md:w-8" />
								</a>
							</li>
							<li className="not-last:pr-4">
								<a href="#">
									<WhatsAppIcon className="h-6 w-6 md:h-8 md:w-8" />
								</a>
							</li>
							<li className="not-last:pr-4">
								<a href="#">
									<InstagramIcon className="h-6 w-6 md:h-8 md:w-8" />
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Heading
