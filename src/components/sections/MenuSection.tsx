import '../../styles/Menu.css'
import { MenuProps } from '../../types'
import { useTranslation } from 'react-i18next'

function MenuSection({ title, subtitle, backgroundImage, categories }: MenuProps) {
  const { t } = useTranslation()

  const bannerStyle = backgroundImage ? {
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
  } : {}

  return (
    <section id="menu" className="menu-section">
      <div className="menu-banner" style={bannerStyle}>
        <div className="container">
          <div className="menu-header">
            <h2>{t(title)}</h2>
            {subtitle && <p className="subtitle">{t(subtitle)}</p>}
          </div>
        </div>
      </div>

      <div className="container">

        <div className="menu-categories">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="menu-category">
              <div className="category-header">
                <h3 className="category-title">{t(category.title)}</h3>
              </div>
              <div className={`menu-items ${category.items.length === 1 ? 'single-item' : ''}`}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-header">
                      <h4 className="item-name">{t(item.name)}</h4>
                      {item.price && <span className="item-price">{item.price}</span>}
                    </div>
                    {item.description && (
                      <p className="item-description">{t(item.description)}</p>
                    )}
                    {item.tags && (
                      <div className="item-tags">
                        {item.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
