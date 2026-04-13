import '../../styles/Gallery.css';
import { GalleryProps } from '../../types';
import { useTranslation } from 'react-i18next';

function GallerySection({ title, images }: GalleryProps) {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {title && t(title) !== '' && (
          <div className="gallery-header">
            <h2>{t(title)}</h2>
          </div>
        )}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.src} 
                alt={t(image.alt)} 
                loading="lazy" 
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
