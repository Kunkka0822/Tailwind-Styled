import React from 'react';
import tw from 'tailwind-styled-components';
import { Container } from '../basics';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import Service1 from '../../../assets/images/Service1.png';
import Service11 from '../../../assets/images/ServiceTrans1.png';
import Service2 from '../../../assets/images/Service2.png';
import Service22 from '../../../assets/images/ServiceTrans2.png';
import Service3 from '../../../assets/images/Service3.png';
import Service33 from '../../../assets/images/ServiceTrans3.png';
import Service4 from '../../../assets/images/Service4.png';
import Service44 from '../../../assets/images/ServiceTrans4.png';
import Service5 from '../../../assets/images/Service5.png';
import Service55 from '../../../assets/images/ServiceTrans5.png';
import Service6 from '../../../assets/images/Service6.png';
import Service66 from '../../../assets/images/ServiceTrans6.png';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';

const ItemContainer = tw.div`flex flex-col lg:flex-row w-full bg-feaure-back bg-center bg-cover bg-no-repeat p-[60px]`;
const ItemGroup = tw.div`group flex px-[37px] py-[35px] bg-white rounded-[10px] text-left hover:bg-[#FD660A]`;
const ItemGroup1 = ItemGroup;
const ItemGroup2 = tw(ItemGroup)`hover:bg-[#F30876]`;
const ItemGroup3 = tw(ItemGroup)`hover:bg-[#05DBEE]`;
const ItemGroup4 = tw(ItemGroup)`hover:bg-[#13E1AF]`;
const ItemGroup5 = tw(ItemGroup)`hover:bg-[#780FDA]`;
const ItemGroup6 = tw(ItemGroup)`hover:bg-[#0A99FD]`;

export type ServiceItemParams = {
	title: string;
	desc: string;
	image: string;
	imageWhite: string;
	Component: TailwindComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>
}

const Item = ({title, desc, image, imageWhite, Component}: ServiceItemParams) => {
	return (
		<div className='basis-1/2 max-w-[50%] px-[15px] mb-[20px]'>
			<Component>
				<div className='shrink-0 h-[70px]'>
					<img src={image} alt="Service" className='w-[70px] h-[70px] group-hover:hidden' />
					<img src={imageWhite} alt="Service" className='invisible w-[70px] h-[70px] duration-300 transition-all scale-0 group-hover:visible group-hover:scale-100 opacity-0 group-hover:opacity-100' />
				</div>
				<div className='pl-[20px]'>
					<div className='text-[20px] font-[600] mb-[13px] text-[#101010] group-hover:text-white'>
						{title}
					</div>
					<div className='group-hover:text-white font-[500]'>{desc}</div>
				</div>
			</Component>
		</div>
	)
}

const Services = () => {
	const { t } = useTranslation();
	return (
		<div className='relative pb-[50px]'>
			<Container>
				<div className='mb-[45px]'>
					<span className='font-[600] text-[#F27C1E] text-[14px] mb-[10px] uppercase'>{t('service_subtitle')}</span>
					<div className='text-[#102B3E] text-[36px] font-[700]'>{t('service_title')}</div>
				</div>

				<div className='flex flex-wrap'>
					<Item 
						title={t('service1')} 
						desc={t('service_desc')}
						image={Service1}
						imageWhite={Service11}
						Component={ItemGroup1}
					/>
					<Item 
						title={t('service2')} 
						desc={t('service_desc')}
						image={Service2}
						imageWhite={Service22}
						Component={ItemGroup2}
						/>
					<Item 
						title={t('service3')} 
						desc={t('service_desc')}
						image={Service3}
						imageWhite={Service33}
						Component={ItemGroup3}
						/>
					<Item 
						title={t('service4')} 
						desc={t('service_desc')}
						image={Service4}
						imageWhite={Service44}
						Component={ItemGroup4}
						/>
					<Item 
						title={t('service5')} 
						desc={t('service_desc')}
						image={Service5}
						imageWhite={Service55}
						Component={ItemGroup5}
						/>
					<Item 
						title={t('service6')} 
						desc={t('service_desc')}
						image={Service6}
						imageWhite={Service66}
						Component={ItemGroup6}
						/>
				</div>
			</Container>
		</div>
	);
}

export default Services;