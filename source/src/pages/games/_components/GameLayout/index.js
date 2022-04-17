import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

const GameLayout = ({ game }) => {
    const mediaPath = useBaseUrl(game.mediaPath);
    const platformPath = useBaseUrl('/img/platforms/');

    return (
        <Layout title={game.name} description={game.short}>
            <section
                className={`${styles.wrapper} ${styles.banner}`}
                style={{ backgroundImage: `url('${mediaPath + game.cover}')` }}
            >
                <div className={styles.content}>
                    {game.trailer && (
                        <div className={styles['video-wrapper']}>
                            <iframe className={styles.video} src={game.trailer} />
                        </div>
                    )}
                </div>
            </section>

            <section className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.about}>
                        <h2>About {game.name}</h2>
                        <hr />
                        {game.description}
                    </div>
                </div>
            </section>

            {game.links && game.links.length > 0 && (
                <section className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Links</h2>
                        <hr />
                        <div className={styles.links}>
                            {game.links.map((link, idx) => {
                                return (
                                    <a href={link.url} className={styles.link} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                        </svg>
                                        <span className={styles.label}>{link.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {game.screenshots && game.screenshots.length > 0 && (
                <section className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Screenshots</h2>
                        <hr />
                        <div className={styles.screenshots}>
                            {game.screenshots.map((url, idx) => {
                                return (
                                    <a href={mediaPath + url} target="_blank">
                                        <img src={mediaPath + url} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default GameLayout;
