import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css';

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/progessiosoftwares/db-json/main/db.json')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados.videos)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className={styles.allContent}>
            {/* <Banner imagem="home" /> */}
            <Titulo>
                <h1>Videos mais recentes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </div>
    );
}

export default Inicio;
