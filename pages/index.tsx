import React, { useState, useEffect} from 'react';
import SplashScreen from './SplashScreen'; // Import the splash screen component
import FullscreenMenu from './components/FullscreenMenu';
import Header from './components/Header';

const Homepage: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false); // Update loading state after delay
    }, 4000); // Adjust the timeout value as needed
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  type Content = {
    [key: string]: any;
  };

  type ServiceItem = {
    [key: string]: any;
  };
  
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    fetch("http://localhost:9872/data")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: Content) => {
        setContent(data);
      })
      .catch(error => {
        console.error('Error fetching content:', error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <div className={`homepage bg-gray-100 min-h-screen flex flex-col ${isScrolled ? 'scrolled' : ''}`}>

            <button onClick={toggleMenu} className="fixed top-0 right-0 m-4 text-6xl z-50">☰</button>

            <FullscreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />
            
            {/* Pass content as prop to Header component */}
            <Header content={content} />

            <div className="container mx-auto flex-grow py-16 px-8">
              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">{content?.storePromotion?.title}</h2>
                <p className="text-lg">{content?.storePromotion?.description}</p>
              </section>

              <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8">{content?.services.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {content?.services.items.map((item: ServiceItem, index: number) => ( // Explicitly define type for 'item'
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">{content?.about.title}</h2>
                <p className="text-lg">{content?.about.description}</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold mb-8">{content?.contact.title}</h2>
                <p className="text-lg">{content?.contact.description}</p>
                <p className="text-lg">{content?.contact.email}</p>
                <p className="text-lg">{content?.contact.phone}</p>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
