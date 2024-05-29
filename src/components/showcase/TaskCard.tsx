import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import CodeRounded from '@mui/icons-material/CodeRounded';
import ScheduleRounded from '@mui/icons-material/ScheduleRounded';

export default function TaskCard() {
  return (
    <Fade in timeout={700}>
      <Card
        data-mui-color-scheme="dark"
        sx={{
          minWidth: 280,
          maxWidth: 360,
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          background:
            'linear-gradient(180deg, var(--muidocs-palette-primary-600) 0%, var(--muidocs-palette-primary-700) 100%)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Box sx={{ my: 'auto' }}>
          <Typography fontSize={18} component="div" fontWeight="semiBold" sx={{ lineHeight: 1.4 }}>
          Visionary Blockchain Innovator and Founder of EpicChain Labs
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, py: 1, alignItems: 'center' }}>
          <Box
            sx={{
              p: 0.5,
              bgcolor: 'primary.400',
              border: '1px solid',
              borderColor: 'primary.100',
              borderRadius: 99,
            }}
          >
            <Avatar
              slotProps={{ img: { 'aria-labelledby': 'demo-task-card-assignee-name' } }}
              src="/static/images/avatar/2.jpg"
            />
          </Box>
          <div>
            <Typography color="primary.100" fontWeight="semiBold" fontSize={12}>
            Blockchain Science Expert, and Computer Programmer
            </Typography>
            <Typography id="demo-task-card-assignee-name" variant="body2" fontWeight="semiBold">
              xmoohad
            </Typography>
          </div>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgress
            aria-label="Progress"
            variant="determinate"
            value={91}
            sx={{
              flexGrow: 1,
              borderRadius: 10,
              backgroundColor: 'primary.400',
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 10,
                backgroundColor: '#fff',
              },
            }}
          />
        </Box>
      </Card>
    </Fade>
  );
}
