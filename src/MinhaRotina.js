import React from 'react';

const MinhaRotina = () => {
    return (
        <div>
            <img 
                src="https://christianosantos.com/files/cs1/avatar-mulher.jpg" 
                alt="Avatar de mulher" 
                style={{ maxWidth: '100%', height: 'auto' }} 
            />
            <h1>Yasmin Lopes</h1>
            <br />
            <p>
                Acordo diariamente às 8h, tomo café da manhã e me arrumo para ir para
                o estágio. Largo às 13h, volto para casa, almoço e descanso. Às 14h,
                me arrumo para ir dar aula de reforço de matemática, saio de lá às 17:30h.
                Vou direto para casa e me arrumo para ir para a faculdade, onde as aulas
                se iniciam às 18:30h. No intervalo das aulas, gosto de conversar com
                meus amigos e lanchar. Largo em torno de 21:50h, vou para casa e me
                organizo para dormir. Geralmente deito para dormir às 23h.
            </p>
            <br />
            <h2>Vídeo Aleatório</h2>
            <video width="640" height="360" controls>
                <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
            </video>
            <br />
            <h2>Música Aleatória</h2>
            <audio controls autoPlay>
                <source src="https://christianosantos.com/files/cs1/musica02.mp3" type="audio/mp3" />
            </audio>
            <div>
                <h2>Frase Filosófica</h2>
                <p><i>"Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe."</i><br />
                    — Oscar Wilde</p>
            </div>
        </div>
    );
};

export default MinhaRotina;
