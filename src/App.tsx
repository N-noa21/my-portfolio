import { Container, Box } from '@mui/material';

import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

import { type Project } from './types';


const myProjects: Project[] = [
  {
    title: 'ポートフォリオサイト',
    description: 'React, TypeScript, MUIを使用して作成したポートフォリオサイトです。このサイトです。',
    imageUrl: 'https://placehold.jp/300x200.png?text=Portfolio',
    projectUrl: '',
    //githubUrl: 'https://github.com/your-username/your-repo',
  },
  {
    title: 'Atcoder-Problem-Dojo',
    description: '学んだReact+TSで解いた問題の進捗を管理するアプリを作りました。まだ開発途中です。',
    imageUrl: './dojo-image.png',
    projectUrl: 'https://atcoder-problem.web.app/',
  },
  {
    title: 'ScrapBox',
    description: '自分が解いたすぐに理解できなかった問題、知識をメモしています。',
    imageUrl: './scrapbox.png',
    projectUrl: 'https://scrapbox.io/N-noa21-memo/',
  },
];

function App() {
  return (
    <>
      <Header />
      
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        
        <Box id="about" sx={{ py: 8 }}>
          <About />
        </Box>
        
        <Box id="skills" sx={{ py: 8 }}>
          <Skills/>
        </Box>
        
        <Projects projects={myProjects} />

      </Container>
      
      <Footer />
    </>
  );
}

export default App;