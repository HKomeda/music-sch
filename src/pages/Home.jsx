import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Heart, Star, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: '一人ひとりに寄り添う指導',
      description: '生徒さんの個性とペースを大切にした、きめ細やかなレッスンを提供します。'
    },
    {
      icon: Star,
      title: '楽しく学べる環境',
      description: '音楽の楽しさを感じながら、自然と技術が身につくレッスンを心がけています。'
    },
    {
      icon: Users,
      title: '幅広い年齢層に対応',
      description: '3歳のお子様から大人の方まで、それぞれに適したコースをご用意しています。'
    },
    {
      icon: Award,
      title: '豊富な指導経験',
      description: '長年の指導経験を活かし、確実な上達をサポートします。'
    }
  ];

  const courses = [
    {
      title: '幼児コース',
      age: '3歳〜',
      price: '8,400円〜',
      duration: '40分',
      frequency: '年間38回',
      description: 'お子様の成長に合わせた楽しいレッスン'
    },
    {
      title: '親子ピアノ',
      age: '3歳児クラス',
      price: '5,000円',
      duration: '月2回',
      frequency: '',
      description: '親子で一緒に音楽を楽しみましょう'
    },
    {
      title: '大人ピアノ',
      age: '大人',
      price: '9,500円',
      duration: '40分',
      frequency: '月謝制',
      description: '初心者から経験者まで対応'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float">
                <Music className="w-12 h-12 text-white music-note" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              音楽の喜びを
              <br />
              <span className="text-yellow-200">共に奏でましょう</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              一人ひとりの個性を大切にし、音楽の楽しさを伝えるピアノ教室です。
              幼児から大人まで、心に響く音楽体験をお届けします。
            </p>