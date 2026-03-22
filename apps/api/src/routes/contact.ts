import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, message, industry } = req.body;

  console.log('Received contact form submission:', { name, email, message, industry });

  // TODO: Integrate with SMTP or CRM service (SendGrid/ElasticEmail)
  
  try {
    // Simulate async work
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    });
  }
});

export default router;
