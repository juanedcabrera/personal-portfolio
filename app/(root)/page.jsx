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
            image="/../public/uploads/thoughtful.png"
            link="https://www.thoughtful.day"
          />
        </div>
        <div className={`${styles.projectBlock2}`}>
          <ProjectBlock
            title="Calientes"
            description="The first and only Hot Ones API"
            image="/../public/uploads/caliente.png"
            link="https://calientes.herokuapp.com/"
          />
        </div>
        <div className={`${styles.projectBlock3}`}>
          <ProjectBlock
            title="Waldo's Great Escape"
            description="A moving Where's Waldo game with a storyline"
            image="/../public/uploads/waldo-redo.png"
            link="https://waldo-great-escape.herokuapp.com/"
          />
        </div>
        <NavBlock />
      </div>
      <Resume />
    </div>
  );
}

  
  export default App