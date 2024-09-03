type PartnerCardProps = {
  name: string;
  websiteLink: string;
  logoPath: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  logoPath,
  websiteLink,
  name,
}: PartnerCardProps) => {
  return (
    <>
      {websiteLink ? (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-[150px] w-full lg:h-[10.5rem] lg:w-80 xl:w-[23.2rem] 2xl:w-[25rem] rounded-xl shadow-sm border border-cardBorder"
        >
          <img src={logoPath} alt={name} className="object-contain" />
        </a>
      ) : (
        <div className="flex items-center justify-center h-[150px] w-full lg:h-[10.5rem] lg:w-80 xl:w-[23.2rem] 2xl:w-[25rem] rounded-xl shadow-sm border border-cardBorder">
          <img src={logoPath} alt={name} className="object-contain" />
        </div>
      )}
    </>
  );
};

export default PartnerCard;
