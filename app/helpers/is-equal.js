import { helper } from '@ember/component/helper';

export function isEqual ([lhs, rhs]) {
    return lhs === rhs;
}

export default helper(isEqual);
