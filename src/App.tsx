import { AppProviders } from './providers/AppProviders';
import './App.css';

import { Greet } from './components/01.basic-component/greet';
import { JobApplicationForm } from './components/02.single-element-queries/job-application-form';
import { Skills } from './components/03.multi-element-queries/skills';
import { Navbar } from './components/04.not-rendered-element-queries/navbar';
import { Content } from './components/05.dynamic-delayed-element-queries/content';
import { Footer } from './components/06.debugging/footer';
import { Counter } from './components/07.user-interactions-mouse/counter';
import { Input } from '@mui/material';
import { DarkMode } from './components/09.provider-testing/dark-mode';

function App() {
  return (
    <AppProviders>
      <Greet />
      <JobApplicationForm />
      <Skills skills={['React', 'TypeScript', 'Jest']} />
      <Navbar />
      <Content />
      <Footer />
      <Counter />
      <Input />
      <DarkMode />
    </AppProviders>
  );
}

export default App;
