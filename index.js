      let age = prompt("Ваш рік народження?");
      let city = prompt("У якому місті ви живете?");
      let sport = prompt("Твій улюбленний вид спорту?");

      let sportsChampions = {
        Футбол: "Lionel Messi",
        Баскетбол: "LeBron James",
        Тенис: "Novak Djokovic",
      };

      let message = "";

      if (age) {
        message += `Вам зараз ${2024 - age} років\n`;
      } else if (age === null) {
        message += `Шкода, що Ви не захотіли ввести свій вік\n`;
      }

      //   if (city == "Київ") {
      //     alert(`Ви живите у столиці ${city}`);
      //   } else if (city == "Вашингтон") {
      //     alert(`Ви живите у столиці ${city}`);
      //   } else if (city == "Лондон") {
      //     alert(`Ви живите у столиці ${city}`);
      //   } else if (city === null) {
      //     alert(`Шкода, що Ви не захотіли ввести своє місто`);
      //   } else {
      //     alert(`Ви живите у місті ${city}`);
      //   }

      //   switch (city) {
      //     case "Київ":
      //       message += `Ви живите у столиці ${city}\n`;
      //       break;
      //     case "Вашингтон":
      //       message += `Ви живите у столиці ${city}\n`;
      //       break;
      //     case "Лондон":
      //       message += `Ви живите у столиці ${city}\n`;
      //       break;
      //   }

      if (city) {
        switch (city) {
          case "Київ":
            message += `Ви живите у столиці ${city}\n`;
            break;
          case "Вашингтон":
            message += `Ви живите у столиці ${city}\n`;
            break;
          case "Лондон":
            message += `Ви живите у столиці ${city}\n`;
            break;
          default:
            message += `Ви живете у місті ${city}.\n`;
        }
      } else if (city === null) {
        message += `Шкода, що Ви не захотіли ввести своє місто\n`;
      }

      if (sportsChampions[sport]) {
        message += `Круто! Хочеш стати ${sportsChampions[sport]}?\n`;
      } else if (sport === null) {
        message += `Шкода, що Ви не захотіли ввести свій улюблений спорт\n`;
      } else {
        message += `Твій улюбленний спорт ${sport}`;
      }

      alert(message);