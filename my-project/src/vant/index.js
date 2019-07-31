import {
     Search
} from 'vant';
import Vue from 'vue';
import { 
    Grid, GridItem 
} from 'vant';
// 分割线
import {
    Divider
} from 'vant';
// 下拉菜单
import { 
    DropdownMenu, DropdownItem 
} from 'vant';
// list
import {
     List
 } from 'vant';
 import {
      Cell
     } from 'vant';
export default () => {
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(List);
    Vue.use(Cell);
}
