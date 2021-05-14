import Layout from '../components/Layout';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Index() {
  return (
    <Layout>
      <div>
        <Home />
        <About />
        <Skills />
      </div>
    </Layout>
  );
}
