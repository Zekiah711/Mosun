import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import locusImage from '../assets/LOGO_2404STUDIOS_SOCIAL/locusimg.jpg';
import MosunImage from '../assets/LOGO_2404STUDIOS_SOCIAL/mosun_logo.png';
import PitImage from '../assets/LOGO_2404STUDIOS_SOCIAL/pitrushlogo.png';


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
          comingSoon={true}
        />

       <ProjectCard
          title="Pit Rush"
          imageSrc={PitImage}
          description="Pit Rush is a fast-paced multiplayer capture-item experience that features a breathtaking Outer-World, 
          Mars inspired environment.
           Players are trapped in a massive pit, where they must race, fight, and outmaneuver one 
           another to secure limited items to win. This is a free for all experience that
           allows up to 16 players to play. The objective is simple— Capture all items,
          survive the chaos, and be the one to escape."
          playLink="https://www.fortnite.com/@aceblor/1806-4646-7042"
       />

        <ProjectCard
          title="Locus Shooter"
          imageSrc={locusImage} // Replace with actual path
          description="Locus is a fast-paced 3D aerial shooter where you pilot a powerful plane through intense skies. Dodge incoming fire, engage enemies, 
          and clear missions with precision. Pure adrenaline. 
          Pure action. No excuses"
          comingSoon={true}
        />
      </main>
      <Footer linkLabel="Back to Homepage" linkHref="/" />
    </div>
  );
}
