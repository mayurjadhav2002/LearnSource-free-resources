'use client';

import { Accordion } from 'flowbite-react';

export default function Ads() {

  const FAQ = [
    {
      question: 'Is it totally free?',
      answer: "<p>🎉 Yes, it's 100% free! No hidden fees, no strings attached. Grab those awesome deals without breaking the bank!</p>"
    },
    {
      question: 'How to avail this offer?',
      answer: "<p>🚀 It's super easy! Just browse our website, find the software giveaway or coupon you like, click on it, and follow the instructions provided. It's like getting the golden ticket to the software wonderland! 🌟</p>"
    },
    {
      question: 'How are you giving away software for free?',
      answer: "<p>🤫 Ah, that's the magic trick! We partner with software companies who want to spread the love for their products. They give us exclusive deals to share with you, our fantastic users! It's a win-win for everyone. 🤝</p>"
    },
    {
      question: 'Is there any limit on downloading?',
      answer: "<p>📥 Nope, download to your heart's content! We believe in unlimited access to fantastic software. Get your fill, and then some! 💻</p>"
    },
    {
      question: 'Is it affiliated or promotional software?',
      answer: "<p>🌐 You got it! We offer both affiliated and promotional software. Some deals are collaborations with our partners, while others are promotional giveaways. We've got a mix of the best deals out there! 🌈</p>"
    },

    {
      question: 'Do I need to create an account to access the deals?',
      answer: "<p>🗝️ Nope, no account needed! We believe in making things as hassle-free as possible. Just come in, grab the deals, and enjoy. No login required! 🚫🔐</p>"
    },
    {
      question: 'What happens if I encounter issues with a coupon or giveaway?',
      answer: "<p>🆘 Don't worry, we've got your back! If you run into any problems, reach out to our friendly support team. We'll work our magic to help you get the deal you deserve! 🧙‍♂️📞</p>"
    },
    {
      question: 'Are these deals available internationally?',
      answer: "<p>🌎 Yes, most of our deals are available globally. However, some deals may have regional restrictions, so be sure to check the details before snagging your treasure! 🌍🌐</p>"
    },
    {
      question: 'How often do you update your deals and coupons?',
      answer: "<p>⏰ We're always on the hunt for the latest and greatest deals. We update our offerings regularly to keep you stocked with fresh, hot discounts and giveaways! 🔄🔥</p>"
    },
    {
      question: 'Can I suggest a software or company for your website to feature?',
      answer: "<p>🤔 Absolutely! We love hearing from our community. If there's a software or company you'd like to see on our site, drop us a suggestion. We'll do our best to make it happen! 🗣️🤝</p>"
    },
    {
      question: 'How do you obtain the giveaway data?',
      answer: "<p>🕵️‍♂️ It's a secret sauce! Our team of dedicated hunters scours the web for the best deals and giveaways. We scrap the data from different website (such as from websites like WinningPC, GrabOn, and Couponsguru) to bring you exclusive offers. It's like having a treasure map to the digital world! 🗺️💰</p>"
    }
  ];
  
  // You can now use this FAQ array to display questions and answers on your website.  

  return (
    <Accordion className='mx-auto w-full'>

      {FAQ.map((faq, index)=>
      <Accordion.Panel key={index}>
        <Accordion.Title className='text-sm text-bold py-1'>
          <p>

         {faq.question}

          </p>
        </Accordion.Title>
        <Accordion.Content>
          <p  dangerouslySetInnerHTML={{__html: faq.answer}} className="mb-2 text-gray-500 dark:text-gray-400">
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
    )}
    </Accordion>
  )
}


