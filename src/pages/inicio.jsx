import photeInicio from '../assets/image/img_perfil.png';
import iconReact from '../assets/icons/react.png';
import iconNode from '../assets/icons/Node JS.png';
import iconJavaScript from '../assets/icons/js.png';
import iconHtml from '../assets/icons/html.png';
import iconCss from '../assets/icons/css.png';
import iconSql from '../assets/icons/sql.png';
import iconGit from '../assets/icons/git.png';
import iconGitHub from '../assets/icons/github.png';



const InicioPage = () => {

    const DownLoadCV = () => {
        window.open("../../public/documents/CvDesarrolladorSoftwareKevinDavidZambranoGalvis.pdf","_blank","");
    }

   

    return(
        <>
            <section className="sect-inicio">
          
                <article className="art-container-1">
                    <figure className="photo-inicio">
                        <img src={photeInicio} alt="Dev JR Kevin Galvis" />
                    </figure>
                    <button className='btn-downloadCV' onClick={DownLoadCV}>Descargar CV</button>
                </article>
               
                <article className="art-container-2">
                    <h2>Kevin David Zambrano Galvis</h2>
                    <h3>Desarrollador De Software JR</h3>
                    <figure className='icon-skills'>
                        <img src={iconReact} alt="React JS Dev Kevin Galvis" />
                        <img src={iconNode} alt="React JS Dev Kevin Galvis" />
                        <img src={iconJavaScript} alt="React JS Dev Kevin Galvis" />
                        <img src={iconSql} alt="React JS Dev Kevin Galvis" />
                        <img src={iconHtml} alt="React JS Dev Kevin Galvis" />
                        <img src={iconCss} alt="React JS Dev Kevin Galvis" />
                        <img src={iconGit} alt="React JS Dev Kevin Galvis" />
                        <img src={iconGitHub} alt="React JS Dev Kevin Galvis" />
                    </figure>
                    <button className='btn-downloadCV btn-downloadCV2' onClick={DownLoadCV}>Descargar CV</button>


                </article>

             

            </section>

           
        
        </>
    );
}

export default InicioPage;