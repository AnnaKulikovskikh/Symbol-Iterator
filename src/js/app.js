// TODO: write your code here
import Person from './person';
import Team from './team';

const first = new Person('first');
const second = new Person('second');
const third = new Person('third');
const fourth = new Person('fourth');
const fifth = new Person('fifth');

const teamEnemy = {
  first, second, third, fourth, fifth,
};
Team.iteration(teamEnemy);
