import React from 'react';
import { Star, Heart, Music, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: '/images/student-voice-1.jpg',
      content: `決して子供へのおしつけでない先生方の指導がとても良いと感じます。
それぞれの子供の長所、短所を見極め、それに合った指導があるからこそ長く続けられていると思います。とにかく先生方のエネルギッシュなやる気にはいつも感動します。
やはり発表会での出来栄えは先生方の助言・指導が子供と一緒に頑張ろう！！というチームワークの良さがあっその事でしょうか。
ここには書ききれない位、毎回このピアノ教室に出会えて良かったと感謝しています。
先生方もこれからももっともっと素敵なピアノを教えて下さい！！`,
      category: '保護者の方'
    },
    {
      id: 2,
      image: '/images/student-voice-2.jpg',
      content: `子供が先生の事が大好きで安心してレッスンをお任せできます。興味を持つようにレッスンを工夫して下さったり、自宅での練習方法を細かくアドバイスしてくださるので低年齢で始めましたが、上達が早くとっても嬉しく思っております。
思っていたよりレッスン継続は本当にありがたいです。

子供が楽しんで通っているので、安心して先生にお任せしております。
合格するとシールがもらえるのも、かなり励みになっているようです。
新しい曲も、先生が一緒に譜読みけたり、弾いたりして下さったりなので、家での練習も分かりやすく、楽しいようです。

兄妹と時間を続けて同じ先生に御指導いただける事で有難く思っています。丁寧にやさしく御指導いただける事で特に兄の方は、弾く楽しさを感じ続けてこられたのだと思います。有難うございます。

歌が大好きで、最近は嵐の「アオゾラペダル」もレッスンでもご指導いただき、家では弾き語りをしています。これからも宜しくお願い致します。

子供が先生に会えることを毎日楽しみにしています。
子供の個性に合わせた御指導に感謝いたします。`,
      category: '保護者の方'
    }
  ];

  const highlights = [
    {
      icon: Heart,
      title: '個性を大切にした指導',
      description: '一人ひとりの個性や特性に合わせた指導方法で、無理なく楽しく学べます。'
    },
    {
      icon: Star,
      title: '楽しく続けられる工夫',
      description: 'シールやご褒美システムなど、お子様が楽しく続けられる工夫がたくさんあります。'
    },
    {
      icon: Music,
      title: '家庭でのサポート',
      description: '家庭での練習方法も丁寧にアドバイスし、保護者の方もサポートできます。'
    }
  ];

  const stats = [
    { number: '95%', label: '継続率', description: '生徒さんの継続率' },
    { number: '100%', label: '満足度', description: '保護者満足度' },
    { number: '10年+', label: '指導経験', description: '豊富な指導実績' },
    { number: '3歳〜', label: '対応年齢', description: '幅広い年齢層' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              生徒さんの<span className="text-orange-600">声</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              当教室で学ばれている生徒さんや保護者の方からいただいた、
              心温まるお声をご紹介いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              保護者の方からの<span className="text-orange-600">お声</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              実際にレッスンを受けられている生徒さんの保護者の方から、
              温かいお言葉をいただいています。
            </p>
          </div>

          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full">
                        {testimonial.category}
                      </span>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      {testimonial.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">5.0</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`生徒さんの声 ${testimonial.id}`}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">実際のお声</h3>
                      <p className="text-sm opacity-90">手書きのメッセージ</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              お声から見える<span className="text-orange-600">特徴</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              生徒さんや保護者の方のお声から見える、当教室の特徴をまとめました
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="py-20 warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              その他の<span className="text-orange-600">お声</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "先生のエネルギッシュな指導に、いつも感動しています。子供も楽しく通えています。",
                category: "保護者の方"
              },
              {
                quote: "発表会での子供の成長ぶりに驚きました。先生と子供のチームワークが素晴らしいです。",
                category: "保護者の方"
              },
              {
                quote: "家での練習方法も丁寧に教えてくださるので、とても助かっています。",
                category: "保護者の方"
              },
              {
                quote: "子供の個性に合わせた指導で、無理なく続けられています。",
                category: "保護者の方"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-4">
                  <Quote className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-semibold">
                    {testimonial.category}
                  </span>
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 orange-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたも素敵な音楽体験を
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            多くの生徒さんや保護者の方に喜んでいただいている当教室で、
            あなたも音楽の喜びを体験してみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Heart className="mr-2 w-5 h-5" />
              無料体験レッスン申込み
            </a>
            <a
              href="/courses"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              コース詳細を見る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

