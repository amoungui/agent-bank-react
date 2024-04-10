import FeatureItem from "../FeatureItem";
// eslint-disable-next-line import/order
import { v4 } from 'uuid';

const uuidv4 = v4;

function Feature() {

    return (
        <section class="features">
            <h2 class="sr-only">Features</h2>
            <FeatureItem 
                key={`Feature-item-1-${uuidv4()}`} 
                imageSrc="/assets/img/icon-chat.png"
                imageAlt="Chat Icon" 
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            >
            </FeatureItem>
            <FeatureItem 
                key={`Feature-item-2-${uuidv4()}`} 
                imageSrc="/assets/img/icon-money.png"
                imageAlt="Chat Icon" 
                title="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"
            >
            </FeatureItem>
            <FeatureItem 
                key={`Feature-item-3-${uuidv4()}`} 
                imageSrc="/assets/img/icon-security.png"
                imageAlt="Chat Icon" 
                title="Security you can trust"
                description="We use top of the line encryption to make sure your data and money is always safe."
            >
            </FeatureItem>
      </section>
    )
}

export default Feature