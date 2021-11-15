import React from "react";
import Image from "next/image";

const Researchwidget = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="brand group">
          <Image
            src="/images/bioinformatics.png"
            layout="fill"
            objectFit="cover"
            priority="true"
            position="relative"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/bioinformatics.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/computational-biology.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/dna.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/computational-material-science.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/atomstwo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/machine-learning-for-science.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/ml.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="brand group">
          <Image
            src="/images/nanoscience.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/atoms.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/particle-physics.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/atoms.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/Systems_Biology.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/biology.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/theoritical-chemistry.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/bioinformaticstwo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default Researchwidget;
