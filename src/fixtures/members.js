import { Roles } from '../constants/memberRoles';

export const members = [
  {
    role: Roles.leader,
    name: 'Åge Johansen',
    from: '02.02.2020',
    to: new Date().toISOString()
  },
  {
    role: Roles.member,
    name: 'Rolf Nilsen',
    from: '02.02.2017',
    to: new Date().toISOString()
  },
  { role: Roles.member, name: 'Line', from: '02.02.2016', to: new Date().toISOString() },
  { role: Roles.member, name: 'Jon Inge', from: '02.02.2017', to: new Date().toISOString() },
  {
    role: Roles.member,
    name: 'Lars-Martin Antonsen',
    from: '02.02.2017',
    to: new Date().toISOString()
  },
  {
    role: Roles.deputyMember,
    name: 'Sissel',
    from: '02.02.2020',
    to: new Date().toISOString()
  },
  {
    role: Roles.deputyMember,
    name: 'Et navn',
    from: '02.02.2020',
    to: new Date().toISOString()
  }
];

export default members;
