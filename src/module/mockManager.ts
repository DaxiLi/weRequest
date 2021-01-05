import config from '../store/config'
import loading from '../util/loading'
import { IRequestOption, IUploadFileOption } from "../interface"

function get(obj: IRequestOption | IUploadFileOption): any {

    if(!(config.mockJson[obj.url] || (obj.originUrl && config.mockJson[obj.originUrl]))) {
        // mock 没有对应接口的数据
        return false;
    }

    let data = config.mockJson[obj.url] || (obj.originUrl ? config.mockJson[obj.originUrl] : '');
    // deep copy
    data = JSON.parse(JSON.stringify(data));
    const res = {
        data,
        statusCode: 200
    };

    loading.hide();
    return res
}

export default {
    get
}
