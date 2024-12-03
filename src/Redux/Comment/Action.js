import api from '../../config/api'
import * as actionTypes from './ActionTypes'

export const createComment = (commentData) => {
    return async (dispatch)=> {
        dispatch({type : actionTypes.CREATE_COMMENT_REQUEST})
        try {
            const response = await api.post(
                "/api/comments",
                commentData
            )
            console.log('comment created successfully')
            dispatch({
                type : actionTypes.CREATE_COMMENT_SUCCESS,
                comment : response.data
            })
        } catch (error) {
            console.log('error: ',error)
            dispatch({
                type : actionTypes.CREATE_COMMENT_FAILURE,
                error : error.message
            })
        }
    }
}

export const deleteComment = (commentId) => {
    return async (dispatch)=> {
        dispatch({type : actionTypes.DELETE_COMMENT_REQUEST})
        try {
            await api.delete(`/api/comments/${commentId}`)
            console.log('comment deleted successfully')
            dispatch({
                type : actionTypes.DELETE_COMMENT_SUCCESS,
                commentId
            })
        } catch (error) {
            console.log('error: ',error)
            dispatch({
                type : actionTypes.DELETE_COMMENT_FAILURE,
                error : error.message
            })
        }
    }
}

export const fetchComments = (issueId) => {
    return async (dispatch)=> {
        dispatch({type : actionTypes.FETCH_COMMENTS_REQUEST})
        try {
            const response = await api.get(`/api/comments/${issueId}`)
            console.log('comments for an issueId fetched successfully')
            dispatch({
                type : actionTypes.FETCH_COMMENTS_SUCCESS,
                comments : response.data
            })
        } catch (error) {
            console.log('error: ',error)
            dispatch({
                type : actionTypes.FETCH_COMMENTS_FAILURE,
                error : error.message
            })
        }
    }
}