import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Box >
            <Typography variant="body2"  align='center' gutterBottom >
                © Copyright 2024
            </Typography>
        </Box>
    </footer>
  );
};

export default Footer;