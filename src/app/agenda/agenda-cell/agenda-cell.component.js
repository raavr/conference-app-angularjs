import './agenda-cell.component.scss';
import template from './agenda-cell.component.html';

export const AgendaCellComponent = {
    bindings: {
        cell: "<"
    },
    template: template,
    require: { parent: "^^agenda" }
}

// export default function AgendaCellDirective() {
//     return {
//         restrict: "A",
//         require: "^^agenda",
//         scope: {
//             cell: "="
//         },
//         template: template,
//         link: function(scope, elem, attrs, agendaCtrl) {
//             scope.selectSpeaker = function(speaker) {
//                 agendaCtrl.selectSpeaker(speaker);
//             }
//         }
//     }
// }