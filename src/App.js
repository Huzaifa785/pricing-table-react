import './Price.css';
import PriceCard from './priceCard';

function App() {
  let details = [
    {
      packageName : "free",
      currency : "$",
      price : 0,
      period : "month",
      features : [
        {
          featureName : "Single User",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "5GB Storage",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Unlimited Public Projects",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Community Access",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Unlimited Private Projects",
          isEnabled : false,
          isBold : false
        },
        {
          featureName : "Dedicated Phone Support",
          isEnabled : false,
          isBold : false
        },
        {
          featureName : "Free Subdomain",
          isEnabled : false,
          isBold : false
        },
        {
          featureName : "Monthly Status Reports",
          isEnabled : false,
          isBold : false
        }
      ]
    },
    {
      packageName : "plus",
      currency : "$",
      price : 9,
      period : "month",
      features : [
        {
          featureName : "5 Users",
          isEnabled : true,
          isBold : true
        },
        {
          featureName : "50GB Storage",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Unlimited Public Projects",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Community Access",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Unlimited Private Projects",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Dedicated Phone Support",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Free Subdomain",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Monthly Status Reports",
          isEnabled : false,
          isBold : false
        }
      ]
    },
    {
      packageName : "pro",
      currency : "$",
      price : 49,
      period : "month",
      features : [
        {
          featureName : "Unlimited Users",
          isEnabled : true,
          isBold : true
        },
        {
          featureName : "150GB Storage",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Unlimited Public Projects",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Community Access",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Unlimited Private Projects",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Dedicated Phone Support",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Free Subdomain",
          isEnabled : true,
          isBold : false
        },
        {
          featureName : "Monthly Status Reports",
          isEnabled : true,
          isBold : false
        }
      ]
    }
  ]

  let onSubscribe = (plan) => {
    alert(`Hey, your ${plan} plan has been subscribed!`)
  }

  return (
    <div className="pricing py-5">
    <div className="container">
      <div className="row">
        {
          details.map( (card) => {
            return <PriceCard data = {card} handleSubscribe = {onSubscribe}></PriceCard>
          })
        }
      </div>
    </div>
    </div>
  );
}

export default App;