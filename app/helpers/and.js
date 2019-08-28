import { helper } from '@ember/component/helper';

/**
 * HTMLBars template helper for `and` operator to be used in if and unless
 * statements.
 *
 * @param   {Array} params
 * @returns {boolean}
 */
export function and (params) {
    for (let i = 0, len = params.length; i < len; i++) {
        if (Array.isArray(params[i])) {
            if (params[i].length === 0) {
                return false;
            }
        } else if (Boolean(params[i]) === false) {
            return false;
        }
    }

    return params.length > 0;
}

export default helper(and);
