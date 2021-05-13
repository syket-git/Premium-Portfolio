import Layout from '../components/Layout';
import Home from '../components/Home';
import About from '../components/About';

export default function Index() {
  return (
    <Layout>
      <div>
        <Home />
        <About />
      </div>
    </Layout>
  );
}
