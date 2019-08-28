import Helper from '@ember/component/helper';
import { isEmpty } from '@ember/utils';

export default Helper.extend({
    compute ([value]) {
        return isEmpty(value);
    }
});
