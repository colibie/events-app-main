import {
    ADD_EVENT,
    GET_EVENTS,
    COUNT_EVENTS,
    SEARCH_EVENT,
    GET_BUDGETED_EVENTS,
    COUNT_BUDGETED_EVENTS,
    SEARCH_BUDGETED_EVENT,
    GET_UNBUDGETED_EVENTS,
    COUNT_UNBUDGETED_EVENTS,
    SEARCH_UNBUDGETED_EVENT,
} from "../actions/type";

const initialState = {
    eventAdded: false,
    userEvents: false,
    countEvents: false,
    searchedEvent: false,
    budgetedEvents: false,
    countBudgetedEvents: false,
    searchedBudgetedEvent: false,
    unbudgetedEvents: false,
    countUnbudgetedEvents: false,
    searchedUnbudgetedEvent: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                eventAdded: action.payload,
            }

        case GET_EVENTS:
            return {
                ...state,
                userEvents: action.payload,
            }

        case COUNT_EVENTS:
            return {
                ...state,
                countEvents: action.payload,
            }

        case SEARCH_EVENT:
            return {
                ...state,
                searchedEvent: action.payload
            }

        case GET_BUDGETED_EVENTS:
            return {
                ...state,
                budgetedEvents: action.payload,
            }

        case COUNT_BUDGETED_EVENTS:
            return {
                ...state,
                countBudgetedEvents: action.payload,
            }

        case SEARCH_BUDGETED_EVENT:
            return {
                ...state,
                searchedUnbudgetedEvent: action.payload
            }

        case GET_UNBUDGETED_EVENTS:
            return {
                ...state,
                unbudgetedEvents: action.payload,
            }

        case COUNT_UNBUDGETED_EVENTS:
            return {
                ...state,
                countUnbudgetedEvents: action.payload,
            }

        case SEARCH_UNBUDGETED_EVENT:
            return {
                ...state,
                searchedUnbudgetedEvent: action.payload
            }
        default: return state;
    }
}