
export default function CardUI(props) {
  const { cardArray } = props;

  return (
    <div className="card-ui-main" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '50px' }}>
      {cardArray.map((card, index) => (
      <div key={index} style={{ border: '3px solid #ccc', padding: '12px', borderRadius: '10px' }}>
        <h3>{card.skillName}</h3>
        <ul>
        {card.arraySkill.map((skill, skillIndex) => (
          <li style={ {listStyleType:'square' } } key={skillIndex}>{skill}</li>
        ))}
        </ul>
      </div>
      ))}
    </div>
    );
}