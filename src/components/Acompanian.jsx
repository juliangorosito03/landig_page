import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Acompanian() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const logos = [
    { src: '/logo15.png', alt: 'DELL' },
    { src: '/logo8.png', alt: 'Microsoft' },
    { src: '/logo12.png', alt: 'Vmware' },
    { src: '/logo6.png', alt: 'Imperva' },
    { src: '/logo13.png', alt: 'IBM' },
    { src: '/logo16.png', alt: 'PiBi' },
    { src: '/logo5.png', alt: 'Paloalto' },
    { src: '/logo11.png', alt: 'Parkplace' },
    { src: '/logo4.png', alt: 'Kaspersky' },
    { src: '/logo7.png', alt: 'CISCO' },
    { src: '/logo9.png', alt: 'Quest' },
    { src: '/logo3.png', alt: 'Veeam' },
    { src: '/logo2.png', alt: 'Citrix' },
    { src: '/logo10.png', alt: 'Lumu' },
    { src: '/logo14.png', alt: 'Smartfense' },
  ];

  return (
    <section
      id="nos-acompanan"
      className="py-24 text-white font-[Space Grotesk]"
      style={{
        background:
          'linear-gradient(to right, #7704E0 0%, #00D6AE 30%, #23255A 70%, #6C6CFF 100%), rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="relative text-4xl font-bold text-[#00D6AE] drop-shadow-md inline-block pb-3 mx-auto"
          style={{ WebkitTextStroke: '0.5px black', width: 'fit-content' }}
          data-aos="fade-up"
        >
          Nos Acompañan
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#00D6AE] rounded-full"></span>
        </h2>

        <div className="mt-10 px-2 sm:px-4">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-2 py-4 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Acompanian;
