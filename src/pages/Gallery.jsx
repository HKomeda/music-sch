import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Music, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: '/images/lesson_scene_senior.png',
      alt: 'レッスン風景シニア',
      category: 'adult',
      title: 'レッスン風景シニア',
      description: '生徒さんと講師が笑顔でレッスンに取り組んでいます。'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて', icon: Camera }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">ギャラリー</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              当教室でのレッスン風景や生徒さんたちの様子をご覧ください。
              楽しく学ぶ雰囲気を感じていただけると思います。
            </p>
          </div>
        </div>
      </section>



      {/* Gallery Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer card-hover"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">該当する画像がありません</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white text-sm opacity-90">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* About Gallery Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              レッスンの<span className="text-orange-600">雰囲気</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              当教室では、生徒さん一人ひとりが楽しく学べる環境づくりを大切にしています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                楽しい学習環境
              </h3>
              <p className="text-gray-600">
                お子様から大人の方まで、リラックスして学べる温かい雰囲気を大切にしています。
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                個別指導
              </h3>
              <p className="text-gray-600">
                マンツーマンレッスンで、一人ひとりのペースに合わせた丁寧な指導を行います。
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                本格的な環境
              </h3>
              <p className="text-gray-600">
                グランピアノを使用した本格的なレッスン環境で、美しい音色を体感できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 orange-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            実際の雰囲気を体験してみませんか？
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            ギャラリーでご覧いただいた温かい雰囲気を、
            ぜひ無料体験レッスンで実際に感じてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Camera className="mr-2 w-5 h-5" />
              無料体験レッスン申込み
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              教室について詳しく
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

