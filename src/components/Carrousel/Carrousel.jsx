import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import style from './Carrousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
	TfiArrowCircleLeft,
	TfiArrowCircleRight,
	TfiAngleRight,
} from 'react-icons/tfi';

function Carrousel() {
	const [active, setActive] = useState({
		today: true,
	});
	const [movies, setMovies] = useState([
		{
			name: 'Black Adam',
			genre: 'Acción/Fantasía',
			premiere: '2022',
			img: 'https://es.web.img2.acsta.net/pictures/22/10/07/16/48/1142280.jpg',
		},
		{
			name: 'Black Panther: Wakanda Forever',
			genre: 'Acción/Aventura',
			premiere: '2022',
			img: 'https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg',
		},
		{
			name: 'The Batman',
			genre: 'Acción/Aventura',
			premiere: '2022',
			img: 'https://www.ecartelera.com/carteles/11100/11185/001.jpg',
		},
		{
			name: 'Nobody',
			genre: 'Acción/Suspenso',
			premiere: '2021',
			img: 'https://es.web.img3.acsta.net/pictures/21/03/10/19/51/4151142.jpg',
		},
		{
			name: 'Ava',
			genre: 'Acción/Suspenso',
			premiere: '2020',
			img: 'https://es.web.img3.acsta.net/r_1280_720/pictures/20/07/08/17/43/1461793.jpg',
		},
		{
			name: 'Mortal Kombat',
			genre: 'Acción/Fantasía',
			premiere: '2021',
			img: 'https://es.web.img2.acsta.net/pictures/21/03/30/16/14/5223967.jpg',
		},
		{
			name: 'Spider-Man: No Way Home',
			genre: 'Acción/Aventura',
			premiere: '2021',
			img: 'https://pbs.twimg.com/media/FEPs09uWYAwM6U5?format=jpg&name=small',
		},
		{
			name: 'Bad Boys for Life',
			genre: 'Acción/Buddy cop',
			premiere: '2020',
			img: 'https://play-lh.googleusercontent.com/vt_BQw7XS9sb9zN4Q6AjW9FHLBwdBxeDfCFsfawkIEvQyuF6bVAohPAIhmqNIZVfE_b4dC9CcIuJw01ZpZ8',
		},
		{
			name: 'Aquaman',
			genre: 'Acción/Aventura',
			premiere: '2018',
			img: 'https://es.web.img3.acsta.net/pictures/18/11/13/11/25/2054865.jpg',
		},
	]);
	const [swiper, setSwiper] = useState();
	console.log(swiper);

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
			<section>
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
								Action & <br /> Drama Movies
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

export default Carrousel;
