import React, { useMemo } from 'react';
import { projects } from '../data/projects';
import { Container, Typography, Box, Grid, Button, Chip, Divider } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiDevpost, SiGoogleslides } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Utility function to format Date objects to Month YYYY
const formatDate = (date) => {
  if (date === "Ongoing") return "Ongoing";
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date object:', date);
    return ''; // or a fallback value
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const AllProjectsPage = () => {
    const navigate = useNavigate();

    const sortedProjects = useMemo(() => {
        return [...projects].sort((a, b) => {
            const dateA = a.dates.start instanceof Date ? a.dates.start : new Date(0);
            const dateB = b.dates.start instanceof Date ? b.dates.start : new Date(0);
            return dateB - dateA; // Descending order
        });
    }, []);

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
        sx={{ borderRadius: '16px', mr: 1, mb: 1 }}
      />
    );
  };

  return (
    <Sidebar>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
            <Button 
                startIcon={<ArrowBackIcon />} 
                onClick={() => navigate('/')}
                sx={{ mr: 2 }}
            >
                Back
            </Button>
            <Typography variant="h3" component="h1">
            All Projects
            </Typography>
        </Box>
        
        <Grid container spacing={3}>
        {sortedProjects.map((project) => {
            const startDate = formatDate(project.dates.start);
            const endDate = project.dates.end ? formatDate(project.dates.end) : startDate;
            const dateDisplay = startDate === endDate ? startDate : `${startDate} - ${endDate}`;

            return (
              <Grid item xs={12} md={4} key={project.slug}>
                <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '8px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 3 } }}>
                  <Grid container spacing={2} direction="column" sx={{ height: '100%', flexWrap: 'nowrap' }}>
                    <Grid item>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            {project.name}
                        </Typography>
                         {project.category && (
                            <Chip label={project.category} size="small" color="primary" variant="outlined" />
                        )}
                      </Box>
                      <Typography variant="caption" color="textSecondary" sx={{display: 'block', mb: 1.5}}>
                        {dateDisplay}
                      </Typography>
                    </Grid>
                    
                    <Grid item flexGrow={1}>
                       <Box sx={{mb: 2}}>
                         <Typography variant="body2" color="textSecondary">
                            {project.description}
                          </Typography>
                       </Box>
                        {project.highlights && (
                            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                            {project.highlights.slice(0, 2).map((highlight, index) => (
                                <Typography component="li" variant="caption" key={index} color="textSecondary">
                                {highlight}
                                </Typography>
                            ))}
                            </Box>
                        )}
                    </Grid>
                     
                    <Divider sx={{my: 1}} />

                     <Grid item>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                                {project.techStack && project.techStack.map((tech) => (
                                    <Chip key={tech} label={tech} size="small" sx={{ fontSize: '0.7rem' }} />
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {project.links.github && Object.entries(project.links.github).map(([key, value]) => (
                                renderLinkChip(key === "Source Code" ? "GitHub" : key, value, <FaGithub />)
                            ))}
                            {project.links.live && renderLinkChip("Live Demo", project.links.live, <CiGlobe />)}
                            {project.links.devpost && renderLinkChip("Devpost", project.links.devpost, <SiDevpost />)}
                             {project.links.video && renderLinkChip("Video", project.links.video, <FaYoutube />)}
                             {project.links.slides && renderLinkChip("Slides", project.links.slides, <SiGoogleslides />)}
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

export default AllProjectsPage;
