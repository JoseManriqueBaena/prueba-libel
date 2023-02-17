import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import style from './Carrousel2.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
	TfiArrowCircleLeft,
	TfiArrowCircleRight,
	TfiAngleRight,
} from 'react-icons/tfi';

function Carrousel2() {
	const [active, setActive] = useState({
		today: true,
	});
	const [movies, setMovies] = useState([
		{
			name: 'Noche de juegos',
			genre: 'Comedia/Acción',
			premiere: '2018',
			img: 'https://es.web.img3.acsta.net/pictures/18/03/05/13/23/4650927.jpg',
		},
		{
			name: 'Eighth Grade',
			genre: 'Comedia dramática',
			premiere: '2018',
			img: 'https://www.ecranlarge.com/uploads/image/001/027/djjc8sqz3p5e9h53tezlilyfczi-643.jpg',
		},
		{
			name: 'No me las toquen',
			genre: 'Comedia erótica',
			premiere: '2018',
			img: 'https://mx.web.img2.acsta.net/c_310_420/pictures/18/05/24/01/23/2492899.jpg',
		},
		{
			name: 'Deadpool 2',
			genre: 'Acción/Aventura',
			premiere: '2018',
			img: 'https://es.web.img3.acsta.net/pictures/18/04/26/11/50/5029006.jpg',
		},
		{
			name: 'En los 90',
			genre: 'Drama/Comedia',
			premiere: '2018',
			img: 'https://es.web.img2.acsta.net/pictures/19/05/31/11/23/0221213.jpg',
		},
		{
			name: 'Wifi Ralph',
			genre: 'Animada/Comedia',
			premiere: '2018',
			img: 'https://sembrarvalores.org.ar/wp-content/uploads/2019/01/Wifi_Ralph_Poster_2_Latino.jpg',
		},
		{
			name: 'Ant-Man y la Avispa',
			genre: 'Acción/Aventura',
			premiere: '2018',
			img: 'https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/01105830/25e6aa7a-5f3e-4103-b7c8-b9cc740d95b8-717x1024.jpg',
		},
		{
			name: 'Oceans 8: las estafadoras',
			genre: 'Comedia/Crimen',
			premiere: '2018',
			img: 'https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/191334/191334_800x1187.jpg',
		},
		{
			name: 'Set It Up: El plan imperfecto',
			genre: 'Comedia romántica',
			premiere: '2018',
			img: 'https://i.pinimg.com/474x/16/05/a8/1605a87061e336a7bcf1e6f36c5dc454.jpg',
		},
	]);

	const [swiper, setSwiper] = useState();

	const handlerClick = (event) => {
		const name = event.target.title;

		setActive({
			[name]: true,
		});

		if (name === 'today') {
			setMovies(
				movies.sort((a, b) => {
					if (a.name < b.name) return 1;
					if (a.name > b.name) return -1;
					return 0;
				})
			);
		}

		if (name === 'thisWeek') {
			setMovies(
				movies.sort((a, b) => {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
					return 0;
				})
			);
		}

		if (name === 'lastDays') {
			setMovies(
				movies.sort((a, b) => {
					if (a.genre > b.genre) return 1;
					if (a.genre < b.genre) return -1;
					return 0;
				})
			);
		}
	};

	return (
		<>
			<section className={style.sectionContainer}>
				<div className={style.mainContainer}>
					<div className={style.tabsContainer}>
						<h3
							className={active.today ? style.active : style.desactive}
							title='today'
							onClick={handlerClick}
						>
							Today
						</h3>
						<h4>/</h4>
						<h3
							className={active.thisWeek ? style.active : style.desactive}
							title='thisWeek'
							onClick={handlerClick}
						>
							This week
						</h3>
						<h4>/</h4>
						<h3
							className={active.lastDays ? style.active : style.desactive}
							title='lastDays'
							onClick={handlerClick}
						>
							Last 30 days
						</h3>
					</div>
					<div className={style.allSwiperContainer}>
						<div className={style.swiperContainer}>
							<Swiper
								spaceBetween={10}
								onSwiper={(swiper) => setSwiper(swiper)}
								breakpoints={{
									1440: {
										slidesPerView: 6,
									},
									1000: {
										slidesPerView: 5,
									},
								}}
							>
								{movies.map((movie, i) => (
									<SwiperSlide id={i}>
										<MovieCard
											name={movie.name}
											genre={movie.genre}
											premiere={movie.premiere}
											img={movie.img}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className={style.categoryContainer}>
							<hr className={style.hr1} />
							<h2>
								Funniest Comedy
								<br /> Movies of 2018
							</h2>
							<div className={style.arrowsContainer}>
								<TfiArrowCircleLeft
									className={style.arrows}
									onClick={() => swiper.slidePrev()}
								/>
								<TfiArrowCircleRight
									className={style.arrows}
									onClick={() => swiper.slideNext()}
								/>
							</div>
							<hr className={style.hr2} />
							<div className={style.viewAllContainer}>
								<p>VIEW ALL</p>
								<TfiAngleRight className={style.arrowView} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Carrousel2;
