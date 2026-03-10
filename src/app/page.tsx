"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles, Calendar } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="largeSizeMediumTitles"
      background="none"
      cardStyle="inset"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="That One Barber Lounge"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Experience Premium Grooming"
          description="That One Barber Lounge brings expert craftsmanship and refined hospitality to every appointment. Step into our world of precision cuts, classic shaves, and legendary service."
          tag="Premium Barbershop"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Book Appointment", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "carousel-1", imageSrc: "http://img.b2bpic.net/free-photo/barber-giving-high-five-client_23-2147737095.jpg?_wi=1", imageAlt: "professional barber shop interior modern design" },
            { id: "carousel-2", imageSrc: "http://img.b2bpic.net/free-photo/adult-hairdresser-shaving-customers-beard-hair-salon_23-2148181971.jpg?_wi=1", imageAlt: "barber cutting men's hair professional fade" },
            { id: "carousel-3", imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-man-barbershop_23-2148506245.jpg?_wi=1", imageAlt: "barber grooming beard trimming shaping" },
            { id: "carousel-4", imageSrc: "http://img.b2bpic.net/free-photo/cropped-image-bearded-man-using-electric-razor_171337-17324.jpg?_wi=1", imageAlt: "traditional straight razor shave barbershop" },
            { id: "carousel-5", imageSrc: "http://img.b2bpic.net/free-photo/barber-giving-high-five-client_23-2147737095.jpg?_wi=2", imageAlt: "professional barber shop interior modern design" },
            { id: "carousel-6", imageSrc: "http://img.b2bpic.net/free-photo/adult-hairdresser-shaving-customers-beard-hair-salon_23-2148181971.jpg?_wi=2", imageAlt: "barber cutting men's hair professional fade" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          title="Crafted for the Discerning Gentleman—Where Tradition Meets Excellence"
          useInvertedBackground={true}
          buttons={[
            { text: "Explore Our Services", href: "#services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardMedia
          title="Our Services"
          description="Master-level grooming crafted for every gentleman. From precision haircuts to classic straight-razor shaves, we deliver excellence."
          tag="Services"
          features={[
            {
              id: "haircut",              title: "Premium Haircuts",              description: "Expert fades, textured cuts, and classic styles tailored to your unique look and lifestyle.",              tag: "Popular",              imageSrc: "http://img.b2bpic.net/free-photo/adult-hairdresser-shaving-customers-beard-hair-salon_23-2148181971.jpg?_wi=3",              imageAlt: "barber cutting men's hair professional fade"
            },
            {
              id: "beard",              title: "Beard Grooming",              description: "Professional beard shaping, trimming, and conditioning for a refined, well-maintained appearance.",              tag: "Specialty",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-man-barbershop_23-2148506245.jpg?_wi=2",              imageAlt: "barber grooming beard trimming shaping"
            },
            {
              id: "shave",              title: "Classic Straight Shave",              description: "Traditional hot lather shave with premium products and expert technique for ultimate comfort and precision.",              tag: "Signature",              imageSrc: "http://img.b2bpic.net/free-photo/cropped-image-bearded-man-using-electric-razor_171337-17324.jpg?_wi=2",              imageAlt: "traditional straight razor shave barbershop"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardEleven
          title="Meet Our Master Barbers"
          description="Decades of combined experience, unwavering commitment to excellence, and genuine care for every client."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          groups={[
            {
              id: "master-barbers",              groupTitle: "Master Barbers",              members: [
                {
                  id: "1",                  title: "Marcus Johnson",                  subtitle: "Head Barber & Founder",                  detail: "marcus@thatonebarber.com",                  imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-tailor-standing-with-crossed-arms-sewing-workshop_613910-18122.jpg",                  imageAlt: "professional male barber portrait confident"
                },
                {
                  id: "2",                  title: "David Chen",                  subtitle: "Senior Barber",                  detail: "david@thatonebarber.com",                  imageSrc: "http://img.b2bpic.net/free-photo/barber-man-apron-holding-trimmer-smiling-cheerfully-showing-thumbs-up-standing-light-wall_141793-50621.jpg",                  imageAlt: "young barber professional portrait smiling"
                },
                {
                  id: "3",                  title: "Anthony Rodriguez",                  subtitle: "Master Stylist",                  detail: "anthony@thatonebarber.com",                  imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5687.jpg",                  imageAlt: "experienced barber master portrait confident"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Clients Say"
          description="Real stories from gentlemen who trust us with their grooming."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              name: "James Mitchell",              role: "Executive",              company: "Tech Ventures",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-businessman-wearing-glasses_329181-677.jpg",              imageAlt: "satisfied customer smiling portrait headshot"
            },
            {
              id: "2",              name: "Robert Taylor",              role: "Attorney",              company: "Legal Group",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/man-putting-face-discomfort_1187-1592.jpg",              imageAlt: "professional man portrait confident smile"
            },
            {
              id: "3",              name: "Christopher Lee",              role: "Designer",              company: "Creative Studio",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-ginger-man-stylish-navy-t-shirt-looking-camera-showing-thumb-up-while-posing-blue-studio-background-human-facial-expressions-sincere-emotions_639032-2116.jpg",              imageAlt: "young man satisfied customer portrait"
            },
            {
              id: "4",              name: "Michael Patterson",              role: "Entrepreneur",              company: "Startup Inc",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-relaxed-mature-business-man-standing-office-cafe-leaning-counter-holding-jacket-shoulder_74855-15162.jpg",              imageAlt: "mature man confident portrait satisfied"
            }
          ]}
          kpiItems={[
            { value: "15+", label: "Years of Excellence" },
            { value: "5000+", label: "Satisfied Clients" },
            { value: "98%", label: "Customer Satisfaction" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Book Your Appointment Today"
          description="Reserve your time with our master barbers and experience the That One Barber Lounge difference. Secure your spot now."
          tagIcon={Calendar}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="We respect your privacy and will never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Navigate",              items: [
                { label: "Home", href: "#hero" },
                { label: "Services", href: "#services" },
                { label: "Team", href: "#team" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Premium Haircuts", href: "#services" },
                { label: "Beard Grooming", href: "#services" },
                { label: "Classic Shave", href: "#services" },
                { label: "Book Appointment", href: "#contact" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Email", href: "mailto:hello@thatonebarber.com" },
                { label: "Phone", href: "tel:+1-555-0100" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cancellation Policy", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 That One Barber Lounge. All rights reserved."
          bottomRightText="Crafted with precision and care"
        />
      </div>
    </ThemeProvider>
  );
}
