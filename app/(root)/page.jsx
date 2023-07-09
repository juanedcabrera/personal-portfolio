import Introduction from "../../components/Introduction/page.jsx"
import NavBlock from "../../components/NavBlock/page.jsx"
import ProjectBlock from "../../components/ProjectBlock/page.jsx"
import Resume from "../../components/Resume/page.jsx"
import styles from './page.module.css';

function App() {
  return (
    <div>
      <Introduction />
      <div className={`${styles.gridContainer}`}>
        <div className={`${styles.projectBlock1}`}>
          <ProjectBlock
            title="Thoughtful.day"
            description="Journaling platform for self-reflection"
            image="https://res.cloudinary.com/dcbu6vxdi/image/upload/f_auto,q_auto/v1/portfolio/thoughtful"
            link="https://www.thoughtful.day"
          />
        </div>
        <div className={`${styles.projectBlock2}`}>
          <ProjectBlock
            title="Calientes"
            description="The first and only Hot Ones API"
            image="https://res.cloudinary.com/dcbu6vxdi/image/upload/f_auto,q_auto/v1/portfolio/caliente"
            link="https://calientes.app/"
          />
        </div>
        <div className={`${styles.projectBlock3}`}>
          <ProjectBlock
            title="Waldo's Great Escape"
            description="A moving Where's Waldo game with a storyline"
            image="https://res.cloudinary.com/dcbu6vxdi/image/upload/f_auto,q_auto/v1/portfolio/waldo-redo"
            link="https://juanedcabrera.github.io/Waldos-Great-Escape-Game/"
          />
        </div>
        <NavBlock />
      </div>
      <Resume />
    </div>
  );
}

  
  export default App