import React from "react";
import Marquee from "react-fast-marquee";

// Sample sponsor data - replace with your actual data
const sponsors = {
  platinum: [
    { id: 1, name: "Platinum Sponsor 1", logo: "/logo/platinum1.png" },
    { id: 2, name: "Platinum Sponsor 2", logo: "/logos/platinum2.png" },
    { id: 3, name: "Platinum Sponsor 3", logo: "/logos/platinum3.png" },
  ],
  gold: [
    { id: 1, name: "Gold Sponsor 1", logo: "/logos/gold1.png" },
    { id: 2, name: "Gold Sponsor 2", logo: "/logos/gold2.png" },
    { id: 3, name: "Gold Sponsor 3", logo: "/logos/gold3.png" },
    { id: 4, name: "Gold Sponsor 4", logo: "/logos/gold4.png" },
  ],
  silver: [
    { id: 1, name: "Silver Sponsor 1", logo: "/logos/silver1.png" },
    { id: 2, name: "Silver Sponsor 2", logo: "/logos/silver2.png" },
    { id: 3, name: "Silver Sponsor 3", logo: "/logos/silver3.png" },
    { id: 4, name: "Silver Sponsor 4", logo: "/logos/silver4.png" },
    { id: 5, name: "Silver Sponsor 5", logo: "/logos/silver5.png" },
  ],
};

const SponsorMarquee = () => {
  return (
    <div className="w-full my-16">
      {/* Platinum Sponsors Row - Most prominent */}
      <div className="mb-10">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#D01012] uppercase">
          Platinum Sponsors
        </h2>
        <div className="h-[220px] bg-gradient-to-r from-[#F8F8F8] to-[#E3E3E3] rounded-xl shadow-lg">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor={[248, 248, 248]}
            gradientWidth={60}
            pauseOnHover={true}
          >
            {sponsors.platinum.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="mx-6 my-4 p-5 w-[280px] h-[180px] bg-white border-4 border-[#D01012] rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ boxShadow: "0 4px 0 #970c0c" }}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-[180px] h-[100px] object-contain"
                />
                <h3 className="mt-4 text-xl font-bold text-[#333333]">{sponsor.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Gold Sponsors Row - Medium prominence */}
      <div className="mb-8">
        <h2 className="text-center text-2xl font-bold mb-3 text-[#F4CD00] uppercase">
          Gold Sponsors
        </h2>
        <div className="h-[180px] bg-gradient-to-r from-[#FFFAE6] to-[#FFF5CC] rounded-lg shadow-md">
          <Marquee
            speed={50}
            gradient={true}
            gradientColor={[255, 250, 230]}
            gradientWidth={60}
            pauseOnHover={true}
            direction="right"
          >
            {sponsors.gold.map((sponsor) => (
              <div 
                key={sponsor.id}

                className="mx-5 my-3 p-4 w-[220px] h-[150px] bg-white border-3 border-[#F4CD00] rounded-lg shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ boxShadow: "0 3px 0 #DDB900" }}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-[150px] h-[80px] object-contain" 
                />
                <h3 className="mt-3 text-lg font-semibold text-[#333333]">{sponsor.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Silver Sponsors Row - Least prominence */}
      <div>
        <h2 className="text-center text-xl font-bold mb-2 text-[#A1A1A1] uppercase">
          Silver Sponsors
        </h2>
        <div className="h-[150px] bg-gradient-to-r from-[#F5F5F5] to-[#E8E8E8] rounded-md shadow-sm">
          <Marquee
            speed={60}
            gradient={true}
            gradientColor={[245, 245, 245]}
            gradientWidth={60}
            pauseOnHover={true}
            autoFill={true}
          >
            {sponsors.silver.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="mx-4 my-2 p-3 w-[180px] h-[120px] bg-white border-2 border-[#A1A1A1] rounded-md shadow-sm flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ boxShadow: "0 2px 0 #7D7D7D" }}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-[120px] h-[60px] object-contain" 
                />
                <h3 className="mt-2 text-base font-medium text-[#333333]">{sponsor.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SponsorMarquee;
