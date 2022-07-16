import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return (
        <div className='card-container' key={id}>
          <img
            src={`https://robohash.org/${id}?set=set2`}
            alt={`monster ${name}`}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      );
    })}
  </div>
);

export default CardList;
