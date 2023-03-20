import React from 'react';
import {
  TeamItem,
  TeamListStyled,
  TeamName,
  TeamPhoto,
  TeamRole,
} from './TeamList.styled';
import teamFirst from '../../../helpers/images/team1.png';
import teamSec from '../../../helpers/images/team2.png';
import teamThird from '../../../helpers/images/team3.png';
import teamFour from '../../../helpers/images/team4.png';
import SocialList from './SocialList/SocialList';

export default function TeamList() {
  return (
    <TeamListStyled>
      <TeamItem>
        <TeamPhoto src={teamFirst} art="team photo" />
        <TeamName>Sunny Khan</TeamName>
        <TeamRole>Executive officer</TeamRole>
        <SocialList />
      </TeamItem>
      <TeamItem>
        <TeamPhoto src={teamSec} art="team photo" />
        <TeamName>Alina Jesia</TeamName>
        <TeamRole>UX/UI DESIGNER</TeamRole>
        <SocialList />
      </TeamItem>
      <TeamItem>
        <TeamPhoto src={teamThird} art="team photo" />
        <TeamName>Alex Sohag</TeamName>
        <TeamRole>BUSINESS DEVELOPMENT</TeamRole>
        <SocialList />
      </TeamItem>
      <TeamItem>
        <TeamPhoto src={teamFour} art="team photo" />
        <TeamName>Afroza Mou</TeamName>
        <TeamRole>Head of marketing</TeamRole>
        <SocialList />
      </TeamItem>
    </TeamListStyled>
  );
}
