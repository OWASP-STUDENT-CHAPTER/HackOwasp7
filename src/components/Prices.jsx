import { useState } from "react";
import { PricingCard } from "@/components/ui/dark-gradient-pricing"; // Assuming this path
import {
  FaTrophy,
  FaCode,
  FaLightbulb,
  FaSyncAlt,
  FaStar,
} from "react-icons/fa";

// FlippableCard component
function FlippableCard({
  teamName,
  tier,
  prize,
  benefits,
  isHighlighted = false,
  rank,
  category,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const trophyColors = {
    1: "text-yellow-400",
    2: "text-slate-300",
    3: "text-orange-400",
  };

  const getRankSpecificStyling = () => {
    const solidBaseBg = "bg-zinc-800/90"; // 90% opaque zinc-800
    const highlightedSolidBaseBg = "bg-zinc-800/90";

    if (rank === 1) {
      return {
        border:
          "border-2 border-yellow-400/80 shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)]",
        borderRadius: "rounded-2xl",
        bgColor: `${highlightedSolidBaseBg} bg-gradient-to-br from-amber-600/40 via-yellow-500/30 to-amber-200/25`,
        trophyIconSize: isHighlighted ? 52 : 40,
        tierText: "text-2xl md:text-3xl text-yellow-300",
        teamNameText: isHighlighted ? "text-3xl md:text-4xl" : "text-3xl",
        prizeText:
          "bg-yellow-500/30 text-yellow-200 text-lg px-5 py-2 font-bold",
      };
    } else if (rank === 2) {
      return {
        border:
          "border border-slate-300/70 shadow-[0_0_18px_rgba(209,213,219,0.3)] hover:shadow-[0_0_25px_rgba(209,213,219,0.35)]",
        borderRadius: "rounded-xl",
        bgColor: `${solidBaseBg} bg-gradient-to-br from-slate-400/20 via-blue-gray-300/10 to-slate-500/20`,
        trophyIconSize: 32,
        tierText: "text-xl text-slate-200",
        teamNameText: "text-2xl",
        prizeText: "bg-slate-400/25 text-slate-200 px-3 py-1 font-semibold",
      };
    } else if (rank === 3) {
      return {
        border:
          "border border-orange-500/70 shadow-[0_0_18px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]",
        borderRadius: "rounded-xl",
        bgColor: `${solidBaseBg} bg-gradient-to-br from-amber-700/25 via-orange-600/15 to-amber-500/20`,
        trophyIconSize: 32,
        tierText: "text-xl text-orange-300",
        teamNameText: "text-2xl",
        prizeText: "bg-orange-500/25 text-orange-300 px-3 py-1 font-semibold",
      };
    } else if (rank === 4) {
      return {
        border:
          "border-2 border-sky-500/70 shadow-[0_0_18px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.35)]",
        borderRadius: "rounded-xl",
        bgColor: `${solidBaseBg} bg-gradient-to-br from-sky-600/15 via-transparent to-sky-600/15`,
        trophyIconSize: null,
        tierText: "text-lg text-sky-300",
        teamNameText: "text-xl",
        prizeText: "bg-sky-500/25 text-sky-300 px-3 py-1 font-semibold",
      };
    }
    return {
      // Default for any other unstyled card 
      border: "border border-zinc-700",
      borderRadius: "rounded-xl",
      bgColor: "bg-zinc-900/90", 
      trophyIconSize: null,
      tierText: "text-lg text-zinc-300",
      teamNameText: "text-xl",
      prizeText: "bg-zinc-700/50 text-zinc-300 px-3 py-1",
    };
  };

  const styles = getRankSpecificStyling();

  return (
    <div
      className={`flip-card relative group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] ${styles.border} ${styles.borderRadius} w-full overflow-hidden`} // Added styles.borderRadius and overflow-hidden
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1500px",
        height: isHighlighted ? "480px" : "380px",
      }}
    >
      <div
        className="flip-card-inner w-full h-full transition-transform duration-500 relative"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformOrigin: "center center",
        }}
      >
        {/* Front */}
        <div
          className={`flip-card-front absolute w-full h-full ${styles.borderRadius} overflow-hidden ${styles.bgColor}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {" "}
          <div className="relative flex flex-col items-center justify-between p-6 md:p-8 h-full w-full shadow-xl">
            <div className="absolute top-3 left-3 md:top-4 md:left-4 text-zinc-500 text-xs flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
              <FaSyncAlt className="mr-1" /> Flip
            </div>
            {rank <= 3 && styles.trophyIconSize && (
              <div
                className={`absolute top-3 right-3 md:top-4 md:right-4 ${trophyColors[rank]} drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
              >
                <FaTrophy size={isHighlighted ? 32 : 28} />
              </div>
            )}
            <div className="relative z-10 flex flex-col items-center text-center w-full pt-4">
              <p className="text-sm font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                {category}
              </p>
              {rank <= 3 && styles.trophyIconSize && (
                <div className={`${trophyColors[rank]} my-2 md:my-3`}>
                  {" "}
                  <FaTrophy size={styles.trophyIconSize} />{" "}
                </div>
              )}
              {rank === 4 && (
                <div className="my-2 md:my-3 text-sky-400">
                  {" "}
                  <FaStar size={isHighlighted ? 40 : 32} />{" "}
                </div>
              )}
              <h3 className={`${styles.tierText} font-semibold mb-1 md:mb-2`}>
                {tier}
              </h3>
              <h2
                className={`font-bold tracking-tight text-zinc-50 ${styles.teamNameText} leading-tight`}
              >
                {teamName}
              </h2>
            </div>
            <div className="relative z-10 mt-auto text-center w-full pb-2">
              <div className={`inline-block rounded-md ${styles.prizeText}`}>
                {prize}
              </div>
            </div>
          </div>
        </div>
        {/* Back */}
        <div
          className={`flip-card-back absolute w-full h-full ${styles.borderRadius} overflow-hidden`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {" "}
          <PricingCard
            tier={tier}
            prize={prize}
            bestFor={`${category} - ${tier}`}
            CTA={
              <span className="flex items-center justify-center">
                <FaSyncAlt className="mr-2" /> Click to flip back
              </span>
            }
            benefits={benefits}
            isHighlighted={isHighlighted}
            rank={rank}
          />
        </div>
      </div>
    </div>
  );
}

