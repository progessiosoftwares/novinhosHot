import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/progessiosoftwares/db-json/main/db.json')
            .then(resposta => resposta.json())
            .then(dados => {
                const videoEncontrado = dados.videos.find(v => v.id === Number(parametros.id));
                setVideo(videoEncontrado);
            })
            .catch(error => {
                console.error(error);
            });
    }, [parametros.id]);

    if (!video) {
        return <NaoEncontrada />;
    }

    return (
        <>
            <Titulo>
                <h1>{video.titulo}</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    src={video.link}
                    frameborder="0"
                    width="100%"
                    height="100%"
                    scrolling="no"
                    allowfullscreen>
                </iframe>
            </section>
        </>
    );
}

export default Player;
