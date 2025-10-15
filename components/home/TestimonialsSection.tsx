"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getAnimation, getStaggerAnimation } from "@/lib/animations";

export function TestimonialsSection() {
  const isMobile = useIsMobile();
  const animation = getAnimation(isMobile);
  
  const testimonials = [
    {
      name: "Audrey Danet",
      text: "Nous avons fait appel à vanland pour effectuer des modifications sur notre fourgon aménagé et le résultat est au-dessus de nos attentes ! Encore merci à eux ! Nous referons appel à eux, si besoins, sans hésiter !",
      date: "Il y a 2 mois",
      rating: 5,
    },
    {
      name: "Nicolas KOTT",
      text: "Professionnalisme, compétence, précision. L'équipe Vanland nous a parfaitement reçu, informé. Ils ont travaillé avec une grande précision et intelligence pour nous installer les éléments de sécurité du véhicule. Nous recommandons à 200%.",
      date: "Il y a 2 mois",
      rating: 5,
    },
    {
      name: "Justine Ranger",
      text: "Une équipe à l'écoute, efficace et très professionnelle. J'ai fais installer un siège individuel à la place de la banquette d'origine sur mon véhicule, rapide, claire et un travail de qualité. Je recommande a 1000%.",
      date: "Il y a 3 mois",
      rating: 5,
    },
    {
      name: "Nina",
      text: "Ben et Julia sont absolument adorables, très à l'écoute, professionnels, et surtout d'une honnêteté que j'apprécie tout particulièrement. On sent qu'ils travaillent avec soin et avec de vraies valeurs humaines. Vous pouvez leur faire confiance les yeux fermés !",
      date: "Il y a 5 mois",
      rating: 5,
    },
    {
      name: "Sébastien",
      text: "Je suis très satisfait d'avoir découvert Vanland voyage ! Un jeune couple très sympathique, à l'écoute du client ce qui facilite le dialogue. Je recommande chaudement, sans hésitation ils auront la réalisation de mes prochains projets!",
      date: "Il y a 10 mois",
      rating: 5,
    },
    {
      name: "Maelle Dubois",
      text: "Ils ont été très accueillants, arrangeants sur la date et sur les modalités. Ils sont tous les deux disponibles et à l'écoute, très professionnels. Merci pour les conseils avisés ! Je recommande vivement.",
      date: "Il y a 10 mois",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div {...animation} className="text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-accent text-navy font-bold text-sm rounded-2xl mb-4 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
            Témoignages
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Ils nous font confiance,{" "}
            <span className="text-secondary">pourquoi pas vous ?</span>
          </h2>

          {/* Google Rating */}
          <div className="inline-flex items-center gap-3 bg-white rounded-3xl px-6 py-4 shadow-lg border-2 border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-navy">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < 5 ? "text-accent" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-left border-l-2 border-gray-200 pl-3">
              <div className="text-sm font-semibold text-gray-700">
                Basé sur 28 avis
              </div>
              <div className="text-xs text-gray-500">Google Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.05}
            centeredSlides={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 ${
                  index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-2"
                }`}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-accent" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.date}
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 text-secondary/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...getStaggerAnimation(isMobile, index)}
              className={`bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:rotate-0 transition-all duration-300 ${
                index % 3 === 0
                  ? "rotate-1"
                  : index % 3 === 1
                  ? "-rotate-1"
                  : "rotate-2"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed line-clamp-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="font-bold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
                <svg className="w-6 h-6 text-secondary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...animation}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Vous avez travaillé avec nous ? Partagez votre expérience !
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJxxXQeR4t_UcRIZroQwJFCxE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-blue-500 text-white font-bold text-lg rounded-2xl hover:shadow-lg hover:scale-105 hover:rotate-0 rotate-1 transition-all duration-300"
          >
            <StarIcon className="w-5 h-5" />
            Laisser un avis
          </a>
        </motion.div>
      </div>
    </section>
  );
}

