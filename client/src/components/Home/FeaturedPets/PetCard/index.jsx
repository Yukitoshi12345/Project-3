import React from 'react';
import { motion } from 'framer-motion';

const PetCard = ( {index, type, name, location, age, breed, species, photo}) => {
  return (
    <motion.div className="card w-96 bg-base-200 shadow-xl"
    initial={{
      opacity: 0,
      y: index % 2 ===0 ? 50 : -50
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: 'easeInOut'}
    }}
    viewport= {{once: false}}
    >
      <figure className='mb-0'>
        <img 
          src={`/images/pets/${type.toLowerCase()}s/${photo}`}
          alt={`featured pet ${name}`}
        />
      </figure>
      <div className="card-body pt-0 mt-0">
        <h2 className="card-title my-2">
          {name}
          <div className="badge badge-secondary">FEATURED</div>
        </h2>
        <p className='leading-3 my-0'>{location}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            {age}
            {age > 1 ? 'years' : 'year'}
          </div>
          <div className="badge badge-outline">{breed || species}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PetCard;