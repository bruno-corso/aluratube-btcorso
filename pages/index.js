import styled from "styled-components";
import config from "../config.json"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
         backgroundColor: "#FBF4EF" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>
                <Menu />
                <Header />
                <Timeline listas={config.playlists} />
            </div>
        </>
    );
}

export default HomePage

//   function Menu() {
//     return(
//         <div>
//             Menu
//         </div>
//     );
//   }


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        margin-top: 50px;
    }

  `;

function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(props) {
    const nomesListas = Object.keys(props.listas)
    //   console.log(nomesListas)
    return (
        <StyledTimeline>
            {nomesListas.map((nome_lista) => {
                console.log(nome_lista);
                const videos = props.listas[nome_lista];
                console.log(videos);
                return (
                    <section>
                        <h2>{nome_lista}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url} >
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}