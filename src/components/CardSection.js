const cardData = [
  { title: "Smart Search", desc: "Find the best properties instantly." },
  { title: "Market Insights", desc: "See trends and analytics in real time." },
  { title: "Easy Contact", desc: "Message sellers and agents hassle-free." }
];

export default function CardSection() {
  return (
    <section style={{
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      margin: '40px 0'
    }}>
      {cardData.map(({ title, desc }, idx) => (
        <div
          key={idx}
          style={{
            background: '#fff',
            color: '#333',
            borderRadius: 12,
            boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
            padding: '30px 24px',
            width: 250,
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.08)";
          }}
        >
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}
