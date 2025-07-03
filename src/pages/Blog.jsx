import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Music, BookOpen, Star } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: '新年度生徒募集開始のお知らせ',
      excerpt: '2025年度の新規生徒さんの募集を開始いたします。無料体験レッスンも随時受付中です。',
      content: `新年度を迎え、当ピアノ教室では新規生徒さんの募集を開始いたします。

幼児コース（3歳〜）、親子ピアノ、大人ピアノコースともに、若干名の空きがございます。

無料体験レッスンでは、実際のレッスンの雰囲気を体感していただけます。お気軽にお申し込みください。

【募集コース】
・幼児コース：月謝8,400円〜（40分・年間38回）
・親子ピアノ：月謝5,000円（月2回）
・大人ピアノ：月謝9,500円（40分・月謝制）

皆様のお申し込みをお待ちしております。`,
      date: '2025-01-15',
      author: '講師',
      category: 'news',
      image: '/images/piano-lesson-1.jpg'
    },
    {
      id: 2,
      title: '発表会開催のご報告',
      excerpt: '先日開催された発表会の様子をご報告いたします。生徒さんたちの素晴らしい演奏をお聞きください。',
      content: `12月に開催された年末発表会が無事終了いたしました。

今回は幼児から大人まで、総勢20名の生徒さんにご参加いただきました。

【演奏曲目（一部）】
・「エリーゼのために」（ベートーヴェン）
・「トルコ行進曲」（モーツァルト）
・「アオゾラペダル」（嵐）
・「千本桜」（黒うさP）

クラシックからポピュラーまで、幅広いジャンルの演奏が披露されました。

生徒さんたちの成長ぶりに、改めて音楽教育の素晴らしさを感じました。

次回の発表会は6月を予定しております。`,
      date: '2024-12-28',
      author: '講師',
      category: 'event',
      image: '/images/piano-lesson-2.jpg'
    },
    {
      id: 3,
      title: 'ピアノ練習のコツ：効果的な練習方法',
      excerpt: '家庭での練習をより効果的にするためのコツをご紹介します。短時間でも上達できる方法をお教えします。',
      content: `家庭での練習を効果的に行うためのコツをご紹介します。

【練習のポイント】

1. **短時間集中**
   長時間だらだらと練習するより、15-30分の集中した練習を心がけましょう。

2. **部分練習**
   難しい箇所は部分的に取り出して、ゆっくりと正確に練習しましょう。

3. **メトロノームの活用**
   正確なリズムを身につけるため、メトロノームを使った練習をおすすめします。

4. **録音・録画**
   自分の演奏を客観的に聞くことで、改善点が見つかります。

5. **楽しむ気持ち**
   何より大切なのは、音楽を楽しむ気持ちです。

これらのコツを実践して、より充実した練習時間にしてください。`,
      date: '2024-11-20',
      author: '講師',
      category: 'tips',
      image: '/images/piano-lesson-3.jpg'
    },
    {
      id: 4,
      title: '音楽が子どもの成長に与える影響',
      excerpt: '音楽教育が子どもの発達に与える様々な効果について、最新の研究結果をもとにご紹介します。',
      content: `音楽教育が子どもの成長に与える素晴らしい効果についてお話しします。

【認知能力の向上】
・記憶力の向上
・集中力の向上
・論理的思考力の発達

【情緒面の発達】
・感情表現力の向上
・自己肯定感の向上
・ストレス軽減効果

【社会性の発達】
・協調性の向上
・コミュニケーション能力の向上
・忍耐力の向上

【身体的発達】
・手指の器用さの向上
・姿勢の改善
・脳の活性化

これらの効果は、ピアノレッスンを通じて自然と身についていきます。

音楽教育は、お子様の総合的な成長をサポートする素晴らしいツールです。`,
      date: '2024-10-15',
      author: '講師',
      category: 'education',
      image: '/images/piano-lesson-4.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて', icon: BookOpen },
    { id: 'news', name: 'お知らせ', icon: Star },
    { id: 'event', name: 'イベント', icon: Music },
    { id: 'tips', name: 'レッスンのコツ', icon: BookOpen },
    { id: 'education', name: '音楽教育', icon: User }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">ブログ</span>・お知らせ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              教室からの最新情報、レッスンのコツ、音楽教育に関する情報などを
              定期的に更新しています。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                        post.category === 'news' ? 'bg-blue-100 text-blue-600' :
                        post.category === 'event' ? 'bg-green-100 text-green-600' :
                        post.category === 'tips' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('ja-JP')}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6">
                      {post.excerpt}
                    </p>
                    
                    {expandedPost === post.id && (
                      <div className="mb-6">
                        <div className="prose prose-gray max-w-none">
                          {post.content.split('\n\n').map((paragraph, index) => {
                            if (paragraph.startsWith('【') && paragraph.endsWith('】')) {
                              return (
                                <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                                  {paragraph}
                                </h3>
                              );
                            } else if (paragraph.startsWith('・')) {
                              return (
                                <ul key={index} className="list-disc list-inside text-gray-600 mb-4">
                                  {paragraph.split('\n').map((item, itemIndex) => (
                                    <li key={itemIndex}>{item.replace('・', '')}</li>
                                  ))}
                                </ul>
                              );
                            } else {
                              return (
                                <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                                  {paragraph}
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                    )}
                    
                    <button
                      onClick={() => togglePost(post.id)}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                    >
                      {expandedPost === post.id ? '閉じる' : '続きを読む'}
                      <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                        expandedPost === post.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">該当する記事がありません</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 warm-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新情報をお届け
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              教室からの最新のお知らせやレッスンに役立つ情報を定期的に更新しています。
              ぜひブックマークして、定期的にチェックしてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300"
              >
                <Music className="mr-2 w-5 h-5" />
                お問い合わせ
              </a>
              <a
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                コース詳細を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 orange-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ご質問やご相談はお気軽に
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            ブログでご紹介した内容について、ご質問やご相談がございましたら、
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              お問い合わせ
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

export default Blog;

