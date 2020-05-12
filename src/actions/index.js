import axios from "axios";
import { get } from "lodash";
import {
    FETCH_USER,
    USER_INFO,
    ADD_EVENT,
    GET_EVENTS,
    COUNT_EVENTS,
    SEARCH_EVENT,
    COUNT_BUDGETED_EVENTS,
    SEARCH_BUDGETED_EVENT,
    GET_BUDGETED_EVENTS,
    COUNT_UNBUDGETED_EVENTS,
    SEARCH_UNBUDGETED_EVENT,
    GET_UNBUDGETED_EVENTS,
    PAYSTACK_PAYMENT,

} from "./type";

const API = process.env.REACT_APP_API;


export const fetchUser = (userInfo, activate) => async dispatch => {
    try {
        let data = false,
            _token = false;

        if (!activate) {
            // get user
            const res = await axios({
                method: "POST",
                url: `${API}/login`,
                data: userInfo
            });

            // if(res.data.verificationStatus === "PENDING") {
            //     throw new Error("Please check your email to verify your account");
            // } 

            data = res.data;
            _token = res.data._token;
        } else {
            data = userInfo;
        }

        dispatch({
            type: FETCH_USER,
            payload: {
                success: true,
                message: 'login successful',
                data
            }
        });


    } catch (e) {
        const msg = get(e, 'response.data.message', e.message);
        dispatch({
            type: FETCH_USER,
            payload: {
                success: false,
                message: msg
            }
        });
    }
};


export const fetchInfo = (token, user) => async dispatch => {
    try {
        const res = await axios({
            method: "GET",
            url: `${API}/users/${user}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: USER_INFO,
            payload: res.data
        });
    } catch (e) {
        return false;
    }
};

export const initializePaystack = data => dispatch => {

    dispatch({
        type: PAYSTACK_PAYMENT,
        payload: data
    });
}

export const addEvent = (token, user, data) => async dispatch => {
    try {
        data = { user, ...data };
        await axios.post(`${API}/events`, data, {
            params: { user },
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        console.log('here');

        dispatch({
            type: ADD_EVENT,
            payload: {
                success: true
            }
        });
    } catch (e) {
        const msg = get(e, 'response.data.message', e.message);
        dispatch({
            type: ADD_EVENT,
            payload: {
                success: false,
                message: msg
            }
        });
    }
}

export const getEvents = (token, user, _limit, _skip) => async dispatch => {
    try {
        const res = await axios({
            url: `${API}/events`,
            params: { user, _select: '-_v', _limit, _skip, _sort: "createdAt:-1" },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: GET_EVENTS,
            payload: res.data
        });
    } catch (e) {
        return false;
    }
}

export const countEvents = (token, user) => async dispatch => {
    try {
        const res = await axios({
            url: `${API}/events`,
            params: { user, _count: true },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: COUNT_EVENTS,
            payload: res.data
        })

    } catch (e) {
        return false;
    }
}

export const searchEvent = (token, identifier, user) => async dispatch => {
    try {
        let search = "";

        if (identifier !== "") {
            search = new RegExp("" + identifier + "");
        }

        const res = await axios({
            url: `${API}/events?_id=${search}`,
            params: { user, _populate: 'user', _limit: 5 },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: SEARCH_EVENT,
            payload: res.data
        });

    } catch (e) {
        return false;
    }
}

export const getBudgetedEvents = (token, _limit, _skip, user) => async dispatch => {
    try {
        const res = await axios({
            url: `${API}/events?budgeted=true`,
            params: { user, _populate: 'user', _limit, _skip, _sort: "createdAt:-1" },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: GET_BUDGETED_EVENTS,
            payload: res.data
        });
    } catch (e) {
        return false;
    }
}

export const countBudgetedEvents = (token, user) => async dispatch => {
    try {
        const res = await axios({
            url: `${API}/events?budgeted=true`,
            params: { user, _count: true },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: COUNT_BUDGETED_EVENTS,
            payload: res.data
        })

    } catch (e) {
        return false;
    }
}

export const searchBudgetedEvent = (token, identifier, user) => async dispatch => {
    try {
        let search = "";

        if (identifier !== "") {
            search = new RegExp("" + identifier + "");
        }

        const res = await axios({
            url: `${API}/events?budgeted=true&_id=${search}`,
            params: { user, _populate: 'user', _limit: 5 },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: SEARCH_BUDGETED_EVENT,
            payload: res.data
        });

    } catch (e) {
        return false;
    }
}

export const getUnbudgetedEvents = (token, _limit, _skip, user) => async dispatch => {
    try {
        const res = await axios({
            url: `${API}/events?unbudgeted=true`,
            params: { user, _populate: 'user', _limit, _skip, _sort: "createdAt:-1" },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: GET_UNBUDGETED_EVENTS,
            payload: res.data
        });
    } catch (e) {
        return false;
    }
}

export const countUnbudgetedEvents = (token, user) => async dispatch => {
    try {
        const res = await axios({
            url: `${API}/events?unbudgeted=true`,
            params: { user, _count: true },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: COUNT_UNBUDGETED_EVENTS,
            payload: res.data
        })

    } catch (e) {
        return false;
    }
}

export const searchUnbudgetedEvent = (token, identifier, user) => async dispatch => {
    try {
        let search = "";

        if (identifier !== "") {
            search = new RegExp("" + identifier + "");
        }

        const res = await axios({
            url: `${API}/events?unbudgeted=true&_id=${search}`,
            params: { user, _populate: 'user', _limit: 5 },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: SEARCH_UNBUDGETED_EVENT,
            payload: res.data
        });

    } catch (e) {
        return false;
    }
}
