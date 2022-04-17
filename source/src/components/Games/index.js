import React from 'react';
import GamesList from '@site/src/data/gameslist';
import styles from './styles.module.css';
import GameCard from '@site/src/components/GameCard';

const Games = () => (
    <section className={styles.games}>
        <h1>I Make Games</h1>
        <p>
            I've been making games in some fashion since I was a kid. Quirky ascii graphics in QBasic, dungeon crawlers
            on TI-86, and experiments with RPG Maker 95. Those are all projects that will be lost to time forever. More
            recently though, I've grown increadibly fond of the <a href="https://monogame.net"> MonoGame Framework </a>
            and work primarly in that now. Below, you can find the games I've released publically over the past several
            years.
        </p>
        <div className={styles['games-list']}>
            {GamesList.map((game, idx) => {
                return <GameCard key={game.name} game={game} />;
            })}
        </div>
    </section>
);

export default Games;
