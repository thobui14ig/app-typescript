import ApiConstants from '../ApiConstants'
import api from './index'

export const GetAllPost = () => {
    return api(ApiConstants.POSTS, {}, 'get')
}

export const getPostDetail = (id: string) => {
    return api(ApiConstants.POSTS + '/' + id, {}, 'get')
}


export const sendComment = (data: any) => {
    return api(ApiConstants.POSTS + '/addComment', data, 'post')
}