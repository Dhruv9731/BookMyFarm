import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com/yourpage',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/ratan_farm_?igsh=MWl4dmRtbTkzMWU4bw==',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/yourpage',
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/8511815615',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <div className="bg-transparent">
      <h2 className="mb-3">Connect With Us</h2>
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-colors duration-300 ${social.color} transform hover:scale-110`}
            aria-label={`Follow us on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;