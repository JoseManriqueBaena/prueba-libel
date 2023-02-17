import React from 'react';
import style from './MovieCard.module.css';

function MovieCard({ name, genre, premiere, img }) {
	return (
		<div className={style.mainContainer}>
			<div className={style.imgContainer}>
				<img src={img} alt='movieCartel' />
			</div>
			<div className={style.infoContainer}>
				<p>
					{genre}, {premiere}
				</p>
				<h3>{name}</h3>
			</div>
		</div>
	);
}

export default MovieCard;
