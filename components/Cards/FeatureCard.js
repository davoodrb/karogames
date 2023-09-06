function Feature({ cardIcon, cardTitle, cardDesc }) {
  return (
    <div className="text-center bg-secondary transition-colors hover:bg-[#232323] p-8 rounded-lg sm:w-1/3">
      <div className="bg-thirdary w-fit mx-auto rounded-full p-2">
        {cardIcon}
      </div>
      <h3 className="text-2xl font-semibold mt-4">{cardTitle}</h3>
      <p className="mt-2">{cardDesc}</p>
    </div>
  );
}

export default Feature;
