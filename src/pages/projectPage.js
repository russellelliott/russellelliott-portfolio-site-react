// src/pages/ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import { Container, Typography, Box, Chip } from '@mui/material';

// Array of month names to avoid locale/timezone issues with Date methods
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Uses UTC date components to avoid timezone conversion issues
const formatDate = (date) => {
  if (date === "Ongoing") return "Ongoing";
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date object:', date);
    return '';
  }

  const month = MONTH_NAMES[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  
  return `${month} ${year}`;
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const startDate = formatDate(project.dates.start);
  const endDate = project.dates.end ? formatDate(project.dates.end) : startDate;

  const linkItems = [
    { href: project.links.github, label: 'GitHub' },
    { href: project.links.githubFrontend, label: 'GitHub (Frontend)' },
    { href: project.links.githubBackend, label: 'GitHub (Backend)' },
    { href: project.links.devpost, label: 'Devpost' },
    { href: project.links.video, label: 'Video' },
    { href: project.links.web, label: 'Web' },
  ].filter(item => item.href);

  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h3" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2" paragraph>
          {project.description}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Dates
        </Typography>
        <Typography variant="body2" paragraph>
          {startDate} - {endDate}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{ borderRadius: '16px', backgroundColor: '#e0e0e0', color: '#000' }}
            />
          ))}
        </Box>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Links
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {linkItems.map((linkItem, index) => (
            <Chip
              key={index}
              label={linkItem.label}
              component="a"
              href={linkItem.href}
              target="_blank"
              rel="noopener"
              clickable
              sx={{ 
                borderRadius: '16px', 
                backgroundColor: '#1976d2', 
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#115293' 
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default ProjectPage;
