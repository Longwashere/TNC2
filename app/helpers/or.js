import { helper } from '@ember/component/helper';

/**
 * HTMLBars template helper for `or` operator to be used in if and unless statements.
 *
 * @param {Array} params
 * @returns {boolean}
 */
export function or (params) {
    for (let i = 0, len = params.length; i < len; i++) {
        if (Array.isArray(params[i])) {
            if (params[i].length > 0) {
                return params[i];
            }
        } else if (Boolean(params[i]) === true) {
            return params[i];
        }
    }

    return false;
}

export default helper(or);
