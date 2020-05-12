import { isEmail, isEmpty } from "validator";
// import axios from "axios";
import { filter } from "lodash";

export const emailValidator = async (email) => {
    try  {

        if (isEmail(email)) {
            return true;
        } else {
            throw new Error();
        }
        
    } catch(e) {
        return false;
    }
};

export const emptyValidator= (data) => {
    return filter(data, (emptyData) => {
        return isEmpty(emptyData.trim());
    });
}