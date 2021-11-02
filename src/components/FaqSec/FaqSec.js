import React, { useState } from 'react';
import Header from './Header';
import Faq from './Faq';
import './FaqSec.css'

function FaqSec () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Why should I bring my child to see a pediatric dentist?',
      answer: 'Just as a pediatrician treats your child’s heath needs, a pediatric dentist is trained to treat your child’s oral needs. A pediatric dental specialist has received two to three additional years of training after dental school to specifically treat children.',
      open: true
    },
    {
      question: 'When will my baby start getting teeth?',
      answer: 'Teething, the process of baby (primary) teeth coming through the gums into the mouth, is variable among individual babies. In general, the first baby teeth that appear are usually the lower front teeth and they usually begin erupting between the age of six and eight months.',
      open: false
    },
    {
      question: 'At what age should I bring my child for the first visit?',
      answer: 'Age 1. The American Academy of Pediatrics and the American Dental Association recommend having your child’s first dental checkup at age 1 or when the first teeth erupt.',
      open: false
    },
    {
      question: 'How can I prepare my child for visiting the dentist?',
      answer: 'Play mimicking games with your child to “open wide.” Use a washcloth to wipe your child’s teeth after each feeding. Have your child see you actively participating in good oral habits like brushing and flossing. Most importantly, maintain a positive attitude. A child can notice apprehension and fear from a parent. If you or your child are apprehensive about his or her first visit, you can bring your child in for a pre-tour of our office. Also, show your child pictures of our office and staff on our website. Let your child know that it is important to keep his or her teeth and gums healthy, and that the doctor is there to help.',
      open: false
    },
    {
      question: 'Why are baby teeth important for my child?',
      answer: 'Primary or “baby” teeth are important for many reasons. Not only do they help children speak clearly and chew naturally, they also assist in forming a path that permanent teeth can follow when they are ready to erupt. It is also important to start introducing your child to good oral hygiene habits and regular dental check-ups when they are young, to insure a long life with good oral health.',
      open: false
    },
    {
      question: 'What are dental caries or dental decay?',
      answer: 'Dental caries (dental decay) is the most common chronic disease of childhood. If your child is diagnosed with cavities, a comprehensive treatment approach will be employed. Since the cause of the dental decay is bacterial in nature, restoring the cavities is not enough. The comprehensive approach must address controlling the bacteria and identifying the steps for prevention of future decay. If this is not done, your child will continue to develop new cavities in untreated areas. The age of your child is also very important. The younger your child is, the more challenging it is to control the caries process. Treatment options will also be based on your child’s age and level of cooperation.',
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
      <>
      <div className="link" id='faq'></div>
        <br />
        <br />
        <br />
          <div className="FagSec">
              <Header />
              <div className="sec__container">
                  <div className="faqs">
                  {faqs.map((faq, i) => (
                  <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
                  ))}
                  </div>
                  <div className="side__img hvr-wobble-vertical">
                      <img src="/img/toothbrush.jpeg" alt="Toothbrush" />
                  </div>
              </div>
          </div>
      </>
  );
}

export default FaqSec;
