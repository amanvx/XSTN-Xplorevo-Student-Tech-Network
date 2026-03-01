/**
 * pages/HomePage.jsx
 * -------------------
 * Assembles all 9 home page sections in order.
 * heroVisible prop is passed from App after preloader completes.
 */
import Hero         from '@components/sections/Hero';
import About        from '@components/sections/About';
import Solutions    from '@components/sections/Solutions';
import Trust        from '@components/sections/Trust';
import Advantage    from '@components/sections/Advantage';
import Projects     from '@components/sections/Projects';
import Testimonials from '@components/sections/Testimonials';
import { CommunityCTA, FinalCTA } from '@components/sections/CTASections';

export default function HomePage({ heroVisible }) {
  return (
    <>
      <Hero         visible={heroVisible} />
      <About        />
      <Solutions    />
      <Trust        />
      <Advantage    />
      <Projects     />
      <Testimonials />
      <CommunityCTA />
      <FinalCTA     />
    </>
  );
}
