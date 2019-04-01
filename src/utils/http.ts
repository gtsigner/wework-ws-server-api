import axios, {AxiosInstance} from 'axios'

/**
 * 创建实例
 * @param baseURL
 * @param options
 * @param headers
 * @return axios
 */
export function createAxiosInstance(baseURL: string, options?: any, headers: any = {}): AxiosInstance {
    const instance = axios.create({
        baseURL: baseURL,
        timeout: 5000,
        withCredentials: false,
        /*Http Header*/
        headers: headers
    });

    //加入Token在Request拦截器中
    instance.interceptors.request.use(config => {
        return config
    });

    // http response 拦截器,标准的restful请求
    // @ts-ignore
    instance.interceptors.response.use((res: any) => {
            return {data: res.data, status: 200, ok: true, message: res.data.message || 'Request Success'}
        },
        (error: any) => {
            if (error && !error.response) {
                error.response = {data: {message: 'Server Request Fail'}, status: 502}
            }
            const res = {
                ok: false,
                error_msg: '访问服务器失败',
                message: '',
                status: 500
            };
            if (!error.response) {
                res.status = 500;
                res.error_msg = 'API服务器访问失败'
            } else {
                const data = error.response.data;
                res.status = error.response.status;
                res.error_msg = data.message || 'API服务器访问失败';
                res.message = res.error_msg;
            }
            return Promise.resolve(res)
        }
    );

    return instance;
}

