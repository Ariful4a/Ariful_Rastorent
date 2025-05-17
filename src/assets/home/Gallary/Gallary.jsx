import gallary1 from '../../../assets/home/gallary-3.jpeg';
import gallary2 from '../../../assets/home/guides.jpeg';
import gallary3 from '../../../assets/home/guides-2.jpeg';
import gallary4 from '../../../assets/home/pest-3.jpeg';
import gallary5 from '../../../assets/home/pexels-phouy-sonedala-53440070-7761601.jpg';
import gallary6 from '../../../assets/home/guides-4.jpeg';

const galleryImages = [
  { src: gallary1, alt: 'Photo-1' },
  { src: gallary2, alt: 'Photo-2' },
  { src: gallary3, alt: 'Photo-3' },
  { src: gallary4, alt: 'Photo-4' },
  { src: gallary5, alt: 'Photo-5' },
  { src: gallary6, alt: 'Photo-6' },
];


const GallerySection = () => {
  return (
    <section className="bg-gradient-to-br from-[#00bf8f] to-[#001510] py-12">
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-10">Gallery Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="hover:scale-95 transition duration-500 ease-in-out overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-[245px] rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hover:bg-[#00000085] transition duration-500">
                  <h3 className="text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition duration-500">
                    Jersey
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
