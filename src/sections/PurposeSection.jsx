import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ExternalLink } from "lucide-react";

const PurposeSection = () => {
  const iframeRef = useRef(null);

  const handleContainerClick = () => {
    // Open YouTube in a new tab when the video container is clicked
    window.open("https://www.youtube.com/watch?v=69apY2LYMZ8", "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Purpose
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Our purpose is to support ophthalmologists across{" "}
              <strong>cataract, refractive and retinal care</strong> by
              providing clinically reliable technologies that help deliver{" "}
              <strong>meaningful visual outcomes for your patients</strong>.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We believe eye care extends beyond a single procedure or product
              category. Whether restoring vision through cataract surgery,
              enhancing visual performance with refractive solutions or
              supporting long-term retinal health, our focus remains
              consistent –{" "}
              <strong>
                improving your patient's quality of vision and quality of
                life.
              </strong>
            </p>
            <Link
              to="/our-purpose"
              className="inline-flex items-center px-5 py-2.5 text-lg bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Read More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            {/* Clickable container that opens YouTube */}
            <div 
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              onClick={handleContainerClick}
              title="Click to watch on YouTube"
            >
              {/* YouTube iframe with autoplay (muted) */}
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/69apY2LYMZ8?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&loop=0&playlist=69apY2LYMZ8"
                title="Domedicals Introduction"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
              
              {/* Overlay with play button and YouTube indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary-600 ml-1" />
                </div>
                <div className="bg-black/70 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center">
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-3">
              {/* Video autoplays muted • Click to watch on YouTube */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;