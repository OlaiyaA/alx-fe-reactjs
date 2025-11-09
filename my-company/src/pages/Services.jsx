export default function Services() {
  const style = { padding: "2rem" };

  const services = [
    "Web Development",
    "UI/UX Design",
    "Brand Strategy",
    "Consulting",
  ];

  return (
    <div style={style}>
      <h1>Our Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
