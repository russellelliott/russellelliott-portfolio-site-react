import React from 'react';
import { projects } from '../data/projects';
import { Container, Typography, Box, Chip, Grid, Divider } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiDevpost, SiGoogleslides } from "react-icons/si";

// Utility function to format Date objects to Month YYYY
const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date object:', date);
    return ''; // or a fallback value
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const Home = () => {
  
  const renderLinkChip = (label, href, icon) => {
    if (!href) return null;
    return (
      <Chip
        key={label}
        label={label}
        icon={icon}
        component="a"
        href={href}
        target="_blank"
        rel="noopener"
        clickable
        size="small"
        variant="outlined"
        sx={{ borderRadius: '16px' }}
      />
    );
  };

  return (
    <Sidebar>
      <Container maxWidth="xl">
        <Box sx={{ mb: 6, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Hi, I'm <Box component="span" sx={{ fontWeight: 'bold' }}>Russell!</Box>
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
            Recent UCSC MS CS graduate seeking AI/ML engineering roles in the SF Bay Area. I focus on LLM systems, including pipelines, optimization, and edge deployment, with full-stack experience in React, TypeScript, and Python.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
        {projects.map((project) => {
            const startDate = formatDate(project.dates.start);
            const endDate = project.dates.end ? formatDate(project.dates.end) : startDate;

            return (
              <Grid item xs={12} md={4} key={project.slug}>
                <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '8px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Grid container spacing={2} direction="column" sx={{ height: '100%', flexWrap: 'nowrap' }}>
                    <Grid item>
                      <Typography variant="h5" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        {project.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary" sx={{display: 'block', mb: 1.5}}>
                        {startDate} - {endDate}
                      </Typography>
                    </Grid>
                    
                    <Grid item flexGrow={1}>
                       <Box sx={{mb: 2}}>
                         <Typography variant="body2" color="textSecondary">
                            {project.description}
                          </Typography>
                       </Box>
                    </Grid>

                    <Divider sx={{my: 1}} />

                    <Grid item>
                      <Box sx={{ mb: 2 }}>
                         <Typography variant="caption" color="textSecondary" sx={{fontWeight: 'bold', display: 'block', mb: 0.5}}>
                            Tech Stack
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {project.techStack.map((tech, index) => (
                              <Chip key={index} label={tech} size="small" sx={{ borderRadius: '16px' }} />
                            ))}
                          </Box>
                      </Box>
                    </Grid>

                    <Divider sx={{my: 1}} />

                    <Grid item>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {/* GitHub Links */}
                          {project.links.github && Object.entries(project.links.github).map(([label, url]) => 
                            renderLinkChip(label, url, <FaGithub />)
                          )}
                          
                          {/* Other Links */}
                          {renderLinkChip('Live Site', project.links.live, <CiGlobe />)}
                          {renderLinkChip('Video', project.links.video, <FaYoutube />)}
                          {renderLinkChip('Devpost', project.links.devpost, <SiDevpost />)}
                          {renderLinkChip('Slides', project.links.slides, <SiGoogleslides />)}
                        </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Sidebar>
  );
};

export default Home;
