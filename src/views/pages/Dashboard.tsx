import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';

const Dashboard = () => {
	return (
		<div className='pt-8'>
			<Hero />
			<About />
		</div>
	)
}

export default Dashboard;