/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Aaron
 * @Date: 2021-03-16 12:43:31
 * @LastEditors: Aaron
 * @LastEditTime: 2021-03-16 12:45:30
 */
import request from '../util/request'

export function userApiList(params) {
	return request({
		url: '/notifyAnnounceUser/findNotifyAnnounceReadCountByUserId/',
		method: 'GET',
		params
	})
}