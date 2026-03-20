import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Container, Typography, Box, Chip, Grid, Divider, Tabs, Tab, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiDevpost, SiGoogleslides } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

// Utility function to format Date objects to Month YYYY
const formatDate = (date) => {
  if (date === 'Ongoing') return 'Ongoing';
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date object:', date);
    return ''; // or a fallback value
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categories = ['Current', 'Recent', 'Hackathon'];
  const filteredProjects = projects
    .filter((project) => project.category === categories[activeTab])
    .sort((a, b) => {
        const dateA = a.dates.start instanceof Date ? a.dates.start : new Date(0);
        const dateB = b.dates.start instanceof Date ? b.dates.start : new Date(0);
        return dateB - dateA;
    });

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

          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3 }}>
            Currently:
          </Typography>
          <Box component="ul" sx={{ pl: 2, typography: 'body1', color: 'text.secondary' }}>
            <li>Working on ... Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Building ... Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Learning ... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>Languages:</Box> TypeScript, JavaScript, Python, SQL, PHP, Swift<br />
            <Box component="span" sx={{ fontWeight: 'bold' }}>AI/ML Tools:</Box> TensorFlow, PyTorch, MLX, Hugging Face, LangChain, NumPy, Pandas<br />
            <Box component="span" sx={{ fontWeight: 'bold' }}>LLMs I Use:</Box> Gemini, Perplexity, Claude<br />
            <Box component="span" sx={{ fontWeight: 'bold' }}>Web Development:</Box> React, Next.js, Redux, FastAPI, Flask, RESTful & GraphQL APIs, OpenAPI<br />
            <Box component="span" sx={{ fontWeight: 'bold' }}>Databases:</Box> PostgreSQL, MySQL, Firebase, MongoDB, LanceDB, Pinecone<br />
            <Box component="span" sx={{ fontWeight: 'bold' }}>DevOps & Environments:</Box> AWS (EC2/S3), GCP, Docker, GitHub, GitLab, WebSockets, Cypress, Jest
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="project categories">
            <Tab label="Current" />
            <Tab label="Recent" />
            <Tab label="Hackathon" />
          </Tabs>
        </Box>

        <Grid container spacing={3}>
        {filteredProjects.map((project) => {
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
                            {project.techStack && project.techStack.map((tech, index) => (
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

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
            <Button variant="outlined" size="large" onClick={() => navigate('/projects')}>
                Show All Projects
            </Button>
        </Box>
      </Container>
    </Sidebar>
  );
};

export default Home;
