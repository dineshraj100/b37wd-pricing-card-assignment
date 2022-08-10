import './App.css';
import Pricingcard from './pricingcard';
function App() {
  const data=[
    {
      plan: "Free",
      price: "0",
      currency: "$",
      period: "month",
      features:[
        {
          title: "Single User",
          isEnable: true
        },
        {
          title: "5GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false
        },{
          title: "Free Subdomain",
          isEnable: false
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        }
      ]
    }, 
    {
      plan: "Plus",
      price: "9",
      currency: "$",
      period: "month",
      features:[
        {
          title: "5 Users",
          isEnable: true
        },
        {
          title: "50GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },{
          title: "Free Subdomain",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        }
      ]
    },{
      plan: "PRO",
      price: "49",
      currency: "$",
      period: "month",
      features:[
        {
          title: "Unlimited Users",
          isEnable: true
        },
        {
          title: "150GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },{
          title: "Unlimited Free Subdomain",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: true
        }
      ]
    }
  ];
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {data.map((e,index)=> <Pricingcard data={e} key={index} />)}
    </div>
  </div>
</section>
  );
}

export default App;
