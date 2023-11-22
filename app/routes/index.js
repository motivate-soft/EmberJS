import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let meetings = [];
    try {
      let response = await fetch(
        'https://nxrc76c8w5.execute-api.eu-west-2.amazonaws.com/TodaysMeetings',
      );
      meetings = await response.json();
    } catch (error) {
      console.error(error);
    }
    console.log(meetings);
    return meetings;
  }
}
