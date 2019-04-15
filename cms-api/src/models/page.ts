import { JSONParsable, JSONObject, JSONEnum, JSONArray, JSONProperty } from '../lib/json';

export enum ResourceType {
    TEXT,
    LINK,
    IMAGE,
    CONTAINER
}

export type LinkDescription = { text: string, link: string };
export type ImageDescription = { cap: string, imgLink: string };

function is_link_description(x): x is LinkDescription {
    return true;
}

function is_img_description(x): x is ImageDescription {
    return true;
}

@JSONParsable({ key: 'string' })
export class PageResource extends JSONObject {
    key: string;
    @JSONEnum(ResourceType)
    type: ResourceType
    @JSONProperty({
        type: obj => true,
        parse: (obj) => {
            if (typeof obj === 'string' || is_link_description(obj) || is_img_description(obj)) {
                return obj;
            } else if (Array.isArray(obj)) {
                let pageResources: PageResource[] = [];
                obj.forEach(pageRes => { pageResources.push(PageResource.fromJSON(pageRes)) });
                return pageResources;
            } else {
                return obj;
            }
        }
    })
    value: string | LinkDescription | ImageDescription | PageResource[]
}

@JSONParsable({ id: 'string' })
export class PageDocument extends JSONObject {
    id: string;
    @JSONArray(PageResource)
    fields: PageResource[]
}