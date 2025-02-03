import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card } from '@mui/material';
import { motion } from 'framer-motion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';

// Dummy rewards data
const rewardsData = [
  {
    id: 1,
    title: '10% Off on Your Next Purchase',
    description: 'Use this code to get 10% off your next order.',
    code: 'REWARD10',
    icon: <LocalOfferIcon style={{ color: '#ff9800' }} />, 
    bgColor: '#FFEB3B'
  },
  {
    id: 2,
    title: 'Free Shipping on Orders Over $50',
    description: 'Enjoy free shipping on orders over $50.',
    code: 'FREESHIP',
    icon: <LocalOfferIcon style={{ color: '#ff9800' }} />, 
    bgColor: '#4CAF50'
  },
  {
    id: 3,
    title: '5% Cashback on Online Payment',
    description: 'Get 5% cashback when you pay online.',
    code: 'CASHBACK5',
    icon: <PaymentIcon style={{ color: '#4caf50' }} />, 
    bgColor: '#03A9F4'
  },
  {
    id: 4,
    title: '15% Off with Credit Card',
    description: 'Use your credit card to get 15% off.',
    code: 'CREDIT15',
    icon: <CreditCardIcon style={{ color: '#2196f3' }} />, 
    bgColor: '#E91E63'
  },
];

const RewardPage = () => {
  const [scratchCardResult, setScratchCardResult] = useState('');
  const [rewards, setRewards] = useState(rewardsData);

  const handleRevealReward = () => {
    const randomReward = ['Free Dessert', '20% Discount', 'Buy 1 Get 1 Free'];
    const randomResult = randomReward[Math.floor(Math.random() * randomReward.length)];
    setScratchCardResult(randomResult);
  };

  return (
    <Container maxWidth="lg" style={{ padding: '30px', textAlign: 'center' }}>
      <Typography variant="h4" style={{ marginBottom: '30px', color: 'white' }}>
        Rewards
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={3} key={reward.id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                style={{
                  padding: '30px',
                  backgroundColor: reward.bgColor,
                  borderRadius: '15px',
                  textAlign: 'center',
                  minHeight: '300px',
                }}
              >
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {reward.icon} {reward.title}
                </Typography>
                <Typography variant="body2" style={{ color: '#333', margin: '10px 0' }}>
                  {reward.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '12px', padding: '10px' }}
                >
                  Use Code: {reward.code}
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Scratch & Win Section */}
      <div style={{ marginTop: '50px' }}>
        <Typography variant="h5" style={{ marginBottom: '20px', color: 'white' }}>
          Scratch & Win
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleRevealReward}>
          Reveal Reward
        </Button>
        <Typography style={{ color: 'white', fontSize: '18px', marginTop: '10px' }}>
          {scratchCardResult ? `You won: ${scratchCardResult}` : 'Click to reveal your reward!'}
        </Typography>
      </div>
    </Container>
  );
};

export default RewardPage;
