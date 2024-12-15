'use client'
import Table from '@/components/table/table';
import UxLi from '@/components/styles/UxLi';
import { useState } from 'react';
import clsx from 'clsx';

export default function Technologies(){
	let technologies = [
		{
			conntection: 'FTTB (FTTX)',
			title: 'волокно, которое доходит до границ здания. Используется кабель UTP-4/UTP-8:',
			table: true,
			cable: ['UTP-4', 'UTP-8'],
			incoming: [100, 100],
			outgoing: [1000, 1000],
			list: 
			[
				'Подключается только в многоквартирных домах;', 
				'От коммутатора идет соединение к дому;',
				'Если устройство одно, то можно напрямую подключить кабель к нему, если несколько, то нужен роутер;',
				'В пиковую нагрузку средняя скорость интернета может сократиться.'
			],
			id: 1,
		},
		{
			conntection: 'GPON (PON)',
			title: 'пассивная оптическая сеть. Используется GOF кабель (оптоволокно):',
			table: true,
			cable: 'GOF',
			incoming: 1000,
			outgoing: 1000,
			text_additionally: 'Обязательным оборудованием является:',
			list_additionally: 
			[
				'ONT без WI-FI. Используется для случаев, когда устройство одно и у клиента есть свой роутер;',
				'ONT с WI-FI. Используется для случаев, когда устройств много и у клиента нет своего роутера.'
			],
			list: 
			[
				'Не используются иные оборудования в виде коммутаторов<',
				'Устанавливается и в частном секторе, и в многоквартирных домах;',
				'В частном секторе подключение платное;',
				'Тут нт пиковой нагрузки.'
			],
			id: 2,
		},
		{
			conntection: 'ADSL',
			title: 'ассиметричная цифровая абоненсткая линия. Подключение происходит по ТРП (телефонно распределительный провод):',
			table: true,
			cable: 'ADS',
			incoming: '20',
			outgoing: '1',
			list: 
			[
				'Для подключения нужны ADSL модем без WI-FI или ADLS роутер с WI-FI;',
				'Подключается как к частному сектору, так и в многоквартирные дома.'
			],
			id: 3,
		},
		{
			conntection: 'DOCSIS',
			title: 'передача данных по сетям кабельного телевидения. Передача данных происходит по коаксиальному (телевизионному) кабелю:',
			table: true,
			cable: 'RG-6',
			incoming: '200',
			outgoing: '20',
			list: 
			[
				'Обязательное оборудование - кабельный модем без WI-FI;',
				'Подключается только в многоквартирных домах.'
			],
			id: 4,
		},
		{
			conntection: 'КТВ',
			title: 'кабельное телевидение:',
			table: true,
			cable: 'RG-6',
			incoming: '-',
			outgoing: '-',
			list: 
			[
				'Используется только в многоквартиных домах;',
				'Если устройств несколько, то может использоваться сплиттер, он разделяет 1 кабель от которого идет подключение и пускает от себя ещё 2 RG-6 провода.'
			],
			id: 5,
		},
		{
			conntection: 'ЦКТВ',
			title: 'цифровое кабельное телевидение:',
			table: true,
			cable: 'RG-6 / HDMI', 
			incoming: '-',
			outgoing: '-',
			list: 
			[
				'Нужно дополнительное оборудование в виде цифровой приставки или CAM-модуля;',
				'CAM-модуль устанавливается сбоку плазменного телевизора, если у него там есть специальный разъем;',
				'В приставку можно вставить как тюльпаны, так и HMDI.'
			],
			id: 6,
		},
		{
			conntection: 'IPTV',
			title: 'телевидение по протоколу Интернет:',
			table: true,
			cable: 'RG-6 / HDMI',
			incoming: '-',
			outgoing: '-',
			list: 
			[
				'Можно обойтись и без приставки, если телевизор плазменный, от популярной фирмы, от 2017 года и с технологией SMART TV;',
				'Подключить можно в частном секторе и в многоквартином доме;',
				'Услуги ТВ и Интернета должны быть от одного провайдера;',
				'Если функции SMART TV на телевизоре нет, то можно купить специальную IP-приставку, она работает на андроиде и имеет выход в интернет.'
			],
			text_additionally: 'Столько приставок можно устанавливать в разных технологиях:',
			list_additionally: 
			[
				'FTTB - до 3 приставок',
				'GPON - до 3 приставок',
				'ADSL - 1 приставка',
				'DOCSIS - не поддерживает'
			],
			id: 7,
		},
		{
			conntection: 'WiMAX',
			title: 'телекоммуникационная технология, разработанная с целью предоставления универсальной беспроводной связи на больших расстояниях для широкого спектра устройств.',
			cable: false,
			text_additionally: 'С помощью данного технологического решения можно построить высокоскоростные сети для передачи больших объемов инфморации по радиоканалу.',
			text: 
			[
				'Для того чтобы построить сеть WiMAX, специалисты компании устанавливают базовую станцию в центре населенного пункта, а абонентское оборудование в виде малогабаритной направленной антенны крепят на крыше или корпусе дома пользователя.', 
				'У технологии достаточно широкая зона покрытия — до трех километров в зависимости от ландшафта, скорость доступа в интернет — от 5 до 30 Мбит/с.',
				'Абонентское оборудование для сети WiMAX представляет собой роутер и малогабаритную направленную антенну, которая устанавливается на крыше или стене дома. Такое размещение обеспечивает качественный прием и передачу сигнала на частоте 2,4 и 5 ГГц. Оборудование имеет защитный корпус, что позволяет гарантировать качественный сигнал при любых погодных условиях.'
			]
		}
	]
	const [active, setActvie] = useState(null);
	const handleClick = (id) => {
		  setActvie(id);
	}
	return(
	<div>
		{
			technologies.map((item, index) => (
				<div key={index}>
					<p className='mb-4 pb-4 text-xl border-b-2 border-black cursor-pointer' onClick={() => handleClick(item.id)}>
						<span>{item.conntection}</span> - {item.title}
					</p>
					<div className={clsx(active !== item.id ? "overflow-hidden max-h-0" : 'overflow-auto max-h-auto')}>
							{
								item.table ? 
								<Table>
									<div className='max-w-[700px]'>
											{
												Array.isArray(item.cable) ? (
													item.cable.map((i, id) => (
														<div key={id} className='flex'>
															<div className='flex-[1_1_25%] border m-[3px] p-2'>{i}</div>
															<div className='flex-[1_1_25%] border m-[3px] p-2'>{item.incoming[id]}</div>
															<div className='flex-[1_1_25%] border m-[3px] p-2'>{item.outgoing[id]}</div>
														</div>
													))
												) : (
												<div className='flex'>
													<div className='flex-[1_1_25%] border m-[3px] p-2'>{item.cable}</div>
													<div className='flex-[1_1_25%] border m-[3px] p-2'>{item.incoming} мбит/c</div>
													<div className='flex-[1_1_25%] border m-[3px] p-2'>{item.outgoing} мбит/с</div>
												</div>
												)
											}
									</div>
								</Table> 
								: null
							}
						<ul className={clsx('ml-4', item.text_additionally && item.text ? 'mb-3' : 'mb-10')}>
							{
								item.list ? (
									item.list.map((i, id) => (
										<UxLi key={id}>{i}</UxLi>
									))
								) : null
							}
						</ul>
							{
								item.text_additionally ? (
									<>
										<p className='mb-2'>{item.text_additionally}</p>
										<ul className='ml-8 mb-10'>
											{
												item.list_additionally ? (
													item.list_additionally.map((i, id) => (
														<UxLi key={id}>{i}</UxLi>
													))
												) : null
											}
										</ul>
									</>
								) : null
							}
							{
								item.text ? (
									item.text.map((i, id) => (
										<p className='mb-4' key={id}>{i}</p>
									))
								) : null
							}
					</div>
				</div>
			))
		}
	</div>
	);
}
