import React from 'react';
import { ServicesContainer,ServicesH1,ServiceWrapper,ServiceCard,ServiceIcon,ServiceH2,ServiceP } from './ServicesStyle';


function ServicesData  ()  {
    return (
        
        <ServicesContainer id='service'>
            <ServicesH1>OUR SERVICE</ServicesH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon  />
                    <ServiceH2>Software Develop</ServiceH2>
                    <ServiceP>kklsadklklsacklwq opckcjdzklckaje ajcaelcjealcjak lsjcklsj cklejkakljx klzjcaacs</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon  />
                    <ServiceH2>Software Develop</ServiceH2>
                    <ServiceP>kklsadklklsacklwq opckcjdzklckajeh ajcaelcjealcjak lsjcklsj cklejkakljx klzjcaacs</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon  />
                    <ServiceH2>Software Develop</ServiceH2>
                    <ServiceP>kklsadklklsacklwq opckcjdzklckaje ajcaelcjealcjak lsjcklsj cklejkakljx klzjcaacs</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServicesContainer>
        
    )
}

export default ServicesData;