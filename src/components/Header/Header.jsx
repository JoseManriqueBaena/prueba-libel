import React, { useRef, useState } from 'react';
import style from './Header.module.css';
import playButton from '../../assests/PlayButton.png';
import videoHeader from '../../assests/video2.mp4';

function Header() {
	const videoRef = useRef();
	const [play, setPlay] = useState(false);

	const handlerPlay = () => {
		if (!play) {
			videoRef.current.play();
			setPlay(true);
		} else {
			videoRef.current.pause();
			setPlay(false);
		}
	};

	return (
		<div className={style.mainContainer}>
			<video
				className={style.video}
				src={videoHeader}
				ref={videoRef}
				loop
				muted
			></video>
			<div className={style.contentContainer}>
				<div className={style.infoContainer}>
					<h1>Big Comeback</h1>
					<p>
						Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis
						vestibulum urna turpis et risus. Mauris porttitor risus faucibus,
						auctor arcu a, tincidunt nibh...
					</p>
					<div className={style.buttonsContainer}>
						<button className={style.buttonPrimary}>WATCH NOW</button>
						<button className={style.buttonSecondary}>+ PLAYLIST</button>
					</div>
				</div>
				<div className={style.playContainer} onClick={handlerPlay}>
					<img
						className={
							!play
								? style.imgPlayButton
								: `${style.imgPlayButton} ${style.videoPlay}`
						}
						src={playButton}
						alt='playButton img'
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
