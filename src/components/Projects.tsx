import { type Project } from '../types';
import { 
  Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Box 
} from '@mui/material';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {project.title}
                </Typography>
                <Typography>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.projectUrl} target="_blank">
                  View
                </Button>
                {project.githubUrl && (
                  <Button size="small" href={project.githubUrl} target="_blank">
                    GitHub
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};