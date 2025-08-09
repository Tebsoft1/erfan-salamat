import React from 'react';

interface DoctorCardProps {
  name: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, image }) => {
  return (
    <div className="w-full max-w-xs p-4">
      <div className="bg-teal-500 p-4 rounded-lg flex flex-col items-center">
        <img src={image} alt={name} className="rounded-full mb-2 w-24 h-24" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default DoctorCard;