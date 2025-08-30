import  { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';


export const About = () => {
  const aboutTexts = useMemo(() => [
    "N_noa21",
    "東京科学大学 融合理工学系 3年",
    "プログラミングと音楽ゲームが大好きです",
    "現在は競技プログラミングとBeatmania iidxに熱中しています",
    "アルゴリズムとデータサイエンスに興味があります"
  ],[]);

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (isTypingComplete) return;

    const currentText = aboutTexts[currentLineIndex];

    if (currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prevLines => {
          const newLines = [...prevLines];
          newLines[currentLineIndex] = currentText.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      if (currentLineIndex < aboutTexts.length - 1) {
        const lineDelay = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          setDisplayedLines(prevLines => [...prevLines, '']);
        }, 1000);
        return () => clearTimeout(lineDelay);
      } else {
        setIsTypingComplete(true);
      }
    }
  }, [currentCharIndex, currentLineIndex, isTypingComplete, aboutTexts]);


  return (
    <Box id="about" sx={{ py: 8, textAlign: 'center' }}>
      
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 2
      }}>
        <Typography variant="h4" component="h2">
          About
        </Typography>
      </Box>

      <Avatar
        alt="N_noa21"
        src="/icon.JPG"
        sx={{ width: 150, height: 150, mx: 'auto', mt: 4, mb: 2 }}
      />

      <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
        {displayedLines.map((line, index) => (
          <Typography variant={index === 0 ? 'h5' : 'body1'} key={index} sx={{ minHeight: '1.5em' }}>
            {line}
            {index === currentLineIndex && !isTypingComplete && currentCharIndex <= aboutTexts[currentLineIndex].length && (
              <Box 
                component="span" 
                sx={{ 
                  animation: 'blink 1s step-end infinite',
                  '@keyframes blink': {
                    'from, to': { opacity: 0 },
                    '50%': { opacity: 1 },
                  }
                }}
              >
                |
              </Box>
            )}
          </Typography>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <IconButton
          aria-label="X"
          component="a"
          href="https://x.com/N_noa21"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text.primary',
            '&:hover': {
              transform: 'scale(1.2)',
              color: 'text.secondary',
            },
            transition: 'transform 0.2s',
          }}
        >
          <XIcon sx={{ fontSize: 40 }} />
        </IconButton>

        <IconButton
          aria-label="GitHub"
          component="a"
          href="https://github.com/N-noa21"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text.primary',
            '&:hover': {
              transform: 'scale(1.2)',
              color: 'text.secondary',
            },
            transition: 'transform 0.2s',
          }}
        >
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};