import React from 'react';
import { projects } from '../data/projects';
import { Container, List, ListItem, Typography, Box, Chip, Grid } from '@mui/material';
import Navbar from '../components/Navbar'; // Ensure correct casing for component imports

// Utility function to format Date objects to Month YYYY
const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date object:', date);
    return ''; // or a fallback value
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h1" gutterBottom>
          Projects
        </Typography>
        <List>
          {projects.map((project) => {
            const startDate = formatDate(project.dates.start);
            const endDate = project.dates.end ? formatDate(project.dates.end) : startDate;

            return (
              <ListItem key={project.slug} sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <a href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography variant="h2" component="span" sx={{ color: 'primary.main' }}>
                        {project.name}
                      </Typography>
                    </a>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary">
                      <strong>Dates:</strong> {startDate} - {endDate}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Tech Stack:</strong>
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {project.techStack.map((tech, index) => (
                        <Chip key={index} label={tech} sx={{ borderRadius: '16px' }} />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
};

export default Home;
