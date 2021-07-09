/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Aaron
 * @Date: 2020-07-28 17:45:20
 * @LastEditors: Aaron
 * @LastEditTime: 2021-03-16 13:52:49
 */
import axios from 'axios'
import baseUrl from '../config'

import { Toast } from 'vant';
import {
	getToken
} from './auth'

let toast1
// create an axios instance
// resourceUrl = process.env.apiDomain;
const service = axios.create({
	baseURL: baseUrl, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 10000 // request timeout
})
// request interceptor
service.interceptors.request.use(

	config => {
		// do something before request is sent
		toast1 = Toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration:10000
          });
	
		if(getToken()){
			config.headers['session'] = getToken()
		}
		//10s后关闭loding
		setTimeout(()=>{
			toast1.clear();
		},10000)

		return config
	},
	error => {
		// do something with request error
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	response => {

		toast1.clear();
		const res = response.data
		if (res.status_code !== 200) {
            Toast(res.msg);
			// 408:未登录;
			if (res.status_code === 408) {
				
				// sessionStorage.clear();
			}
			return Promise.reject('error')
		} else {
			return response.data
		}
	},
	error => {
		console.log('err' + error) // for debug
		return Promise.reject(error)
	}
)

export default service
