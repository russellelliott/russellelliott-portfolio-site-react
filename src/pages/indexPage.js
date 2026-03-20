import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Container, Typography, Box, Chip, Divider, Tabs, Tab, Button, MobileStepper, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiDevpost, SiGoogleslides } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';

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
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setActiveStep(0); // Reset stepper when tab changes
  };

  const categories = ['Current', 'Recent', 'Hackathon'];
  const currentOrder = [
    'apple-mcp-notes',
    'job-application-tracker',
    'luma-event-aggregation',
    'elliott-home-organization'
  ];

  const filteredProjects = projects
    .filter((project) => project.category === categories[activeTab])
    .sort((a, b) => {
        if (categories[activeTab] === 'Current') {
            const indexA = currentOrder.indexOf(a.slug);
            const indexB = currentOrder.indexOf(b.slug);
            
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
        }

        const dateA = a.dates.start instanceof Date ? a.dates.start : new Date(0);
        const dateB = b.dates.start instanceof Date ? b.dates.start : new Date(0);
        return dateB - dateA;
    });

  const maxSteps = filteredProjects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

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
            <li>Building full-stack AI applications with a focus on LLM integration and optimization.</li>
            <li>Attending AI/tech networking events and meetups in the SF Bay Area.</li>
            <li>Actively seeking engineering roles in the SF Bay Area.</li>
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

        {/* Projects Carousel */}
        {maxSteps > 0 && (
          <Box sx={{ flexGrow: 1, maxWidth: 800, mx: 'auto' }}>
             <Paper
                elevation={3}
                sx={{
                  bgcolor: 'background.default',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2
                }}
              >
              <Box sx={{ display: 'grid' }}>
              {projects.filter((p) => categories.includes(p.category)).map((project) => {
                const isActive = filteredProjects[activeStep] === project;
                const startDate = formatDate(project.dates.start);
                const endDate = project.dates.end ? formatDate(project.dates.end) : startDate;
                const dateDisplay = startDate === endDate ? startDate : `${startDate} - ${endDate}`;

                return (
                  <Box
                    key={project.name}
                    sx={{
                        gridArea: '1 / 1',
                        opacity: isActive ? 1 : 0,
                        visibility: isActive ? 'visible' : 'hidden',
                        width: '100%',
                        p: 3,
                        display: 'flex', 
                        flexDirection: 'column',
                        height: '100%',
                        pointerEvents: isActive ? 'auto' : 'none',
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                    aria-hidden={!isActive}
                  >
                     <Box>
                        <Typography variant="h5" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            {project.name}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" sx={{display: 'block', mb: 1.5}}>
                            {dateDisplay}
                        </Typography>
                     </Box>

                     <Box sx={{mb: 2, flexGrow: 1}}>
                        <Typography variant="body1" color="textSecondary">
                            {project.description}
                        </Typography>
                     </Box>

                     <Box>
                        <Divider sx={{my: 2}} />

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

                        <Divider sx={{my: 2}} />

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
                     </Box>
                  </Box>
                )
              })}
              </Box>
             </Paper>
             
             {/* Navigation Stepper */}
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{ 
                  bgcolor: 'transparent',
                  mt: 1,
                  '& .MuiMobileStepper-dot': {
                      backgroundColor: 'rgba(0, 0, 0, 0.26)'
                  },
                  '& .MuiMobileStepper-dotActive': {
                      backgroundColor: 'primary.main'
                  } 
               }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        )}
        
        {maxSteps === 0 && (
             <Typography variant="body1" align="center" sx={{ mt: 4, mb: 4, color: 'text.secondary' }}>
                No projects found in this category.
            </Typography>
        )}

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
