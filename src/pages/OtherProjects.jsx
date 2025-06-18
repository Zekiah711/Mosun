import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function OtherProjects() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main style={{ padding: '2rem', color: 'white', flex: 1 }}>
        <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Our Projects</h1>

       <ProjectCard
          title="Mosun"
          imageSrc="/images/lost-realms.jpg" // Replace with actual path
          description="Embark on a journey through the forgotten lands, where ancient technology and myth collide. Will you survive the Lost Realms?"
          
        />

        <ProjectCard
          title="Locus"
          imageSrc="/images/lost-realms.jpg" // Replace with actual path
          description="Embark on a journey through the forgotten lands, where ancient technology and myth collide. Will you survive the Lost Realms?"
          onClick={() => alert('Play Lost Realms!')}
        />

        <ProjectCard
          title="Locus"
          imageSrc="/images/eclipse-runner.jpg" // Replace with actual path
          description="Dash through shadowy dimensions and survive the eclipse in this fast-paced adventure."
          onClick={() => alert('Play Eclipse Runner!')}
        />
      </main>
      <Footer linkLabel="Back to Homepage" linkHref="/" />
    </div>
  );
}
