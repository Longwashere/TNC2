import { helper } from '@ember/component/helper';

export function isNotEqual ([lhs, rhs]) {
    return lhs !== rhs;
}

export default helper(isNotEqual);
