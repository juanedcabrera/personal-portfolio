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
          <div className={`${styles.projectBlock1}`}>
        <ProjectBlock 
          title="Thoughtful.day"
          description="Journaling platform for self-reflection"
          image=""
          />
          </div>
          <div className={`${styles.projectBlock2}`}>
        <ProjectBlock
          title="Calientes"
          description="The first and only Hot Ones API"
          image=""
          />
          </div>
          <div className={`${styles.projectBlock3}`}>
        <ProjectBlock
          title="Waldo's Great Escape"
          description="A moving Where's Waldo game with a storyline"
          image=""
          />
          </div>
        <NavBlock />
        </div>
        <Resume />
      </div>
    )
  }
  
  export default App