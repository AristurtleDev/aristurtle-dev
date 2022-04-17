import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default ({ game }) => {
    const mediaPath = useBaseUrl(game.mediaPath);
    const url = `/games/${game.slug}`;

    return (
        <div className={styles.card}>
            <a className={styles.link} href={url}>
                <div className={styles.preview}>
                    <div className={styles['img-container']}>
                        <img src={mediaPath + game.preview} />
                    </div>
                </div>
                <div className={styles.info}>
                    <h1>{game.name}</h1>
                    <p>{game.short}</p>
                </div>
            </a>
        </div>
    );
};
