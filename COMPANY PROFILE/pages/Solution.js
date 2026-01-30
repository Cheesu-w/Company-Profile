import React, { useState } from "react";

const Solution = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  padding: '15px',
  border: '1px solid #f0f0f0',
  marginBottom: '20px'
};
  const categories = [
    {
      title: "Physical Security",
      type: "grid",
      items: [
        { 
          id: "ac", 
          name: "ACCESS CONTROL", 
          desc: "Control access to resources or areas from a central location.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" 
        },
        { 
          id: "cctv", 
          name: "CCTV", 
          desc: "CCTV typically stands for Closed-Circuit Television.",
          image: "https://via.placeholder.com/400x250?text=CCTV+System" 
        },
        { 
          id: "fire", 
          name: "FIRE DETECTION AND ALARM SYSTEM", 
          desc: "Detect and alerts individual.",
          image: "https://via.placeholder.com/400x250?text=Fire+Alarm" 
        },
      ]
    },
    {
      title: "Information Security",
      type: "wide",
      items: [
        { 
          id: "cyber", 
          name: "CYBER SECURITY", 
          desc: "Protecting computer systems, networks, and data from unauthorized access.",
          image: "https://via.placeholder.com/600x400?text=Cyber+Security" 
        }
      ]
    },
    {
      title: "Wireless Connectivity",
      type: "wide",
      items: [
        { 
          id: "wireless", 
          name: "WIRELESS CONNECTIVITY", 
          desc: "Network or communication link between devices.",
          image: "https://via.placeholder.com/600x400?text=Wireless+Network" 
        }
      ]
    },
    {
      title: "Communication Devices",
      type: "wide",
      items: [
        { 
          id: "comm-devices", 
          name: "COMMUNICATION DEVICES", 
          desc: "Devices that enable the transmission and reception of information across various platforms and networks.",
          image: "https://via.placeholder.com/600x400?text=Communication+Devices" 
        }
      ]
    },
    {
      title: "Industry Specific",
      type: "grid",
      items: [
        { 
          id: "bms", 
          name: "BUILDING MANAGEMENT SYSTEM", 
          desc: "Manages various building systems, including HVAC, lighting, and etc.",
          image: "https://via.placeholder.com/400x250?text=BMS" 
        },
        { 
          id: "solar", 
          name: "SOLAR PANELS", 
          desc: "Electricity generated from sunlight using solar panels or thermal system.",
          image: "https://via.placeholder.com/400x250?text=Solar+Panels" 
        }
        
      ]
    },
    {
          title: "Technology Backbone (On-Premise)",
          type: "wide",
          items: [
            { 
              id: "structured-cabling", 
              name: "STRUCTURED CABLING", 
              desc: "A structured and organized approach to designing and installing a network infrastructure within a building or facility.",
              image: "https://via.placeholder.com/600x400?text=Structured+Cabling" 
            }
          ]
        },
        {
          title: "Cloud Computing",
          type: "wide",
          items: [
            { 
              id: "cloud-mgmt", 
              name: "CLOUD MANAGEMENT", 
              desc: "Involves overseeing and controlling the operation, resources, and services within a cloud computing environment.",
              image: "https://via.placeholder.com/600x400?text=Cloud+Management" 
            }
          ]
        }

    
  ];

  return (
    <div className="solutions-container" style={{ padding: '40px 8%', backgroundColor: '#f9f9f9', marginTop: '80px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: '800', color: '#1a2b48' }}>
        SOLUTION AND PRODUCTS
      </h2>

      {categories.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '700', color: '#333' }}>{cat.title}</h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: cat.type === 'grid' ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr', 
            gap: '25px' 
          }}>
            {cat.items.map((item) => (
              <div key={item.id} className={`solution-card ${expandedId === item.id ? 'active' : ''}`} style={cardStyle}>
                <div style={{ display: cat.type === 'wide' ? 'flex' : 'block', gap: '20px' }}>
                  <div className="card-image" style={{ 
                    width: cat.type === 'wide' ? '400px' : '100%', 
                    height: '220px', 
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px'
                  }} />
                  
                  <div style={{ padding: '20px', flex: 1 }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '10px' }}>{item.name}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>{item.desc}</p>
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      style={btnStyle}
                    >
                      {expandedId === item.id ? "CLOSE" : "VIEW"}
                    </button>
                  </div>
                </div>

                {expandedId === item.id && (
                  <div style={expandSectionStyle}>
                    <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />
                    <h5 style={{ marginBottom: '10px' }}>Product Overview</h5>
                    <p style={{ fontSize: '0.9rem', color: '#444' }}>
                      Detailed technical specifications for {item.name} go here. You can list features, 
                      compatibility, and integration options for this specific solution.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  padding: '15px',
  border: '1px solid #eee'
};

const btnStyle = {
  backgroundColor: '#008ba3',
  color: 'white',
  border: 'none',
  padding: '10px 30px',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '0.85rem'
};

const expandSectionStyle = {
  padding: '0 20px 20px',
  animation: 'fadeIn 0.4s ease-out'
};

export default Solution;
