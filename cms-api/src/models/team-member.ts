import { JSONParsable, JSONObject, JSONArray, JSONPrimitiveArray, optional, JSONProperty } from '../lib/json';

@JSONParsable({ netid: 'string', name: 'string', source: 'string', graduation: 'string', major: 'string', doubleMajor: 'string',
    minor: 'string', hometown: 'string', github: 'string', linkedin: 'string', other: 'string', website: 'string',
    about: 'string', subteam: 'string', roleDescription: 'string' })
export class TeamMemberDocument extends JSONObject {
    netid: string;
    name: string;
    source: string;
    graduation: string;
    major: string;
    doubleMajor: string;
    minor: string;
    hometown: string;
    github: string;
    linkedin: string;
    other: string;
    website: string;
    about: string;
    subteam: string;
    @optional
    @JSONPrimitiveArray('string')
    otherSubteams?: string[];
    roleDescription: string;
    @optional
    @JSONProperty('string')
    roleId?: string;
    @optional
    @JSONProperty('boolean')
    isLead?: boolean
}