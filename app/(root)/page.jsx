import Introduction from "@/components/Introduction/page"
import NavBlock from "@/components/NavBlock/page"
import ProjectBlock from "@/components/ProjectBlock/page"
import Resume from "@/components/Resume/page"

function App () {
    return (
      <div>
        <Introduction />
        <ProjectBlock 
          title="Project 1"
          description="This is a description of project 1"
          image="project1.png"
        />
        <ProjectBlock
          title="Project 2"
          description="This is a description of project 2"
          image="project2.png"
        />
        <ProjectBlock
          title="Project 3"
          description="This is a description of project 3"
          image="project3.png"
        />
        <NavBlock />
        <Resume />
      </div>
    )
  }
  
  export default App