import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MeetingsComponent extends Component {
  @action getContent(meeting) {
    return meeting.track + ' ' + meeting.time + ' (' + meeting.numRaces + ')';
  }
  @action getLink(id) {
    return '/' + id;
  }
}
