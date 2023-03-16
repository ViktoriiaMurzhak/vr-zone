import React from 'react';
import {
  Circle,
  ItemDescript,
  ItemServ,
  ItemTitle,
  LearnMore,
  ListServ,
} from './ServiceList.styled';
import Management from './ServiceSVG/Management';
import { BsArrowRight } from 'react-icons/bs';
import Assistant from './ServiceSVG/Assistant';
import Crypto from './ServiceSVG/Crypto';
import Tranding from './ServiceSVG/Tranding';
import Analyzer from './ServiceSVG/Analyzer';
import Notification from './ServiceSVG/Notification';

export default function ServiceList() {
  return (
    <ListServ>
      <ItemServ>
        <Circle>
          <Management />
        </Circle>
        <ItemTitle>Order Management</ItemTitle>
        <ItemDescript>
          Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </ItemDescript>
        <LearnMore>
          Learn more <BsArrowRight />
        </LearnMore>
      </ItemServ>

      <ItemServ>
        <Circle>
          <Assistant />
        </Circle>
        <ItemTitle>Social Assistant</ItemTitle>
        <ItemDescript>
          Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </ItemDescript>
        <LearnMore>
          Learn more <BsArrowRight />
        </LearnMore>
      </ItemServ>

      <ItemServ>
        <Circle>
          <Crypto />
        </Circle>
        <ItemTitle>Crypto Platform</ItemTitle>
        <ItemDescript>
          Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </ItemDescript>
        <LearnMore>
          Learn more <BsArrowRight />
        </LearnMore>
      </ItemServ>

      <ItemServ>
        <Circle>
          <Tranding />
        </Circle>
        <ItemTitle>Smart Trading Modules</ItemTitle>
        <ItemDescript>
          Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </ItemDescript>
        <LearnMore>
          Learn more <BsArrowRight />
        </LearnMore>
      </ItemServ>

      <ItemServ>
        <Circle>
          <Analyzer />
        </Circle>
        <ItemTitle>Analyzer of the News</ItemTitle>
        <ItemDescript>
          Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </ItemDescript>
        <LearnMore>
          Learn more <BsArrowRight />
        </LearnMore>
      </ItemServ>

      <ItemServ>
        <Circle>
          <Notification />
        </Circle>
        <ItemTitle>Module of Price Notification</ItemTitle>
        <ItemDescript>
          Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </ItemDescript>
        <LearnMore>
          Learn more <BsArrowRight />
        </LearnMore>
      </ItemServ>
    </ListServ>
  );
}
