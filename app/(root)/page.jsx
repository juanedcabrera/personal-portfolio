import Introduction from "@/components/Introduction/page"
import NavBlock from "@/components/NavBlock/page"
import ProjectBlock from "@/components/ProjectBlock/page"
import Resume from "@/components/Resume/page"
import styles from './page.module.css';

function App () {
    return (
      <div>
        <Introduction />
        <div className={`${styles.gridContainer}`}>
        <ProjectBlock 
          title="Thoughtful.day"
          description="Journaling platform for self-reflection"
          image="https://github.com/juanedcabrera/thoughtful.day/raw/main/public/images/homepage.png"
        />
        <ProjectBlock
          title="Calientes"
          description="The first and only Hot Ones API"
          image="https://github.com/juanedcabrera/calientes/raw/main/assets/homepage.png"
        />
        <ProjectBlock
          title="Waldo's Great Escape"
          description="A moving Where's Waldo game with a storyline"
          image="https://github.com/juanedcabrera/Waldos-Great-Escape-Game/raw/main/start.png"
        />
        <NavBlock />
        </div>
        <Resume />
      </div>
    )
  }
  
  export default App