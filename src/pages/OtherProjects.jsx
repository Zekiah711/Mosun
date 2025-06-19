import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import locusImage from '../assets/LOGO_2404STUDIOS_SOCIAL/locusimg.jpg';
import MosunImage from '../assets/LOGO_2404STUDIOS_SOCIAL/mosun_logo.png';



export default function OtherProjects() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main style={{ padding: '2rem', color: 'white', flex: 1 }}>
        <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Our Projects</h1>

       <ProjectCard
          title="Mosun"
          imageSrc={MosunImage}
          description="Step into the world of Mosun, a myth-infused adventure where power, legacy, and the unknown collide. Guided by destiny,
           you’ll navigate through enchanted realms and awaken long-lost legends. 
           Will you answer the call?"
        />

       <ProjectCard
          title="Locus"
          imageSrc={locusImage}
          description="Locus is a fast-paced 3D aerial shooter where you pilot a powerful plane through intense skies. Dodge incoming fire, engage enemies, 
          and clear missions with precision. Pure adrenaline. 
          Pure action. No excuses"
          onClick={() => alert('Play Locus!')}
       />

        <ProjectCard
          title="Eclipse Runner"
          imageSrc="/images/eclipse-runner.jpg" // Replace with actual path
          description="Eclipse Runner throws you into a mysterious world cloaked in twilight. Fight your way through dangerous terrain, shadow beasts, 
          and shifting dimensions in a gripping combat-filled adventure. 
          Your speed and skill are your only hope."
          onClick={() => alert('Play Eclipse Runner!')}
        />
      </main>
      <Footer linkLabel="Back to Homepage" linkHref="/" />
    </div>
  );
}