// WinnersSection component
function WinnersSection() {
  const firstPrizeBenefits = [
    { text: "TIM HORTONS Coupons 20% OFF", checked: true },
    { text: "TIM HORTONS Magnets", checked: true },
    { text: ".xyz Domain", checked: true },
    { text: "Exclusive Goodies Pack", checked: true },
    { text: "Industry Mentors Support", checked: true },
    { text: "Free Rust Workshop Access", checked: true },
    { text: "3x Ledger Nano", checked: true },
  ];
  const secondThirdPrizeBenefits = [
    { text: "TIM HORTONS Coupons 20% OFF", checked: true },
    { text: "TIM HORTONS Magnets", checked: true },
    { text: ".xyz Domain", checked: true },
    { text: "Cool Goodies", checked: true },
    { text: "Industry Mentors Support", checked: false },
    { text: "Rust Workshop Discount", checked: false },
    { text: "Chance to win Ledger Nano", checked: false },
  ];
  const specialAwardBenefits = [
    { text: "TIM HORTONS Coupons 10% OFF", checked: true },
    { text: ".xyz Domain", checked: true },
    { text: "Selected Goodies", checked: true },
    { text: "Industry Mentors Support", checked: false },
  ];

  return (
    <section className="relative overflow-hidden text-foreground py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300">
              🏆 Event Winners
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Celebrating the brilliant minds and their outstanding achievements.
            Tap a card to reveal the prizes.
          </p>
        </div>

        {/* hackowasp 7 */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl text-zinc-100 font-bold mb-8 md:mb-10 text-center tracking-tight">
            HackOWASP 7 Champions
          </h3>
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="w-full max-w-xl md:max-w-2xl">
              <FlippableCard
                teamName="GAMMA-CODERS"
                tier="1st Prize"
                prize="₹15,000 Cash"
                isHighlighted={true}
                rank={1}
                category="hackowasp 7"
                benefits={firstPrizeBenefits}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mb-10">
            <FlippableCard
              teamName="PIXGENZ"
              tier="2nd Prize"
              prize="₹10,000 Cash"
              rank={2}
              category="hackowasp 7"
              benefits={secondThirdPrizeBenefits}
            />
            <FlippableCard
              teamName="CRYPTICCREW"
              tier="3rd Prize"
              prize="₹5,000 Cash"
              rank={3}
              category="hackowasp 7"
              benefits={secondThirdPrizeBenefits}
            />
          </div>
          <h4 className="text-2xl text-sky-300 font-semibold mb-6 text-center">
            Special Recognitions
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <FlippableCard
              teamName="FORCEPUSH"
              tier="Best First Year Team"
              prize="₹2,000 Cash"
              rank={4}
              category="hackowasp 7"
              benefits={specialAwardBenefits}
            />
            <FlippableCard
              teamName="COLLABLN"
              tier="Open Innovation Award"
              prize="₹2,000 Cash"
              rank={4}
              category="hackowasp 7"
              benefits={specialAwardBenefits}
            />
          </div>
        </div>

        {/* Ideathon */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl text-zinc-100 font-bold mb-8 md:mb-10 text-center tracking-tight">
            Ideathon Innovators
          </h3>
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="w-full max-w-xl md:max-w-2xl">
              <FlippableCard
                teamName="UN-ACROBATS"
                tier="1st Prize"
                prize="₹15,000 Cash"
                isHighlighted={true}
                rank={1}
                category="Ideathon"
                benefits={firstPrizeBenefits}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <FlippableCard
              teamName="CRYPTOBAPS"
              tier="2nd Prize"
              prize="₹10,000 Cash"
              rank={2}
              category="Ideathon"
              benefits={secondThirdPrizeBenefits}
            />
            <FlippableCard
              teamName="IMAGINEDRAGONS"
              tier="3rd Prize"
              prize="₹5,000 Cash"
              rank={3}
              category="Ideathon"
              benefits={secondThirdPrizeBenefits}
            />
          </div>
        </div>

        {/* ML Contest */}
        <div>
          <h3 className="text-3xl md:text-4xl text-zinc-100 font-bold mb-8 md:mb-10 text-center tracking-tight">
            ML Contest Prodigies
          </h3>
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="w-full max-w-xl md:max-w-2xl">
              <FlippableCard
                teamName="YUNSUXIAOZI"
                tier="1st Prize"
                prize="₹15,000 Cash"
                isHighlighted={true}
                rank={1}
                category="ML Contest"
                benefits={firstPrizeBenefits}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <FlippableCard
              teamName="JOHN"
              tier="2nd Prize"
              prize="₹10,000 Cash"
              rank={2}
              category="ML Contest"
              benefits={secondThirdPrizeBenefits}
            />
            <FlippableCard
              teamName="BAITHUNTER635"
              tier="3rd Prize"
              prize="₹5,000 Cash"
              rank={3}
              category="ML Contest"
              benefits={secondThirdPrizeBenefits}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { WinnersSection };
