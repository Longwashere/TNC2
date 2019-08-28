import { helper } from '@ember/component/helper';

export function isNot ([value]) {
    return !value;
}

export default helper(isNot);
