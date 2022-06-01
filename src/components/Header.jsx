
import '../App.css';

const Header = () => {
    return(
        <>
            <div className="container-fluid" id='header'>
                <h1 id='name'>Farley <span className="material-icons-outlined" id='lastname'>Leite</span></h1>
                <div id='social-line'>
                    <a href="https://github.com/farleyaAraujoLeite" target="_blank">
                        <img width={30} src="./src/img/github.svg" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/farley-leite-075085134/" target="_blank">
                        <img width={30} src="./src/img/linkedin.svg" alt="linkedin" />
                    </a>
                    
                </div>
            </div>
        </>

        
    )
}

export default Header;