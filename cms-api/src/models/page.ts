import { JSONParsable, JSONObject, JSONEnum, JSONArray } from '../lib/json';

export enum ResourceType {
    TEXT,
    LINK,
    IMAGE,
    CONTAINER
}

@JSONParsable({ key: 'string', value: 'any' })
export class PageResource extends JSONObject {
    key: string;
    @JSONEnum(ResourceType)
    type: ResourceType
    value: any
}

@JSONParsable({ id: 'string' })
export class PageDocument extends JSONObject {
    id: string;
    @JSONArray(PageResource)
    fields: PageResource[]
}