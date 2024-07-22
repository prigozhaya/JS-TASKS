// Функция принимает массив meetups,
// и возвращает суммарное количество человек, находящихся на активных митапах

// membersOnActiveMeetups(meetups); // 1500

// Пример:
// const meetups = [
//   { name: 'JavaScript', isActive: true, members: 100 },
//   { name: 'Angular', isActive: true, members: 900 },
//   { name: 'Node', isActive: false, members: 600 },
//   { name: 'React', isActive: true, members: 500 },
// ];
// membersOnActiveMeetups(meetups); // 1500

// O(n)
function membersOnActiveMeetups(meetupsArray) {
  return meetupsArray.reduce(
    (acc, curr) => (acc += curr.isActive ? curr.members : 0),
    0
  );
}

const meetups = [
  { name: "JavaScript", isActive: true, members: 100 },
  { name: "Angular", isActive: true, members: 900 },
  { name: "Node", isActive: false, members: 600 },
  { name: "React", isActive: true, members: 500 },
];
console.log(membersOnActiveMeetups(meetups)); // 1500
