import { firstSetCards, secondSetCards } from "@constants/Data";
import { ColCards, RowCards } from "@components/FixedComponents/components";

import Link from "next/link";

const Center = () => {
  return (
    <div className="column p-5 gap-8 lg:h-[82vh] lg:overflow-y-scroll bg-[#111111]">
      <section className="column gap-5">
        <h1 className="text-white text-3xl font-bold">Good evening</h1>

        {/* afternon songs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full">
          {firstSetCards.cards.map((card, i) => (
            <RowCards key={i} card={card} />
          ))}
        </div>
        {/* afternon songs */}
      </section>

      <section className="column gap-5">
        <div className="flex-between">
          <h1 className="text-white text-2xl font-bold">Your Top Mixes</h1>
          <Link href="/" className="gray-text-hover">
            See more
          </Link>
        </div>
        {/* top mixes sons */}
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-7">
          {secondSetCards.cards.map((card, i) => (
            <ColCards key={i} card={card} />
          ))}
        </div>
        {/* top mixes sons */}
      </section>

      <section className="column gap-5">
        <div className="flex-between">
          <h1 className="text-white text-2xl font-bold">Jump Back In</h1>
          <Link href="/" className="gray-text-hover">
            See more
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-7">
          {secondSetCards.cards.map((card, i) => (
            <ColCards key={i} card={card} />
          ))}
        </div>
      </section>

      <sectio className="column gap-5">
        <div className="flex-between">
          <h1 className="text-white text-2xl font-bold">Jump Back In</h1>
          <Link href="/" className="gray-text-hover">
            See more
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-7">
          {secondSetCards.cards.map((card, i) => (
            <ColCards key={i} card={card} />
          ))}
        </div>
      </sectio>
    
    </div>
  );
};

export default Center;
