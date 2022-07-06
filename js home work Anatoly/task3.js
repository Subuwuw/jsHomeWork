const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// const dispResult = enterprises.map((enterprises) => {
//   const { name, departments } = enterprises; // упрощаем обращение

//   const departName = `${departments
//     .map(
//       (depart) =>
//         ` -${depart.name} (${depart.employees_count || `Нет`} Сотрудников)`
//     )
//     .join("")}`;

//   const countArray = departments.map((depart) => depart.employees_count);
//   let total = 0;
//   for (var i in countArray) {
//     total += countArray[i];
//   }
//   return `"${name}": (${total || `Нет`} Сотрудников) ${departName}`;
// });

// console.log(dispResult);
//
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 2. Написать функцию, которая будет принимать 1 аргумент
// (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function entName(name) {
//   const ok = [];
//   enterprises.forEach((ent) => {
//     const { name: enterprName, departments } = ent;
//     if (departments.find((elem) => elem.name == name || elem.id == name)) {
//       ok.push(enterprName);
//     }
//   });
//   return ok;
// }
// console.log(entName(6));

//
// 3. Написать функцию, которая будет добавлять предприятие.
// В качестве аргумента принимает название предприятия

// var newObjWithNewCompany = [...enterprises];

// function addCompany(name) {
//   newObjWithNewCompany.push({
//     id: 120,
//     name: name,
//     departments: [{ id: 10, name: "test" }],
//   });
// }
// addCompany("Чердак");
// console.log(newObjWithNewCompany);

// 4. Написать функцию, которая будет добавлять
//  отдел в предприятие. В качестве аргумента принимает
// id предприятия, в которое будет добавлен отдел и название отдела.

// var addNewDepartToCompany = [...enterprises];

// function addDepartToComp(id, name) {
//   addNewDepartToCompany.forEach(function (el, index) {
//     if (id == el.id) {
//       // addNewDepartToCompany[index] = {...addNewDepartToCompany[index], }
//       addNewDepartToCompany[index].departments.push({ id: 33, name: name });
//       console.log(
//         el.departments.filter((el) => {
//           return el;
//         })
//       );
//     }
//   });

//   const ok = [];
//   addNewDepartToCompany.forEach((ent) => {
//     const { name: enterprName, departments } = ent;
//     if (departments.find((elem) => elem.name == name || elem.id == name)) {
//       ok.push(enterprName);
//     }
//   });
//   return console.log(ok);
// }

// addDepartToComp(1, "Biyakugan");

// 5. Написать функцию для редактирования названия
//  предприятия. Принимает в качестве аргумента id
//  предприятия и новое имя предприятия.
// var replaceNameEnterp = [...enterprises];
// function renameEnterp(id, name) {
//   return replaceNameEnterp.forEach((el) => {
//     if (el.id == id) {
//       el.name = name;
//     }
//   });
// }

// renameEnterp(5, "ООО Жопыч");
// console.log(replaceNameEnterp);

// 6. Написать функцию для редактирования названия отдела.
// Принимает в качестве аргумента id отдела и новое имя отдела.

// var replaceNameDepart = [...enterprises];
// function renameDepart(id, name) {
//   return replaceNameDepart.map((el) => {
//     el.departments.forEach((ele) => {
//       if (ele.id == id) {
//         ele.name = name;
//       }
//     });
//   });
// }
// renameDepart(3, "Отделение Дегустации Роллов");

// console.log(
//   replaceNameDepart.map((el) => {
//     const { name } = el;
//     return el.departments.map((ele) => {
//       return `В ${name} находятся отделы: ${ele.id} ${ele.name}`;
//     });
//   })
// );

//
// 7. Написать функцию для удаления предприятия.
//  В качестве аргумента принимает id предприятия.

// var deleteEnterp = [...enterprises];
// function delEnterp(id) {
//   return deleteEnterp.filter((el) => {
//     return el.id !== id;
//   });
// }
// console.log(delEnterp(1));

//
//
// 8. Написать функцию для удаления отдела.
// В качестве аргумента принимает id отдела.
// Удалить отдел можно только, если в нем нет
//  сотрудников.

// var departDelete = [...enterprises];

// function depDelete(id) {
//   return departDelete.map((el) => {
//     return el.departments.filter((ele) => {
//       return ele.id !== id;
//     });
//   });
// }

// console.log(depDelete(10));

// 9. Написать функцию для переноса сотрудников между
//  отделами одного предприятия.
//  В качестве аргумента принимает два значения:
//   id отдела, из которого будут переноситься сотрудники
//   и id отдела, в который будут переноситься сотрудники).

var mvEmployees = [...enterprises];
function moveEmpl(idFrom, idTo) {
  mvEmployees.forEach((el) => {
    let countEmpl;

    const movedepIndex = el.departments.findIndex((ele) => {
      return ele.id == idFrom;
    });

    if (movedepIndex != -1) {
      countEmpl = el.departments[movedepIndex].employees_count;
      el.departments[movedepIndex].employees_count = 0;
    }
    const todepIndex = el.departments.findIndex((ele) => {
      return ele.id == idTo;
    });
    if (todepIndex != -1) {
      el.departments[todepIndex].employees_count += countEmpl;
    }
  });
  return mvEmployees;
}

console.log(moveEmpl(3, 2).map(({ departments }) => departments));
